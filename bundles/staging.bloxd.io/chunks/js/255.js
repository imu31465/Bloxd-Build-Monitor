export const id = 255;
export const ids = [255];
export const modules = {
  40301: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => yB,
      f: () => LB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(40171),
      IB = zB(37202),
      NB = zB(37171),
      uB = zB(40306),
      UB = zB(38783),
      aB = zB(37222),
      pB = zB(39965),
      rB = zB(38170),
      sB = zB(37865),
      JB = zB(40042),
      mB = zB(40086);
    let yB = (() => {
      var BB;
      let jB, zB, aB, yB, kB, GB, LB, gB, tB, SB, MB, EB, iB, qB, fB, oB, HB, DB, FB = uB.c,
        YB = [],
        VB = [],
        hB = [],
        XB = [],
        ZB = [],
        AB = [],
        TB = [],
        PB = [],
        WB = [],
        eB = [],
        lB = [],
        wB = [],
        xB = [],
        KB = [],
        CB = [],
        cB = [],
        bB = [],
        vB = [],
        RB = [],
        OB = [],
        Bj = [],
        jj = [],
        zj = [],
        Qj = [],
        nj = [];
      return BB = class extends FB {
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
          let jB, zB;
          if (this.mode === BB.PERSPECTIVE_CAMERA) this.fovMode === BB.FOVMODE_VERTICAL_FIXED ? (zB = 2 * this.minZ * Math.tan(this.fov / 2), jB = this.wJ().getAspectRatio(this) * zB) : (jB = 2 * this.minZ * Math.tan(this.fov / 2), zB = jB / this.wJ().getAspectRatio(this));
          else {
            const BB = this.wJ().getRenderWidth() / 2,
              QB = this.wJ().getRenderHeight() / 2;
            jB = (this.orthoRight ?? BB) - (this.orthoLeft ?? -BB), zB = (this.orthoTop ?? QB) - (this.orthoBottom ?? -QB)
          }
          return jB * zB
        }
        set orthoLeft(BB) {
          this._orthoLeft = BB;
          for (const jB of this._rigCameras) jB.orthoLeft = BB
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(BB) {
          this._orthoRight = BB;
          for (const jB of this._rigCameras) jB.orthoRight = BB
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(BB) {
          this._orthoBottom = BB;
          for (const jB of this._rigCameras) jB.orthoBottom = BB
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(BB) {
          this._orthoTop = BB;
          for (const jB of this._rigCameras) jB.orthoTop = BB
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(jB / (2 * BB))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(BB) {
          this._baseInertia = BB
        }
        set mode(BB) {
          this._mode = BB;
          for (const jB of this._rigCameras) jB.mode = BB
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(jB, zB, nB) {
          let uB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, JB.d)(), super(jB, nB, !1), this.inputs = (0, QB.g)(this, YB), this._position = (0, QB.g)(this, VB, NB.m.Zero()), this._upVector = ((0, QB.g)(this, hB), (0, QB.g)(this, XB, NB.m.Up())), this.oblique = ((0, QB.g)(this, ZB), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, QB.g)(this, AB, .8), this.projectionPlaneTilt = ((0, QB.g)(this, TB), (0, QB.g)(this, PB, 0)), this.minZ = ((0, QB.g)(this, WB), (0, QB.g)(this, eB, 1)), this.maxZ = ((0, QB.g)(this, lB), (0, QB.g)(this, wB, 1e4)), this._baseInertia = ((0, QB.g)(this, xB), .9), this._mode = BB.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new rB.e(0, 0, 1, 1), this.layerMask = (0, QB.g)(this, KB, 268435455), this.fovMode = ((0, QB.g)(this, CB), (0, QB.g)(this, cB, BB.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, QB.g)(this, bB), (0, QB.g)(this, vB, BB.RIG_MODE_NONE)), this.interaxialDistance = ((0, QB.g)(this, RB), (0, QB.g)(this, OB, void 0)), this.isStereoscopicSideBySide = ((0, QB.g)(this, Bj), (0, QB.g)(this, jj, void 0)), this.ignoreCameraMaxZ = ((0, QB.g)(this, zj), (0, QB.g)(this, Qj, !1)), this.customRenderTargets = ((0, QB.g)(this, nj), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new IB.c, this.onProjectionMatrixChangedObservable = new IB.c, this.onAfterCheckInputsObservable = new IB.c, this.onRestoreStateObservable = new IB.c, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new NB.c, this._postProcesses = new Array, this._activeMeshes = new dB.i(256), this._globalPosition = NB.m.Zero(), this._computedViewMatrix = NB.c.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = NB.c.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = NB.d.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.aY().defaultCameraLayerMask, this.aY().addCamera(this), uB && !this.aY().activeCamera && (this.aY().activeCamera = this), this.position = zB, this.renderPassId = this.aY().wJ().createRenderPassId(`Camera ${jB}`)
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
          return "xy"
        }
        toString(BB) {
          let jB = "Name: " + this.name;
          if (jB += ", type: " + this.getClassName(), this.animations)
            for (let zB = 0; zB < this.animations.length; zB++) jB += ", animation[0]: " + this.animations[zB].toString(BB);
          return jB
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
            for (const jB of this._postProcesses)
              if (jB && !jB.isReady()) return !1;
          return super.isReady(BB)
        }
        _initCache() {
          super._initCache(), this._cache.position = new NB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new NB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(BB) {
          BB || super._updateCache(), this._cache.position.jH(this.position), this._cache.upVector.jH(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const jB = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let zB = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === jB;
          if (!zB) return !1;
          const QB = this.wJ();
          return this.mode === BB.PERSPECTIVE_CAMERA ? zB = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === QB.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (zB = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === QB.getRenderWidth() && this._cache.renderHeight === QB.getRenderHeight(), this.oblique && (zB = zB && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), zB
        }
        attachControl(BB, jB) {}
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
          for (let jB = 0, zB = this._rigCameras.length; jB < zB; jB++) {
            const BB = this._rigCameras[jB],
              zB = BB._rigPostProcess;
            if (zB) {
              "pass" === zB.getEffectName() && (BB.isIntermediate = 0 === this._postProcesses.length), BB._postProcesses = this._postProcesses.slice(0).concat(zB), zB.markTextureDirty()
            } else BB._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !BB.isReusable() && this._postProcesses.indexOf(BB) > -1 ? (UB.c.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == jB || jB < 0 ? this._postProcesses.push(BB) : null === this._postProcesses[jB] ? this._postProcesses[jB] = BB : this._postProcesses.splice(jB, 0, BB), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.DjB(), this._postProcesses.indexOf(BB))
        }
        detachPostProcess(BB) {
          const jB = this._postProcesses.indexOf(BB); - 1 !== jB && (this._postProcesses[jB] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.DjB(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return NB.c.Identity()
        }
        getViewMatrix(BB) {
          return !BB && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.aY().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(BB) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== BB && (this._projectionMatrix = BB)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(jB) {
          if (this._doNotComputeProjectionMatrix || !jB && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const zB = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = zB, this._refreshFrustumPlanes = !0;
          const QB = this.wJ(),
            nB = this.aY(),
            dB = QB.jQB;
          if (this.mode === BB.PERSPECTIVE_CAMERA) {
            let jB;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = QB.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), jB = nB.useRightHandedSystem ? NB.c.PerspectiveFovRHToRef : NB.c.PerspectiveFovLHToRef, jB(this.fov, QB.getAspectRatio(this), dB ? zB : this.minZ, dB ? this.minZ : zB, this._projectionMatrix, this.fovMode === BB.FOVMODE_VERTICAL_FIXED, QB.isNDCHalfZRange, this.projectionPlaneTilt, dB)
          } else {
            const BB = QB.getRenderWidth() / 2,
              jB = QB.getRenderHeight() / 2;
            nB.useRightHandedSystem ? this.oblique ? NB.c.ObliqueOffCenterRHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -jB, this.orthoTop ?? jB, dB ? zB : this.minZ, dB ? this.minZ : zB, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, QB.isNDCHalfZRange) : NB.c.OrthoOffCenterRHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -jB, this.orthoTop ?? jB, dB ? zB : this.minZ, dB ? this.minZ : zB, this._projectionMatrix, QB.isNDCHalfZRange) : this.oblique ? NB.c.ObliqueOffCenterLHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -jB, this.orthoTop ?? jB, dB ? zB : this.minZ, dB ? this.minZ : zB, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, QB.isNDCHalfZRange) : NB.c.OrthoOffCenterLHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -jB, this.orthoTop ?? jB, dB ? zB : this.minZ, dB ? this.minZ : zB, this._projectionMatrix, QB.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = QB.getRenderWidth(), this._cache.renderHeight = QB.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(BB) {
          return (this.radius || (this.target ? NB.m.Distance(this.position, this.target) : this.position.length())) + BB
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? sB.b.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = sB.b.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), jB && this.rigCameras.length > 0) {
            let jB = !1;
            for (const zB of this.rigCameras) zB._updateFrustumPlanes(), jB = jB || BB.isInFrustum(zB._frustumPlanes);
            return jB
          }
          return BB.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(BB) {
          return this._updateFrustumPlanes(), BB.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, pB.k)("Ray")
        }
        getForwardRayToRef(BB) {
          throw (0, pB.k)("Ray")
        }
        dispose(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.aY().stopAnimation(this), this.aY().removeCamera(this); this._rigCameras.length > 0;) {
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
              const jB = this._postProcesses[BB];
              jB && jB.dispose(this)
            }
          }
          let QB = this.customRenderTargets.length;
          for (; --QB >= 0;) this.customRenderTargets[QB].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.aY().wJ().releaseRenderPassId(this.renderPassId), super.dispose(jB, zB)
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
        setCameraRigMode(jB, zB) {
          if (this.cameraRigMode !== jB) {
            for (; this._rigCameras.length > 0;) {
              const BB = this._rigCameras.pop();
              BB && BB.dispose()
            }
            if (this.cameraRigMode = jB, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = zB.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== BB.RIG_MODE_NONE) {
              const BB = this.createRigCamera(this.name + "_L", 0);
              BB && (BB._isLeftCamera = !0);
              const jB = this.createRigCamera(this.name + "_R", 1);
              jB && (jB._isRightCamera = !0), BB && jB && (this._rigCameras.push(BB), this._rigCameras.push(jB))
            }
            this._setRigMode(zB), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(BB) {}
        _getVRProjectionMatrix() {
          return NB.c.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.wJ().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(BB, jB) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[BB] = jB, "interaxialDistance" === BB && (this._cameraRigParams.stereoHalfAngle = jB / .0637 * (Math.PI / 180))
        }
        createRigCamera(BB, jB) {
          return null
        }
        _updateRigCameras() {
          for (let BB = 0; BB < this._rigCameras.length; BB++) this._rigCameras[BB].minZ = this.minZ, this._rigCameras[BB].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[BB].fov = this.fov, this._rigCameras[BB].upVector.jH(this.upVector);
          this.cameraRigMode === BB.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const BB = mB.b.Serialize(this);
          return BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), this.parent && this.parent._serializeAsParent(BB), this.inputs && this.inputs.serialize(BB), mB.b.AppendSerializedAnimations(this, BB), BB.gy = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
        }
        clone(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const QB = mB.b.Clone(BB.GetConstructorFromName(this.getClassName(), jB, this.aY(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return QB.name = jB, QB.parent = zB, this.onClonedObservable.notifyObservers(QB), QB
        }
        nC(BB) {
          const jB = NB.m.Zero();
          return this.getDirectionToRef(BB, jB), jB
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(BB, jB) {
          NB.m.TransformNormalToRef(BB, this.getWorldMatrix(), jB)
        }
        static GetConstructorFromName(jB, zB, QB) {
          let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            dB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const IB = uB.c.Construct(jB, zB, QB, {
            interaxial_distance: nB,
            isStereoscopicSideBySide: dB
          });
          return IB || (() => BB._CreateDefaultParsedCamera(zB, QB))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let BB = this.aY().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (BB *= -1), BB
        }
      }, (() => {
        const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(FB[Symbol.metadata] ?? null) : void 0;
        jB = [(0, nB.x)("position")], zB = [(0, nB.x)("upVector")], aB = [(0, nB.A)()], yB = [(0, nB.A)()], kB = [(0, nB.A)()], GB = [(0, nB.A)()], LB = [(0, nB.A)()], gB = [(0, nB.A)()], tB = [(0, nB.A)()], SB = [(0, nB.A)()], MB = [(0, nB.A)()], EB = [(0, nB.A)()], iB = [(0, nB.A)()], qB = [(0, nB.A)()], fB = [(0, nB.A)()], oB = [(0, nB.A)()], HB = [(0, nB.A)()], DB = [(0, nB.A)()], (0, QB.e)(BB, null, aB, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoLeft" in BB,
            get: BB => BB.orthoLeft
          },
          metadata: dB
        }, null, YB), (0, QB.e)(BB, null, yB, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoRight" in BB,
            get: BB => BB.orthoRight
          },
          metadata: dB
        }, null, YB), (0, QB.e)(BB, null, kB, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoBottom" in BB,
            get: BB => BB.orthoBottom
          },
          metadata: dB
        }, null, YB), (0, QB.e)(BB, null, GB, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoTop" in BB,
            get: BB => BB.orthoTop
          },
          metadata: dB
        }, null, YB), (0, QB.e)(BB, null, MB, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: BB => "inertia" in BB,
            get: BB => BB.inertia
          },
          metadata: dB
        }, null, YB), (0, QB.e)(BB, null, EB, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: BB => "mode" in BB,
            get: BB => BB.mode
          },
          metadata: dB
        }, null, YB), (0, QB.e)(null, null, jB, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: BB => "_position" in BB,
            get: BB => BB._position,
            set: (BB, jB) => {
              BB._position = jB
            }
          },
          metadata: dB
        }, VB, hB), (0, QB.e)(null, null, zB, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: BB => "_upVector" in BB,
            get: BB => BB._upVector,
            set: (BB, jB) => {
              BB._upVector = jB
            }
          },
          metadata: dB
        }, XB, ZB), (0, QB.e)(null, null, LB, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: BB => "fov" in BB,
            get: BB => BB.fov,
            set: (BB, jB) => {
              BB.fov = jB
            }
          },
          metadata: dB
        }, AB, TB), (0, QB.e)(null, null, gB, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: BB => "projectionPlaneTilt" in BB,
            get: BB => BB.projectionPlaneTilt,
            set: (BB, jB) => {
              BB.projectionPlaneTilt = jB
            }
          },
          metadata: dB
        }, PB, WB), (0, QB.e)(null, null, tB, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "minZ" in BB,
            get: BB => BB.minZ,
            set: (BB, jB) => {
              BB.minZ = jB
            }
          },
          metadata: dB
        }, eB, lB), (0, QB.e)(null, null, SB, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "maxZ" in BB,
            get: BB => BB.maxZ,
            set: (BB, jB) => {
              BB.maxZ = jB
            }
          },
          metadata: dB
        }, wB, xB), (0, QB.e)(null, null, iB, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "layerMask" in BB,
            get: BB => BB.layerMask,
            set: (BB, jB) => {
              BB.layerMask = jB
            }
          },
          metadata: dB
        }, KB, CB), (0, QB.e)(null, null, qB, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "fovMode" in BB,
            get: BB => BB.fovMode,
            set: (BB, jB) => {
              BB.fovMode = jB
            }
          },
          metadata: dB
        }, cB, bB), (0, QB.e)(null, null, fB, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "cameraRigMode" in BB,
            get: BB => BB.cameraRigMode,
            set: (BB, jB) => {
              BB.cameraRigMode = jB
            }
          },
          metadata: dB
        }, vB, RB), (0, QB.e)(null, null, oB, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "interaxialDistance" in BB,
            get: BB => BB.interaxialDistance,
            set: (BB, jB) => {
              BB.interaxialDistance = jB
            }
          },
          metadata: dB
        }, OB, Bj), (0, QB.e)(null, null, HB, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: BB => "isStereoscopicSideBySide" in BB,
            get: BB => BB.isStereoscopicSideBySide,
            set: (BB, jB) => {
              BB.isStereoscopicSideBySide = jB
            }
          },
          metadata: dB
        }, jj, zj), (0, QB.e)(null, null, DB, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "ignoreCameraMaxZ" in BB,
            get: BB => BB.ignoreCameraMaxZ,
            set: (BB, jB) => {
              BB.ignoreCameraMaxZ = jB
            }
          },
          metadata: dB
        }, Qj, nj), dB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: dB
        })
      })(), BB._CreateDefaultParsedCamera = (BB, jB) => {
        throw (0, pB.k)("UniversalCamera")
      }, BB.PERSPECTIVE_CAMERA = 0, BB.ORTHOGRAPHIC_CAMERA = 1, BB.FOVMODE_VERTICAL_FIXED = 0, BB.FOVMODE_HORIZONTAL_FIXED = 1, BB.RIG_MODE_NONE = 0, BB.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, BB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, BB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, BB.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, BB.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, BB.RIG_MODE_VR = 20, BB.RIG_MODE_CUSTOM = 22, BB.ForceAttachControlToAlwaysPreventDefault = !1, BB
    })();

    function kB(BB, jB) {
      const zB = BB.type,
        QB = yB.GetConstructorFromName(zB, BB.name, jB, BB.interaxial_distance, BB.isStereoscopicSideBySide),
        nB = mB.b.Parse(QB, BB, jB);
      if (void 0 !== BB.parentId && (nB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (nB._waitingParentInstanceIndex = BB.parentInstanceIndex), nB.inputs && (nB.inputs.parse(BB), nB._setupInputs()), BB.upVector && (nB.upVector = NB.m.FromArray(BB.upVector)), nB.setPosition && (nB.position.U3(0, 0, 0), nB.setPosition(NB.m.FromArray(BB.position))), BB.target && nB.setTarget && nB.setTarget(NB.m.FromArray(BB.target)), BB.cameraRigMode) {
        const jB = BB.interaxial_distance ? {
          interaxialDistance: BB.interaxial_distance
        } : {};
        nB.setCameraRigMode(BB.cameraRigMode, jB)
      }
      if (BB.animations) {
        for (let jB = 0; jB < BB.animations.length; jB++) {
          const zB = BB.animations[jB],
            QB = (0, aB.b)("BABYLON.Animation");
          QB && nB.animations.push(QB.Parse(zB))
        }
        uB.c.ParseAnimationRanges(nB, BB, jB)
      }
      return BB.autoAnimate && jB.beginAnimation(nB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), void 0 !== BB.isEnabled && nB.mH(BB.isEnabled), nB
    }
    let GB = !1;

    function LB() {
      GB || (GB = !0, yB.Parse = kB)
    }
  },
  40319: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(37171);
    class nB {
      constructor(BB, jB, zB) {
        this._cameraPosition = jB, this._behavior = zB, this.activeInput = !1, this.speed = 1, this.pw = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new QB.m, this.rotationAccumulatedPixels = new QB.m, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = QB.m.Zero(), this.rotationDeltaCurrentFrame = QB.m.Zero(), this._zoomVelocity = 0, this._panVelocity = new QB.m, this.referenceFrameRate = 60, this._rotationVelocity = new QB.m, this._prevFrameTimeMs = 0, this._scene = BB
      }
      computeCurrentFrameDeltas() {
        const BB = this._scene.wJ().getDeltaTime(),
          jB = this._getEffectiveDeltaMs(BB);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.S_(0), this.rotationDeltaCurrentFrame.S_(0), this.zoomDeltaCurrentFrame = 0, void(BB > 0 && (this._prevFrameTimeMs = BB));
        this.panDeltaCurrentFrame.S_(0), this.rotationDeltaCurrentFrame.S_(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.U3(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * jB, this.panDeltaCurrentFrame), this._rotationVelocity.U3(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.U3(this._rotationVelocity.x * this.speed * this.rotationXSpeed * jB, this._rotationVelocity.y * this.speed * this.rotationYSpeed * jB, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.pw * this._zoomSpeedMultiplier) * jB, BB > 0 && (this._prevFrameTimeMs = BB), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.S_(0), this.rotationAccumulatedPixels.S_(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.S_(0), this.rotationAccumulatedPixels.S_(0)
      }
      resetPanVelocity() {
        this._panVelocity.S_(0), this.panAccumulatedPixels.S_(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(BB) {
        const jB = this._scene.wJ().getDeltaTime(),
          zB = this._getEffectiveDeltaMs(jB),
          QB = 1e3 / this.referenceFrameRate;
        return Math.pow(BB, zB / QB)
      }
      getFrameIndependentInputScale(BB) {
        const jB = 1 - BB;
        if (jB <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(BB)) / jB
      }
      _getEffectiveDeltaMs(BB) {
        return BB > 0 ? BB : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(BB, jB, zB) {
        let QB = BB;
        const nB = this._scene.wJ().getDeltaTime(),
          dB = this._getEffectiveDeltaMs(nB);
        if (0 === dB) return QB;
        const IB = this.getFrameIndependentDecay(zB);
        if (QB *= IB, 0 !== jB || this.activeInput) {
          const BB = 1 - zB;
          QB += jB / dB * (BB > 0 ? (1 - IB) / BB : 1)
        } else Math.abs(QB) < 1e-6 && (QB = 0);
        return QB
      }
    }
  },
  40324: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      constructor(BB, jB) {
        this.inputMap = [], this.handlers = BB, this._createDefaultEntries = jB, this.resetInputMap()
      }
      resolveInteraction(BB, jB) {
        for (const zB of this.inputMap)
          if (zB.source === BB && this._entryMatches(zB, jB)) return zB;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(BB, jB, zB) {
        const QB = this.inputMap;
        for (let nB = 0; nB < QB.length; nB++) {
          const dB = QB[nB];
          if (dB.source === BB && dB.interaction === jB && this._entryConditionsMatch(dB, zB)) return dB
        }
      }
      getEntries(BB, jB, zB) {
        const QB = [],
          nB = this.inputMap;
        for (let dB = 0; dB < nB.length; dB++) {
          const IB = nB[dB];
          IB.source === BB && IB.interaction === jB && this._entryConditionsMatch(IB, zB) && QB.push(IB)
        }
        return QB
      }
      addEntry(BB) {
        const jB = this._entrySpecificity(BB);
        let zB = this.inputMap.length;
        for (let QB = 0; QB < this.inputMap.length; QB++)
          if (this._entrySpecificity(this.inputMap[QB]) < jB) {
            zB = QB;
            break
          } this.inputMap.splice(zB, 0, BB)
      }
      setInteraction(BB, jB, zB) {
        const QB = this.resolveInteraction(BB, jB);
        return QB && this._entryCoversAllConditionsOf(QB, jB) ? (QB.interaction = zB, !0) : (this.addEntry({
          source: BB,
          ...jB ?? {},
          interaction: zB
        }), !0)
      }
      _entryCoversAllConditionsOf(BB, jB) {
        if (!jB) return !0;
        const zB = BB;
        for (const QB of Object.keys(jB)) {
          const BB = jB[QB];
          if (void 0 !== BB)
            if ("modifiers" === QB) {
              const jB = zB.modifiers ?? {};
              for (const zB of Object.keys(BB))
                if (void 0 !== BB[zB] && void 0 === jB[zB]) return !1
            } else if (void 0 === zB[QB]) return !1
        }
        return !0
      }
      setInteractions(BB, jB, zB) {
        let QB = 0;
        const nB = this.inputMap;
        for (let dB = 0; dB < nB.length; dB++) {
          const IB = nB[dB];
          IB.source === BB && this._entryMatches(IB, jB) && (IB.interaction = zB, QB++)
        }
        return QB
      }
      _entryMatches(BB, jB) {
        switch (BB.source) {
          case "pointer":
            return (void 0 === BB.button || BB.button === jB?.button) && this._matchModifiers(BB.modifiers, jB?.modifiers);
          case "wheel":
            return this._matchModifiers(BB.modifiers, jB?.modifiers);
          case "touch":
            return void 0 === BB.touchCount || BB.touchCount === jB?.touchCount;
          case "keyboard":
            return (void 0 === BB.key || (Array.isArray(BB.key) ? -1 !== BB.key.indexOf(jB?.key ?? -1) : BB.key === jB?.key)) && this._matchModifiers(BB.modifiers, jB?.modifiers)
        }
      }
      _entryConditionsMatch(BB, jB) {
        if (!jB) return !0;
        switch (BB.source) {
          case "pointer":
            return (!("button" in jB) || BB.button === jB.button) && (!("modifiers" in jB) || this._entryModifiersMatch(BB.modifiers, jB.modifiers));
          case "wheel":
            return !("modifiers" in jB) || this._entryModifiersMatch(BB.modifiers, jB.modifiers);
          case "touch":
            return !("touchCount" in jB) || BB.touchCount === jB.touchCount;
          case "keyboard":
            if ("key" in jB) {
              if (void 0 === BB.key) return void 0 === jB.key;
              if (void 0 === jB.key || (Array.isArray(BB.key) ? -1 === BB.key.indexOf(jB.key) : BB.key !== jB.key)) return !1
            }
            return !("modifiers" in jB) || this._entryModifiersMatch(BB.modifiers, jB.modifiers)
        }
      }
      _entrySpecificity(BB) {
        let jB = 0;
        return "button" in BB && void 0 !== BB.button && jB++, "key" in BB && void 0 !== BB.key && jB++, "touchCount" in BB && void 0 !== BB.touchCount && jB++, "modifiers" in BB && BB.modifiers && jB++, jB
      }
      _matchModifiers(BB, jB) {
        return !BB || (void 0 === BB.ctrl || BB.ctrl === (jB?.ctrl ?? !1)) && ((void 0 === BB.shift || BB.shift === (jB?.shift ?? !1)) && (void 0 === BB.alt || BB.alt === (jB?.alt ?? !1)))
      }
      _entryModifiersMatch(BB, jB) {
        if (!jB) return !BB;
        return void 0 !== jB.ctrl || void 0 !== jB.shift || void 0 !== jB.alt ? (void 0 === jB.ctrl || BB?.ctrl === jB.ctrl) && ((void 0 === jB.shift || BB?.shift === jB.shift) && (void 0 === jB.alt || BB?.alt === jB.alt)) : !BB || void 0 === BB.ctrl && void 0 === BB.shift && void 0 === BB.alt
      }
    }
  },
  40292: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => kB,
      g: () => mB
    });
    var QB = zB(40066),
      nB = zB(40068),
      dB = zB(40301),
      IB = zB(37171),
      NB = zB(37178),
      uB = zB(40312),
      UB = zB(40306),
      aB = zB(40319),
      pB = zB(40324);
    class rB extends aB.c {
      constructor(BB, jB, zB) {
        super(BB, jB, zB), this.input = new pB.c({
          translate: (BB, jB, zB) => {
            this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += jB, this.panAccumulatedPixels.z += zB
          },
          rotate: (BB, jB) => {
            this.rotationAccumulatedPixels.x += BB, this.rotationAccumulatedPixels.y += jB
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
    const sB = IB.c.Zero(),
      JB = IB.d.Identity();
    let mB = (() => {
        var BB;
        let jB, zB, UB, aB, pB = dB.b,
          mB = [],
          yB = [],
          kB = [],
          GB = [],
          LB = [],
          gB = [],
          tB = [],
          SB = [];
        return BB = class extends pB {
          get inertia() {
            return this._targetInertia
          }
          set inertia(BB) {
            this._targetInertia = BB, this.movement && (this.movement.panInertia = BB, this.movement.rotationInertia = BB)
          }
          constructor(BB, jB, zB) {
            super(BB, jB, zB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new IB.m(0, 0, 0), this.cameraRotation = new IB.i(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, QB.g)(this, mB, !1), this.rotation = ((0, QB.g)(this, yB), (0, QB.g)(this, kB, void 0)), this.rotationQuaternion = (0, QB.g)(this, GB), this.speed = (0, QB.g)(this, LB, 2), this.noRotationConstraint = ((0, QB.g)(this, gB), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = NB.c, this._rotationEpsilon = NB.c, this.lockedTarget = (0, QB.g)(this, tB, null), this._currentTarget = ((0, QB.g)(this, SB), IB.m.Zero()), this._initialFocalDistance = 1, this._viewMatrix = IB.c.Zero(), this._cameraTransformMatrix = IB.c.Zero(), this._cameraRotationMatrix = IB.c.Zero(), this._transformedReferencePoint = IB.m.Zero(), this._deferredPositionUpdate = new IB.m, this._deferredRotationQuaternionUpdate = new IB.d, this._deferredRotationUpdate = new IB.m, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = IB.m.Forward(this.aY().useRightHandedSystem), this.rotation = new IB.m(0, this.aY().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new rB(this.aY(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(BB) {
            this.getWorldMatrix();
            const jB = IB.h.KJ[0],
              zB = IB.h.KJ[1];
            return zB.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(zB, jB), jB.scaleInPlace(BB), this.globalPosition.add(jB)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.U3(0, 0, 0), this.cameraRotation.U3(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new IB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new IB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new IB.d(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(BB) {
            BB || super._updateCache();
            const jB = this._getLockedTargetPosition();
            jB ? this._cache.lockedTarget ? this._cache.lockedTarget.jH(jB) : this._cache.lockedTarget = jB.clone() : this._cache.lockedTarget = null, this._cache.rotation.jH(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.jH(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const BB = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(BB) : !BB) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const BB = this.wJ();
            return this.speed * Math.sqrt(BB.getDeltaTime() / (100 * BB.getFps()))
          }
          setTarget(BB) {
            this.upVector.normalize(), this._initialFocalDistance = BB.subtract(this.position).length(), this.position.z === BB.z && (this.position.z += NB.c), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.aY().useRightHandedSystem ? IB.c.LookAtRHToRef(this.position, BB, IB.m.UpReadOnly, sB) : IB.c.LookAtLHToRef(this.position, BB, IB.m.UpReadOnly, sB), sB.invert();
            const jB = this.rotationQuaternion || JB;
            IB.d.FromRotationMatrixToRef(sB, jB), jB.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(IB.h.Matrix[0]), IB.m.TransformNormalToRef(this.cameraDirection, IB.h.Matrix[0], IB.h.KJ[0]), this._deferredPositionUpdate.addInPlace(IB.h.KJ[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.jH(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.jH(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const BB = this.movement,
              jB = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            BB.panAccumulatedPixels.addInPlace(this.cameraDirection), BB.rotationAccumulatedPixels.x += this.cameraRotation.x, BB.rotationAccumulatedPixels.y += this.cameraRotation.y, BB.computeCurrentFrameDeltas(), this.cameraDirection.jH(BB.panDeltaCurrentFrame), this.cameraRotation.set(BB.rotationDeltaCurrentFrame.x, BB.rotationDeltaCurrentFrame.y);
            const zB = this.speed * this._panningEpsilon;
            !jB && Math.abs(this.cameraDirection.x) < zB && Math.abs(this.cameraDirection.y) < zB && Math.abs(this.cameraDirection.z) < zB && (this.cameraDirection.S_(0), BB.resetPanVelocity());
            const QB = this.invertRotation ? -this.inverseRotationSpeed : 1,
              nB = this._decideIfNeedsToMove(),
              dB = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.jH(this.rotation), this._deferredPositionUpdate.jH(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.jH(this.rotationQuaternion), nB && this._updatePosition(), dB) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * QB, this._deferredRotationUpdate.y += this.cameraRotation.y * QB, !this.noRotationConstraint) {
                const BB = 1.570796;
                this._deferredRotationUpdate.x > BB && (this._deferredRotationUpdate.x = BB), this._deferredRotationUpdate.x < -BB && (this._deferredRotationUpdate.x = -BB)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.jH(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (IB.d.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.jH(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.S_(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : IB.c.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return IB.m.TransformNormalToRef(IB.m.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), IB.m.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? uB.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (IB.d.FromEulerVectorToRef(this.rotation, JB), uB.c.Y.rotateByQuaternionToRef(JB, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(BB, jB, zB) {
            if (this.aY().useRightHandedSystem ? IB.c.LookAtRHToRef(BB, jB, zB, this._viewMatrix) : IB.c.LookAtLHToRef(BB, jB, zB, this._viewMatrix), this.parent) {
              const BB = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(BB, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(jB, zB) {
            if (this.cameraRigMode !== dB.b.RIG_MODE_NONE) {
              const zB = new BB(jB, this.position.clone(), this.aY());
              return zB.isRigCamera = !0, zB.rigParent = this, this.cameraRigMode === dB.b.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new IB.d), zB._cameraRigParams = {}, zB.rotationQuaternion = new IB.d), zB.mode = this.mode, zB.orthoLeft = this.orthoLeft, zB.orthoRight = this.orthoRight, zB.orthoTop = this.orthoTop, zB.orthoBottom = this.orthoBottom, zB
            }
            return null
          }
          _updateRigCameras() {
            const BB = this._rigCameras[0],
              jB = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case dB.b.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case dB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case dB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case dB.b.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case dB.b.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const zB = this.cameraRigMode === dB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  QB = this.cameraRigMode === dB.b.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * zB, BB), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * QB, jB);
                break
              }
              case dB.b.RIG_MODE_VR:
                BB.rotationQuaternion && jB.rotationQuaternion && this.rotationQuaternion ? (BB.rotationQuaternion.jH(this.rotationQuaternion), jB.rotationQuaternion.jH(this.rotationQuaternion)) : (BB.rotation.jH(this.rotation), jB.rotation.jH(this.rotation)), BB.position.jH(this.position), jB.position.jH(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(jB, zB) {
            this.getTarget().subtractToRef(this.position, BB._TargetFocalPoint), BB._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const QB = BB._TargetFocalPoint.addInPlace(this.position);
            IB.c.TranslationToRef(-QB.x, -QB.y, -QB.z, BB._TargetTransformMatrix), BB._TargetTransformMatrix.multiplyToRef(IB.c.RotationAxis(zB.upVector, jB), BB._RigCamTransformMatrix), IB.c.TranslationToRef(QB.x, QB.y, QB.z, BB._TargetTransformMatrix), BB._RigCamTransformMatrix.multiplyToRef(BB._TargetTransformMatrix, BB._RigCamTransformMatrix), IB.m.TransformCoordinatesToRef(this.position, BB._RigCamTransformMatrix, zB.position), zB.setTarget(QB)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const dB = "function" === typeof Symbol && Symbol.metadata ? Object.create(pB[Symbol.metadata] ?? null) : void 0;
          jB = [(0, nB.A)()], zB = [(0, nB.x)()], UB = [(0, nB.A)()], aB = [(0, nB.s)("lockedTargetId")], (0, QB.e)(null, null, jB, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: BB => "updateUpVectorFromRotation" in BB,
              get: BB => BB.updateUpVectorFromRotation,
              set: (BB, jB) => {
                BB.updateUpVectorFromRotation = jB
              }
            },
            metadata: dB
          }, mB, yB), (0, QB.e)(null, null, zB, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: BB => "rotation" in BB,
              get: BB => BB.rotation,
              set: (BB, jB) => {
                BB.rotation = jB
              }
            },
            metadata: dB
          }, kB, GB), (0, QB.e)(null, null, UB, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: BB => "speed" in BB,
              get: BB => BB.speed,
              set: (BB, jB) => {
                BB.speed = jB
              }
            },
            metadata: dB
          }, LB, gB), (0, QB.e)(null, null, aB, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: BB => "lockedTarget" in BB,
              get: BB => BB.lockedTarget,
              set: (BB, jB) => {
                BB.lockedTarget = jB
              }
            },
            metadata: dB
          }, tB, SB), dB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: dB
          })
        })(), BB._RigCamTransformMatrix = new IB.c, BB._TargetTransformMatrix = new IB.c, BB._TargetFocalPoint = new IB.m, BB
      })(),
      yB = !1;

    function kB() {
      yB || (yB = !0, UB.c.AddNodeConstructor("TargetCamera", ((BB, jB) => () => new mB(BB, IB.m.Zero(), jB))))
    }
  },
  40039: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB
    });
    var QB = zB(39980);
    let nB = !1;

    function dB() {
      nB || (nB = !0, QB.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, QB.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, QB.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, QB.c.prototype.getAspectRatio = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = BB.viewport;
        return this.getRenderWidth(jB) * zB.width / (this.getRenderHeight(jB) * zB.height)
      }, QB.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, QB.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40101: (BB, jB, zB) => {
    var QB = zB(39980),
      nB = zB(40108);
    let dB = !1;
    dB || (dB = !0, (0, nB.y)(), QB.c.prototype._loadFileAsync = async function(BB, jB, zB) {
      return await new Promise(((QB, nB) => {
        this._loadFile(BB, (BB => {
          QB(BB)
        }), void 0, jB, zB, ((BB, jB) => {
          nB(jB)
        }))
      }))
    })
  },
  40092: (BB, jB, zB) => {
    (0, zB(40042).d)()
  },
  40042: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => dB
    });
    var QB = zB(39980);
    let nB = !1;

    function dB() {
      nB || (nB = !0, QB.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, QB.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, QB.c.prototype.createRenderPassId = function(BB) {
        const jB = ++QB.c._RenderPassIdCounter;
        return this._renderPassNames[jB] = BB ?? "NONAME", jB
      }, QB.c.prototype.releaseRenderPassId = function(BB) {
        this._renderPassNames[BB] = void 0;
        for (let jB = 0; jB < this.scenes.length; ++jB) {
          const zB = this.scenes[jB];
          for (let jB = 0; jB < zB.meshes.length; ++jB) {
            const QB = zB.meshes[jB];
            if (QB._releaseRenderPassId(BB), QB.cL)
              for (let jB = 0; jB < QB.cL.length; ++jB) {
                QB.cL[jB]._removeDrawWrapper(BB)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(BB)
      })
    }
  },
  40137: (BB, jB, zB) => {
    var QB = zB(40145),
      nB = zB(39980);
    let dB = !1;
    dB || (dB = !0, nB.c.GetCompatibleTextureLoader = QB.d)
  },
  40046: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(39922);
    let nB = !1;

    function dB() {
      nB || (nB = !0, QB.ThinEngine.prototype.setAlphaMode = function(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[zB] === BB) {
          if (!jB) {
            const jB = 0 === BB;
            this.depthCullingState.depthMask !== jB && (this.depthCullingState.depthMask = jB)
          }
          return
        }
        const QB = 0 === BB;
        this._alphaState.setAlphaBlend(!QB, zB), this._alphaState.setAlphaMode(BB, zB), jB || (this.depthCullingState.depthMask = QB), this._alphaMode[zB] = BB
      })
    }
  },
  40051: (BB, jB, zB) => {
    var QB = zB(39913),
      nB = zB(38783),
      dB = zB(39922),
      IB = zB(40053),
      NB = zB(40025);
    class uB extends IB.d {
      setDepthStencilTexture(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(BB, jB), !BB) return;
        const zB = this._engine,
          QB = this._context,
          nB = BB._hardwareTexture;
        if (nB && BB._autoMSAAManagement && this._MSAAFramebuffer) {
          const jB = zB._currentFramebuffer;
          zB._bindUnboundFramebuffer(this._MSAAFramebuffer), QB.framebufferRenderbuffer(QB.FRAMEBUFFER, (0, NB.d)(BB.format) ? QB.DEPTH_STENCIL_ATTACHMENT : QB.DEPTH_ATTACHMENT, QB.RENDERBUFFER, nB.getMSAARenderBuffer()), zB._bindUnboundFramebuffer(jB)
        }
      }
      constructor(BB, jB, zB, QB, nB) {
        super(BB, jB, zB, QB), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = nB
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
          jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          dB = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const BB = this._engine,
            jB = BB._currentFramebuffer,
            zB = this._context;
          BB._bindUnboundFramebuffer(this._framebuffer), zB.framebufferRenderbuffer(zB.FRAMEBUFFER, zB.DEPTH_STENCIL_ATTACHMENT, zB.RENDERBUFFER, null), zB.framebufferRenderbuffer(zB.FRAMEBUFFER, zB.DEPTH_ATTACHMENT, zB.RENDERBUFFER, null), zB.framebufferRenderbuffer(zB.FRAMEBUFFER, zB.STENCIL_ATTACHMENT, zB.RENDERBUFFER, null), BB._bindUnboundFramebuffer(jB), zB.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(BB, jB, zB, QB, nB, dB)
      }
      shareDepth(BB) {
        super.shareDepth(BB);
        const jB = this._context,
          zB = this._depthStencilBuffer,
          QB = BB._MSAAFramebuffer || BB._framebuffer,
          nB = this._engine;
        BB._depthStencilBuffer && BB._depthStencilBuffer !== zB && jB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = zB;
        const dB = BB._generateStencilBuffer ? jB.DEPTH_STENCIL_ATTACHMENT : jB.DEPTH_ATTACHMENT;
        nB._bindUnboundFramebuffer(QB), jB.framebufferRenderbuffer(jB.FRAMEBUFFER, dB, jB.RENDERBUFFER, zB), nB._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nB = BB._hardwareTexture;
        if (!nB) return;
        const dB = this._framebuffer,
          IB = this._engine,
          NB = IB._currentFramebuffer;
        let uB;
        if (IB._bindUnboundFramebuffer(dB), IB.gm > 1) {
          const dB = this._context;
          uB = dB["COLOR_ATTACHMENT" + jB], BB.is2DArray || BB.is3D ? (zB = zB ?? this.layerIndices?.[jB] ?? 0, dB.framebufferTextureLayer(dB.FRAMEBUFFER, uB, nB.underlyingResource, QB, zB)) : BB.isCube ? (zB = zB ?? this.faceIndices?.[jB] ?? 0, dB.framebufferTexture2D(dB.FRAMEBUFFER, uB, dB.TEXTURE_CUBE_MAP_POSITIVE_X + zB, nB.underlyingResource, QB)) : dB.framebufferTexture2D(dB.FRAMEBUFFER, uB, dB.TEXTURE_2D, nB.underlyingResource, QB)
        } else {
          const BB = this._context;
          uB = BB["COLOR_ATTACHMENT" + jB + "_WEBGL"];
          const dB = void 0 !== zB ? BB.TEXTURE_CUBE_MAP_POSITIVE_X + zB : BB.TEXTURE_2D;
          BB.framebufferTexture2D(BB.FRAMEBUFFER, uB, dB, nB.underlyingResource, QB)
        }
        if (BB._autoMSAAManagement && this._MSAAFramebuffer) {
          const BB = this._context;
          IB._bindUnboundFramebuffer(this._MSAAFramebuffer), BB.framebufferRenderbuffer(BB.FRAMEBUFFER, uB, BB.RENDERBUFFER, nB.getMSAARenderBuffer())
        }
        IB._bindUnboundFramebuffer(NB)
      }
      setTexture(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(BB, jB, zB), this._bindTextureRenderTarget(BB, jB)
      }
      setLayerAndFaceIndices(BB, jB) {
        if (super.setLayerAndFaceIndices(BB, jB), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const zB = this._attachments?.length ?? this.textures.length;
        for (let QB = 0; QB < zB; QB++) {
          const BB = this.textures[QB];
          BB && (BB.is2DArray || BB.is3D ? this._bindTextureRenderTarget(BB, QB, this.layerIndices[QB]) : BB.isCube ? this._bindTextureRenderTarget(BB, QB, this.faceIndices[QB]) : this._bindTextureRenderTarget(BB, QB))
        }
      }
      setLayerAndFaceIndex() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(BB, jB, zB), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const QB = this.textures[BB];
        QB.is2DArray || QB.is3D ? this._bindTextureRenderTarget(this.textures[BB], BB, this.layerIndices[BB]) : QB.isCube && this._bindTextureRenderTarget(this.textures[BB], BB, this.faceIndices[BB])
      }
      resolveMSAATextures() {
        const BB = this._engine,
          jB = BB._currentFramebuffer;
        BB._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), BB._bindUnboundFramebuffer(jB)
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const jB = this._context;
        BB || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (jB.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (jB.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (jB.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(BB)
      }
    }
    let UB = !1;
    UB || (UB = !0, dB.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(BB, jB, zB) {
      const QB = new uB(BB, jB, zB, this, this._gl);
      return this._renderTargetWrapperCache.push(QB), QB
    }, dB.ThinEngine.prototype.createRenderTargetTexture = function(BB, jB) {
      const zB = this._createHardwareRenderTargetWrapper(!1, !1, BB);
      let QB, nB, dB = !0,
        IB = !1,
        NB = !1,
        uB = 1;
      void 0 !== jB && "object" === typeof jB && (dB = jB.generateDepthBuffer ?? !0, IB = !!jB.generateStencilBuffer, NB = !!jB.noColorAttachment, QB = jB.colorAttachment, uB = jB.samples ?? 1, nB = jB.label);
      const UB = QB || (NB ? null : this._createInternalTexture(BB, jB, !0, 5)),
        aB = BB.width || BB,
        pB = BB.height || BB,
        rB = this._currentFramebuffer,
        sB = this._gl,
        JB = sB.createFramebuffer();
      if (this._bindUnboundFramebuffer(JB), zB._depthStencilBuffer = this._setupFramebufferDepthAttachments(IB, dB, aB, pB), !UB || UB.is2DArray || UB.is3D || sB.framebufferTexture2D(sB.FRAMEBUFFER, sB.COLOR_ATTACHMENT0, sB.TEXTURE_2D, UB._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(rB), zB.label = nB ?? "RenderTargetWrapper", zB._framebuffer = JB, zB._generateDepthBuffer = dB, zB._generateStencilBuffer = IB, zB.setTextures(UB), QB) {
        if (zB._samples = QB.samples, QB.samples > 1) {
          const BB = QB._hardwareTexture.getMSAARenderBuffer(0);
          zB._MSAAFramebuffer = sB.createFramebuffer(), this._bindUnboundFramebuffer(zB._MSAAFramebuffer), sB.framebufferRenderbuffer(sB.FRAMEBUFFER, sB.COLOR_ATTACHMENT0, sB.RENDERBUFFER, BB), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(zB, uB);
      return zB
    }, dB.ThinEngine.prototype._createDepthStencilTexture = function(BB, jB, zB) {
      const dB = this._gl,
        IB = BB.layers || 0,
        uB = BB.depth || 0;
      let UB = dB.TEXTURE_2D;
      0 !== IB ? UB = dB.TEXTURE_2D_ARRAY : 0 !== uB && (UB = dB.TEXTURE_3D);
      const aB = new QB.d(this, 12);
      if (aB.label = jB.label, !this._caps.depthTextureExtension) return nB.c.Error("Depth texture is not supported by your browser or hardware."), aB;
      const pB = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...jB
      };
      if (this._bindTextureDirectly(UB, aB, !0), this._setupDepthStencilTexture(aB, BB, 0 !== pB.comparisonFunction && pB.bilinearFiltering, pB.comparisonFunction, pB.samples), void 0 !== pB.depthTextureFormat) {
        if (15 !== pB.depthTextureFormat && 16 !== pB.depthTextureFormat && 17 !== pB.depthTextureFormat && 13 !== pB.depthTextureFormat && 14 !== pB.depthTextureFormat && 18 !== pB.depthTextureFormat) return nB.c.Error(`Depth texture ${pB.depthTextureFormat} format is not supported.`), aB;
        aB.format = pB.depthTextureFormat
      } else aB.format = pB.generateStencil ? 13 : 16;
      const rB = (0, NB.d)(aB.format),
        sB = this._getWebGLTextureTypeFromDepthTextureFormat(aB.format),
        JB = rB ? dB.DEPTH_STENCIL : dB.DEPTH_COMPONENT,
        mB = this._getInternalFormatFromDepthTextureFormat(aB.format, !0, rB);
      return aB.is2DArray ? dB.texImage3D(UB, 0, mB, aB.width, aB.height, IB, 0, JB, sB, null) : aB.is3D ? dB.texImage3D(UB, 0, mB, aB.width, aB.height, uB, 0, JB, sB, null) : dB.texImage2D(UB, 0, mB, aB.width, aB.height, 0, JB, sB, null), this._bindTextureDirectly(UB, null), this._internalTexturesCache.push(aB), zB._depthStencilBuffer && (dB.deleteRenderbuffer(zB._depthStencilBuffer), zB._depthStencilBuffer = null), this._bindUnboundFramebuffer(zB._MSAAFramebuffer ?? zB._framebuffer), zB._generateStencilBuffer = rB, zB._depthStencilTextureWithStencil = rB, zB._depthStencilBuffer = this._setupFramebufferDepthAttachments(zB._generateStencilBuffer, zB._generateDepthBuffer, zB.width, zB.height, zB.samples, aB.format), this._bindUnboundFramebuffer(null), aB
    }, dB.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(BB, jB) {
      if (this.gm < 2 || !BB) return 1;
      if (BB.samples === jB) return jB;
      const zB = this._gl;
      jB = Math.min(jB, this.getCaps().maxMSAASamples), BB._depthStencilBuffer && (zB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = null), BB._MSAAFramebuffer && (zB.deleteFramebuffer(BB._MSAAFramebuffer), BB._MSAAFramebuffer = null);
      const QB = BB.texture?._hardwareTexture;
      if (QB?.releaseMSAARenderBuffers(), BB.texture && jB > 1 && "function" === typeof zB.renderbufferStorageMultisample) {
        const nB = zB.createFramebuffer();
        if (!nB) throw new Error("Unable to create multi sampled framebuffer");
        BB._MSAAFramebuffer = nB, this._bindUnboundFramebuffer(BB._MSAAFramebuffer);
        const dB = this._createRenderBuffer(BB.texture.width, BB.texture.height, jB, -1, this._getRGBABufferInternalSizedFormat(BB.texture.type, BB.texture.format, BB.texture._useSRGBBuffer), zB.COLOR_ATTACHMENT0, !1);
        if (!dB) throw new Error("Unable to create multi sampled framebuffer");
        QB?.addMSAARenderBuffer(dB)
      }
      this._bindUnboundFramebuffer(BB._MSAAFramebuffer ?? BB._framebuffer), BB.texture && (BB.texture.samples = jB), BB._samples = jB;
      const nB = BB._depthStencilTexture ? BB._depthStencilTexture.format : void 0;
      return BB._depthStencilBuffer = this._setupFramebufferDepthAttachments(BB._generateStencilBuffer, BB._generateDepthBuffer, BB.width, BB.height, jB, nB), this._bindUnboundFramebuffer(null), jB
    }, dB.ThinEngine.prototype._setupDepthStencilTexture = function(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const dB = jB.width ?? jB,
        IB = jB.height ?? jB,
        NB = jB.layers || 0,
        uB = jB.depth || 0;
      BB.baseWidth = dB, BB.baseHeight = IB, BB.width = dB, BB.height = IB, BB.is2DArray = NB > 0, BB.depth = NB || uB, BB.isReady = !0, BB.samples = nB, BB.generateMipMaps = !1, BB.samplingMode = zB ? 2 : 1, BB.type = 0, BB._comparisonFunction = QB;
      const UB = this._gl,
        aB = this._getTextureTarget(BB),
        pB = this._getSamplingParameters(BB.samplingMode, !1);
      UB.texParameteri(aB, UB.TEXTURE_MAG_FILTER, pB.mag), UB.texParameteri(aB, UB.TEXTURE_MIN_FILTER, pB.min), UB.texParameteri(aB, UB.TEXTURE_WRAP_S, UB.CLAMP_TO_EDGE), UB.texParameteri(aB, UB.TEXTURE_WRAP_T, UB.CLAMP_TO_EDGE), this.gm > 1 && (0 === QB ? (UB.texParameteri(aB, UB.TEXTURE_COMPARE_FUNC, 515), UB.texParameteri(aB, UB.TEXTURE_COMPARE_MODE, UB.NONE)) : (UB.texParameteri(aB, UB.TEXTURE_COMPARE_FUNC, QB), UB.texParameteri(aB, UB.TEXTURE_COMPARE_MODE, UB.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39895: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB.b
    });
    var QB = zB(39904);
    (0, zB(40046).e)();
    var nB = zB(39922);
    let dB = !1;
    ! function() {
      if (dB) return;
      dB = !0;
      const BB = new WeakMap,
        jB = new WeakMap,
        zB = new WeakMap,
        QB = new WeakMap;
      nB.ThinEngine.prototype.getAlphaToCoverage = function() {
        return BB.get(this) ?? !1
      }, nB.ThinEngine.prototype.setAlphaToCoverage = function(zB) {
        (BB.get(this) !== zB || this._gl && jB.get(this) !== this._gl) && (BB.set(this, zB), this._gl && (zB ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), jB.set(this, this._gl)))
      }, Object.defineProperty(nB.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (QB.get(this) !== this._gl && (zB.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), QB.set(this, this._gl)), zB.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var IB = zB(39913),
      NB = zB(38783),
      uB = zB(40015);
    let UB = !1;
    ! function() {
      function BB(BB, jB, zB, QB) {
        let nB, dB = 1;
        1 === QB ? nB = new Float32Array(jB * zB * 4) : 2 === QB ? (nB = new Uint16Array(jB * zB * 4), dB = 15360) : nB = 7 === QB ? new Uint32Array(jB * zB * 4) : new Uint8Array(jB * zB * 4);
        for (let IB = 0; IB < jB; IB++)
          for (let QB = 0; QB < zB; QB++) {
            const zB = 3 * (QB * jB + IB),
              NB = 4 * (QB * jB + IB);
            nB[NB + 0] = BB[zB + 0], nB[NB + 1] = BB[zB + 1], nB[NB + 2] = BB[zB + 2], nB[NB + 3] = dB
          }
        return nB
      }

      function jB(BB) {
        return function(jB, zB, QB, nB, dB, NB, uB, UB) {
          let aB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            pB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const rB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            sB = BB ? 10 : 11,
            JB = new IB.d(this, sB);
          JB.baseWidth = zB, JB.baseHeight = QB, JB.baseDepth = nB, JB.width = zB, JB.height = QB, JB.depth = nB, JB.format = dB, JB.type = pB, JB.generateMipMaps = NB, JB.samplingMode = UB, BB ? JB.is3D = !0 : JB.is2DArray = !0, this._doNotHandleContextLost || (JB._bufferView = jB), BB ? this.updateRawTexture3D(JB, jB, dB, uB, aB, pB) : this.updateRawTexture2DArray(JB, jB, dB, uB, aB, pB), this._bindTextureDirectly(rB, JB, !0);
          const mB = this._getSamplingParameters(UB, NB);
          return this._gl.texParameteri(rB, this._gl.TEXTURE_MAG_FILTER, mB.mag), this._gl.texParameteri(rB, this._gl.TEXTURE_MIN_FILTER, mB.min), NB && this._gl.generateMipmap(rB), this._bindTextureDirectly(rB, null), this._internalTexturesCache.push(JB), JB
        }
      }

      function zB(BB) {
        return function(jB, zB, QB, nB) {
          let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const NB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            uB = this._getWebGLTextureType(IB),
            UB = this._getInternalFormat(QB),
            aB = this._getRGBABufferInternalSizedFormat(IB, QB);
          this._bindTextureDirectly(NB, jB, !0), this._unpackFlipY(void 0 === nB || !!nB), this._doNotHandleContextLost || (jB._bufferView = zB, jB.format = QB, jB.invertY = nB, jB._compression = dB), jB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), dB && zB ? this._gl.compressedTexImage3D(NB, 0, this.getCaps().s3tc[dB], jB.width, jB.height, jB.depth, 0, zB) : this._gl.texImage3D(NB, 0, aB, jB.width, jB.height, jB.depth, 0, UB, uB, zB), jB.generateMipMaps && this._gl.generateMipmap(NB), this._bindTextureDirectly(NB, null), jB.isReady = !0
        }
      }
      UB || (UB = !0, nB.ThinEngine.prototype.updateRawTexture = function(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!BB) return;
        const NB = this._getRGBABufferInternalSizedFormat(dB, zB, IB),
          uB = this._getInternalFormat(zB),
          UB = this._getWebGLTextureType(dB);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, BB, !0), this._unpackFlipY(void 0 === QB || !!QB), this._doNotHandleContextLost || (BB._bufferView = jB, BB.format = zB, BB.type = dB, BB.invertY = QB, BB._compression = nB), BB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), nB && jB ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[nB], BB.width, BB.height, 0, jB) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, NB, BB.width, BB.height, 0, uB, UB, jB), BB.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), BB.isReady = !0
      }, nB.ThinEngine.prototype.createRawTexture = function(BB, jB, zB, QB, nB, dB, NB) {
        let uB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          UB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          aB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const pB = new IB.d(this, 3);
        pB.baseWidth = jB, pB.baseHeight = zB, pB.width = jB, pB.height = zB, pB.format = QB, pB.generateMipMaps = nB, pB.samplingMode = NB, pB.invertY = dB, pB._compression = uB, pB.type = UB, pB._useSRGBBuffer = this._getUseSRGBBuffer(aB, !nB), this._doNotHandleContextLost || (pB._bufferView = BB), this.updateRawTexture(pB, BB, QB, dB, uB, UB, pB._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, pB, !0);
        const rB = this._getSamplingParameters(NB, nB);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, rB.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, rB.min), nB && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(pB), pB
      }, nB.ThinEngine.prototype.createRawCubeTexture = function(BB, jB, zB, QB, nB, dB, UB) {
        let aB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const pB = this._gl,
          rB = new IB.d(this, 8);
        rB.isCube = !0, rB.format = zB, rB.type = QB, this._doNotHandleContextLost || (rB._bufferViewArray = BB);
        const sB = this._getWebGLTextureType(QB);
        let JB = this._getInternalFormat(zB);
        JB === pB.RGB && (JB = pB.RGBA), sB !== pB.FLOAT || this._caps.textureFloatLinearFiltering ? sB !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? sB !== pB.FLOAT || this._caps.textureFloatRender ? sB !== pB.HALF_FLOAT || this._caps.colorBufferFloat || (nB = !1, NB.c.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (nB = !1, NB.c.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (nB = !1, UB = 1, NB.c.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (nB = !1, UB = 1, NB.c.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const mB = jB,
          yB = mB;
        rB.width = mB, rB.height = yB, rB.invertY = dB, rB._compression = aB;
        if (!this.needPOTTextures || (0, uB.d)(rB.width) && (0, uB.d)(rB.height) || (nB = !1), BB) this.updateRawCubeTexture(rB, BB, zB, QB, dB, aB);
        else {
          const BB = this._getRGBABufferInternalSizedFormat(QB),
            jB = 0;
          this._bindTextureDirectly(pB.TEXTURE_CUBE_MAP, rB, !0);
          for (let zB = 0; zB < 6; zB++) aB ? pB.compressedTexImage2D(pB.TEXTURE_CUBE_MAP_POSITIVE_X + zB, jB, this.getCaps().s3tc[aB], rB.width, rB.height, 0, void 0) : pB.texImage2D(pB.TEXTURE_CUBE_MAP_POSITIVE_X + zB, jB, BB, rB.width, rB.height, 0, JB, sB, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, rB, !0), BB && nB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const kB = this._getSamplingParameters(UB, nB);
        return pB.texParameteri(pB.TEXTURE_CUBE_MAP, pB.TEXTURE_MAG_FILTER, kB.mag), pB.texParameteri(pB.TEXTURE_CUBE_MAP, pB.TEXTURE_MIN_FILTER, kB.min), pB.texParameteri(pB.TEXTURE_CUBE_MAP, pB.TEXTURE_WRAP_S, pB.CLAMP_TO_EDGE), pB.texParameteri(pB.TEXTURE_CUBE_MAP, pB.TEXTURE_WRAP_T, pB.CLAMP_TO_EDGE), this._bindTextureDirectly(pB.TEXTURE_CUBE_MAP, null), rB.generateMipMaps = nB, rB.samplingMode = UB, rB.isReady = !0, rB
      }, nB.ThinEngine.prototype.updateRawCubeTexture = function(jB, zB, QB, nB, dB) {
        let IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          NB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        jB._bufferViewArray = zB, jB.format = QB, jB.type = nB, jB.invertY = dB, jB._compression = IB;
        const UB = this._gl,
          aB = this._getWebGLTextureType(nB);
        let pB = this._getInternalFormat(QB);
        const rB = this._getRGBABufferInternalSizedFormat(nB);
        let sB = !1;
        pB === UB.RGB && (pB = UB.RGBA, sB = !0), this._bindTextureDirectly(UB.TEXTURE_CUBE_MAP, jB, !0), this._unpackFlipY(void 0 === dB || !!dB), jB.width % 4 !== 0 && UB.pixelStorei(UB.UNPACK_ALIGNMENT, 1);
        for (let uB = 0; uB < 6; uB++) {
          let QB = zB[uB];
          IB ? UB.compressedTexImage2D(UB.TEXTURE_CUBE_MAP_POSITIVE_X + uB, NB, this.getCaps().s3tc[IB], jB.width, jB.height, 0, QB) : (sB && (QB = BB(QB, jB.width, jB.height, nB)), UB.texImage2D(UB.TEXTURE_CUBE_MAP_POSITIVE_X + uB, NB, rB, jB.width, jB.height, 0, pB, aB, QB))
        }(!this.needPOTTextures || (0, uB.d)(jB.width) && (0, uB.d)(jB.height)) && jB.generateMipMaps && 0 === NB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), jB.isReady = !0
      }, nB.ThinEngine.prototype.createRawCubeTextureFromUrl = function(jB, zB, QB, nB, dB, IB, NB, uB) {
        let UB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          aB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          pB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          rB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const sB = this._gl,
          JB = this.createRawCubeTexture(null, QB, nB, dB, !IB, rB, pB, null);
        zB?.addPendingData(JB), JB.url = jB, JB.isReady = !1, this._internalTexturesCache.push(JB);
        const mB = (BB, jB) => {
            zB?.removePendingData(JB), aB && aB(BB ? BB.status + " " + BB.statusText : "Failed to parse texture data", jB)
          },
          yB = async jB => {
            if (!JB._hardwareTexture) return;
            const QB = NB(jB);
            if (!QB) return;
            const IB = QB instanceof Promise ? await QB : QB,
              aB = JB.width;
            if (uB) {
              const jB = this._getWebGLTextureType(dB);
              let zB = this._getInternalFormat(nB);
              const QB = this._getRGBABufferInternalSizedFormat(dB);
              let NB = !1;
              zB === sB.RGB && (zB = sB.RGBA, NB = !0), this._bindTextureDirectly(sB.TEXTURE_CUBE_MAP, JB, !0), this._unpackFlipY(!1);
              const UB = uB(IB);
              for (let nB = 0; nB < UB.length; nB++) {
                const IB = aB >> nB;
                for (let uB = 0; uB < 6; uB++) {
                  let aB = UB[nB][uB];
                  NB && (aB = BB(aB, IB, IB, dB)), sB.texImage2D(uB, nB, QB, IB, IB, 0, zB, jB, aB)
                }
              }
              this._bindTextureDirectly(sB.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(JB, IB, nB, dB, rB);
            JB.isReady = !0, zB?.removePendingData(JB), JB.onLoadedObservable.notifyObservers(JB), JB.onLoadedObservable.clear(), UB && UB()
          };
        return this._loadFile(jB, (BB => {
          yB(BB).catch((BB => {
            mB(void 0, BB)
          }))
        }), void 0, zB?.offlineProvider, !0, mB), JB
      }, nB.ThinEngine.prototype.createRawTexture2DArray = jB(!1), nB.ThinEngine.prototype.createRawTexture3D = jB(!0), nB.ThinEngine.prototype.updateRawTexture2DArray = zB(!1), nB.ThinEngine.prototype.updateRawTexture3D = zB(!0))
    }();
    var aB = zB(39958);
    let pB = !1;
    pB || (pB = !0, nB.ThinEngine.prototype._readTexturePixelsSync = function(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        IB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        NB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        uB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        UB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const pB = this._gl;
      if (!pB) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const BB = pB.createFramebuffer();
        if (!BB) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = BB
      }
      pB.bindFramebuffer(pB.FRAMEBUFFER, this._dummyFramebuffer), QB > -1 && (BB.is2DArray || BB.is3D) ? pB.framebufferTextureLayer(pB.FRAMEBUFFER, pB.COLOR_ATTACHMENT0, BB._hardwareTexture?.underlyingResource, nB, QB) : QB > -1 ? pB.framebufferTexture2D(pB.FRAMEBUFFER, pB.COLOR_ATTACHMENT0, pB.TEXTURE_CUBE_MAP_POSITIVE_X + QB, BB._hardwareTexture?.underlyingResource, nB) : pB.framebufferTexture2D(pB.FRAMEBUFFER, pB.COLOR_ATTACHMENT0, pB.TEXTURE_2D, BB._hardwareTexture?.underlyingResource, nB);
      let rB = void 0 !== BB.type ? this._getWebGLTextureType(BB.type) : pB.UNSIGNED_BYTE;
      return NB ? dB || (dB = (0, aB.o)(BB.type, 4 * jB * zB)) : rB === pB.UNSIGNED_BYTE ? (dB || (dB = new Uint8Array(4 * jB * zB)), rB = pB.UNSIGNED_BYTE) : (dB || (dB = new Float32Array(4 * jB * zB)), rB = pB.FLOAT), IB && this.flushFramebuffer(), pB.readPixels(uB, UB, jB, zB, pB.RGBA, rB, dB), pB.bindFramebuffer(pB.FRAMEBUFFER, this._currentFramebuffer), dB
    }, nB.ThinEngine.prototype._readTexturePixels = function(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        IB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        NB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        uB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        UB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB))
    }), (0, zB(40049).e)();
    let rB = !1;
    rB || (rB = !0, nB.ThinEngine.prototype._createDepthStencilCubeTexture = function(BB, jB) {
      const zB = new IB.d(this, 12);
      if (zB.isCube = !0, 1 === this.gm) return NB.c.Error("Depth cube texture is not supported by WebGL 1."), zB;
      const QB = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...jB
        },
        nB = this._gl;
      this._bindTextureDirectly(nB.TEXTURE_CUBE_MAP, zB, !0), this._setupDepthStencilTexture(zB, BB, QB.bilinearFiltering, QB.comparisonFunction);
      for (let dB = 0; dB < 6; dB++) QB.generateStencil ? nB.texImage2D(nB.TEXTURE_CUBE_MAP_POSITIVE_X + dB, 0, nB.DEPTH24_STENCIL8, BB, BB, 0, nB.DEPTH_STENCIL, nB.UNSIGNED_INT_24_8, null) : nB.texImage2D(nB.TEXTURE_CUBE_MAP_POSITIVE_X + dB, 0, nB.DEPTH_COMPONENT24, BB, BB, 0, nB.DEPTH_COMPONENT, nB.UNSIGNED_INT, null);
      return this._bindTextureDirectly(nB.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(zB), zB
    }, nB.ThinEngine.prototype._setCubeMapTextureParams = function(BB, jB, zB) {
      const QB = this._gl;
      QB.texParameteri(QB.TEXTURE_CUBE_MAP, QB.TEXTURE_MAG_FILTER, QB.LINEAR), QB.texParameteri(QB.TEXTURE_CUBE_MAP, QB.TEXTURE_MIN_FILTER, jB ? QB.LINEAR_MIPMAP_LINEAR : QB.LINEAR), QB.texParameteri(QB.TEXTURE_CUBE_MAP, QB.TEXTURE_WRAP_S, QB.CLAMP_TO_EDGE), QB.texParameteri(QB.TEXTURE_CUBE_MAP, QB.TEXTURE_WRAP_T, QB.CLAMP_TO_EDGE), BB.samplingMode = jB ? 3 : 2, jB && this.getCaps().textureMaxLevel && void 0 !== zB && zB > 0 && (QB.texParameteri(QB.TEXTURE_CUBE_MAP, QB.TEXTURE_MAX_LEVEL, zB), BB._maxLodLevel = zB), this._bindTextureDirectly(QB.TEXTURE_CUBE_MAP, null)
    }, nB.ThinEngine.prototype.createCubeTexture = function(BB, jB, zB, QB) {
      let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        IB = arguments.length > 6 ? arguments[6] : void 0,
        UB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        aB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        pB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        rB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        sB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        JB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        mB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const yB = this._gl;
      return this.createCubeTextureBase(BB, jB, zB, !!QB, nB, dB, IB, UB, aB, pB, rB, sB, (BB => this._bindTextureDirectly(yB.TEXTURE_CUBE_MAP, BB, !0)), ((BB, jB) => {
        const zB = this.needPOTTextures ? (0, uB.c)(jB[0].width, this._caps.maxCubemapTextureSize) : jB[0].width,
          dB = zB,
          UB = [yB.TEXTURE_CUBE_MAP_POSITIVE_X, yB.TEXTURE_CUBE_MAP_POSITIVE_Y, yB.TEXTURE_CUBE_MAP_POSITIVE_Z, yB.TEXTURE_CUBE_MAP_NEGATIVE_X, yB.TEXTURE_CUBE_MAP_NEGATIVE_Y, yB.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(yB.TEXTURE_CUBE_MAP, BB, !0), this._unpackFlipY(!1);
        const aB = IB ? this._getInternalFormat(IB, BB._useSRGBBuffer) : BB._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : yB.RGBA;
        let pB = IB ? this._getInternalFormat(IB) : yB.RGBA;
        BB._useSRGBBuffer && 1 === this.gm && (pB = aB);
        for (let QB = 0; QB < UB.length; QB++)
          if (jB[QB].width !== zB || jB[QB].height !== dB) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void NB.c.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = zB, this._workingCanvas.height = dB, this._workingContext.drawImage(jB[QB], 0, 0, jB[QB].width, jB[QB].height, 0, 0, zB, dB), yB.texImage2D(UB[QB], 0, aB, pB, yB.UNSIGNED_BYTE, this._workingCanvas)
          } else yB.texImage2D(UB[QB], 0, aB, pB, yB.UNSIGNED_BYTE, jB[QB]);
        QB || yB.generateMipmap(yB.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(BB, !QB), BB.width = zB, BB.height = dB, BB.isReady = !0, IB && (BB.format = IB), BB.onLoadedObservable.notifyObservers(BB), BB.onLoadedObservable.clear(), nB && nB()
      }), !!JB, mB)
    }, nB.ThinEngine.prototype.generateMipMapsForCubemap = function(BB) {
      let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB.generateMipMaps) {
        const zB = this._gl;
        this._bindTextureDirectly(zB.TEXTURE_CUBE_MAP, BB, !0), zB.generateMipmap(zB.TEXTURE_CUBE_MAP), jB && this._bindTextureDirectly(zB.TEXTURE_CUBE_MAP, null)
      }
    });
    zB(40051);
    let sB = !1;
    sB || (sB = !0, nB.ThinEngine.prototype.setDepthStencilTexture = function(BB, jB, zB, QB) {
      void 0 !== BB && (jB && (this._boundUniforms[BB] = jB), zB && zB.depthStencilTexture ? this._setTexture(BB, zB, !1, !0, QB) : this._setTexture(BB, null, void 0, void 0, QB))
    });
    let JB = !1;
    JB || (JB = !0, nB.ThinEngine.prototype.createRenderTargetCubeTexture = function(BB, jB) {
      const zB = this._createHardwareRenderTargetWrapper(!1, !0, BB),
        QB = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...jB
        };
      QB.generateStencilBuffer = QB.generateDepthBuffer && QB.generateStencilBuffer, (1 !== QB.type || this._caps.textureFloatLinearFiltering) && (2 !== QB.type || this._caps.textureHalfFloatLinearFiltering) || (QB.samplingMode = 1);
      const nB = this._gl,
        dB = new IB.d(this, 5);
      this._bindTextureDirectly(nB.TEXTURE_CUBE_MAP, dB, !0);
      const uB = this._getSamplingParameters(QB.samplingMode, QB.generateMipMaps);
      1 !== QB.type || this._caps.textureFloat || (QB.type = 0, NB.c.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), nB.texParameteri(nB.TEXTURE_CUBE_MAP, nB.TEXTURE_MAG_FILTER, uB.mag), nB.texParameteri(nB.TEXTURE_CUBE_MAP, nB.TEXTURE_MIN_FILTER, uB.min), nB.texParameteri(nB.TEXTURE_CUBE_MAP, nB.TEXTURE_WRAP_S, nB.CLAMP_TO_EDGE), nB.texParameteri(nB.TEXTURE_CUBE_MAP, nB.TEXTURE_WRAP_T, nB.CLAMP_TO_EDGE);
      for (let IB = 0; IB < 6; IB++) nB.texImage2D(nB.TEXTURE_CUBE_MAP_POSITIVE_X + IB, 0, this._getRGBABufferInternalSizedFormat(QB.type, QB.format), BB, BB, 0, this._getInternalFormat(QB.format), this._getWebGLTextureType(QB.type), null);
      const UB = nB.createFramebuffer();
      return this._bindUnboundFramebuffer(UB), zB._depthStencilBuffer = this._setupFramebufferDepthAttachments(QB.generateStencilBuffer, QB.generateDepthBuffer, BB, BB), QB.generateMipMaps && nB.generateMipmap(nB.TEXTURE_CUBE_MAP), this._bindTextureDirectly(nB.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), zB._framebuffer = UB, zB._generateDepthBuffer = QB.generateDepthBuffer, zB._generateStencilBuffer = QB.generateStencilBuffer, dB.width = BB, dB.height = BB, dB.isReady = !0, dB.isCube = !0, dB.samples = 1, dB.generateMipMaps = QB.generateMipMaps, dB.samplingMode = QB.samplingMode, dB.type = QB.type, dB.format = QB.format, this._internalTexturesCache.push(dB), zB.setTextures(dB), zB
    });
    var mB = zB(40056),
      yB = zB(40062);
    let kB = !1;
    kB || (kB = !0, nB.ThinEngine.prototype.createPrefilteredCubeTexture = function(BB, jB, QB, nB) {
      let dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        uB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        UB = arguments.length > 6 ? arguments[6] : void 0,
        aB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        pB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        rB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(BB, jB, null, !1, (async BB => {
        if (!BB) return void(dB && dB(null));
        const uB = BB.texture;
        if (pB ? BB.info.sphericalPolynomial && (uB._sphericalPolynomial = BB.info.sphericalPolynomial) : uB._sphericalPolynomial = uB._sphericalPolynomial ?? new mB.h, uB._source = 9, this.getCaps().textureLOD) return void(dB && dB(uB));
        const UB = this._gl,
          aB = BB.width;
        if (!aB) return;
        const {
          DDSTools: rB
        } = await zB.e(311).then((() => zB(41853))), sB = [];
        for (let zB = 0; zB < 3; zB++) {
          const dB = 1 - zB / 2,
            pB = nB,
            JB = Math.log2(aB) * QB + nB,
            mB = pB + (JB - pB) * dB,
            kB = Math.round(Math.min(Math.max(mB, 0), JB)),
            GB = new IB.d(this, 2);
          if (GB.type = uB.type, GB.format = uB.format, GB.width = Math.pow(2, Math.max(Math.log2(aB) - kB, 0)), GB.height = GB.width, GB.isCube = !0, GB._cachedWrapU = 0, GB._cachedWrapV = 0, this._bindTextureDirectly(UB.TEXTURE_CUBE_MAP, GB, !0), GB.samplingMode = 2, UB.texParameteri(UB.TEXTURE_CUBE_MAP, UB.TEXTURE_MAG_FILTER, UB.LINEAR), UB.texParameteri(UB.TEXTURE_CUBE_MAP, UB.TEXTURE_MIN_FILTER, UB.LINEAR), UB.texParameteri(UB.TEXTURE_CUBE_MAP, UB.TEXTURE_WRAP_S, UB.CLAMP_TO_EDGE), UB.texParameteri(UB.TEXTURE_CUBE_MAP, UB.TEXTURE_WRAP_T, UB.CLAMP_TO_EDGE), BB.isDDS) {
            const jB = BB.info,
              zB = BB.data;
            this._unpackFlipY(jB.isCompressed), rB.UploadDDSLevels(this, GB, zB, jB, !0, 6, kB)
          } else NB.c.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(UB.TEXTURE_CUBE_MAP, null);
          const LB = new yB.c(jB);
          LB._isCube = !0, LB._texture = GB, GB.isReady = !0, sB.push(LB)
        }
        uB._lodTextureHigh = sB[2], uB._lodTextureMid = sB[1], uB._lodTextureLow = sB[0], dB && dB(uB)
      }), uB, UB, aB, pB, QB, nB, null, void 0, !1, rB)
    });
    var GB = zB(40001);
    let LB = !1;
    LB || (LB = !0, nB.ThinEngine.prototype.createUniformBuffer = function(BB, jB) {
      const zB = this._gl.createBuffer();
      if (!zB) throw new Error("Unable to create uniform buffer");
      const QB = new GB.d(zB);
      return this.bindUniformBuffer(QB), BB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, BB, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(BB), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), QB.references = 1, QB
    }, nB.ThinEngine.prototype.createDynamicUniformBuffer = function(BB, jB) {
      const zB = this._gl.createBuffer();
      if (!zB) throw new Error("Unable to create dynamic uniform buffer");
      const QB = new GB.d(zB);
      return this.bindUniformBuffer(QB), BB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, BB, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(BB), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), QB.references = 1, QB
    }, nB.ThinEngine.prototype.updateUniformBuffer = function(BB, jB, zB, QB) {
      this.bindUniformBuffer(BB), void 0 === zB && (zB = 0), void 0 === QB ? jB instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, zB, jB) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, zB, new Float32Array(jB)) : jB instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, jB.subarray(zB, zB + QB)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(jB).subarray(zB, zB + QB)), this.bindUniformBuffer(null)
    }, nB.ThinEngine.prototype.bindUniformBuffer = function(BB) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, BB ? BB.underlyingResource : null)
    }, nB.ThinEngine.prototype.bindUniformBufferBase = function(BB, jB, zB) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, jB, BB ? BB.underlyingResource : null)
    }, nB.ThinEngine.prototype.bindUniformBlock = function(BB, jB, zB) {
      const QB = BB.program,
        nB = this._gl.getUniformBlockIndex(QB, jB);
      4294967295 !== nB && this._gl.uniformBlockBinding(QB, nB, zB)
    });
    var gB = zB(39943),
      tB = zB(39980);
    let SB = !1;
    SB || (SB = !0, tB.c.prototype.displayLoadingUI = function() {
      if (!(0, gB.o)()) return;
      const BB = this.loadingScreen;
      BB && BB.displayLoadingUI()
    }, tB.c.prototype.hideLoadingUI = function() {
      if (!(0, gB.o)()) return;
      const BB = this._loadingScreen;
      BB && BB.hideLoadingUI()
    }, Object.defineProperty(tB.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = tB.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(BB) {
        this._loadingScreen = BB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(tB.c.prototype, "loadingUIText", {
      set: function(BB) {
        this.loadingScreen.loadingUIText = BB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(tB.c.prototype, "loadingUIBackgroundColor", {
      set: function(BB) {
        this.loadingScreen.loadingUIBackgroundColor = BB
      },
      enumerable: !0,
      configurable: !0
    })), (0, zB(40039).b)();
    let MB = !1;
    MB || (MB = !0, tB.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, tB.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, tB.c.prototype.setDepthFunction = function(BB) {
      this._depthCullingState.depthFunc = BB
    }, tB.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, tB.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, tB.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, tB.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, tB.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, tB.c.prototype.setDepthWrite = function(BB) {
      this._depthCullingState.depthMask = BB
    }, tB.c.prototype.setAlphaConstants = function(BB, jB, zB, QB) {
      this._alphaState.setAlphaBlendConstants(BB, jB, zB, QB)
    }, tB.c.prototype.getAlphaMode = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[BB]
    }, tB.c.prototype.getAlphaEquation = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[BB]
    });
    let EB = !1;
    EB || (EB = !0, tB.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, tB.c.prototype.setStencilBuffer = function(BB) {
      this._stencilState.stencilTest = BB
    }, tB.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, tB.c.prototype.setStencilMask = function(BB) {
      this._stencilState.stencilMask = BB
    }, tB.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, tB.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, tB.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, tB.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, tB.c.prototype.setStencilFunction = function(BB) {
      this._stencilState.stencilFunc = BB
    }, tB.c.prototype.setStencilBackFunction = function(BB) {
      this._stencilState.stencilBackFunc = BB
    }, tB.c.prototype.setStencilFunctionReference = function(BB) {
      this._stencilState.stencilFuncRef = BB
    }, tB.c.prototype.setStencilFunctionMask = function(BB) {
      this._stencilState.stencilFuncMask = BB
    }, tB.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, tB.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, tB.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, tB.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, tB.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, tB.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, tB.c.prototype.setStencilOperationFail = function(BB) {
      this._stencilState.stencilOpStencilFail = BB
    }, tB.c.prototype.setStencilBackOperationFail = function(BB) {
      this._stencilState.stencilBackOpStencilFail = BB
    }, tB.c.prototype.setStencilOperationDepthFail = function(BB) {
      this._stencilState.stencilOpDepthFail = BB
    }, tB.c.prototype.setStencilBackOperationDepthFail = function(BB) {
      this._stencilState.stencilBackOpDepthFail = BB
    }, tB.c.prototype.setStencilOperationPass = function(BB) {
      this._stencilState.stencilOpStencilDepthPass = BB
    }, tB.c.prototype.setStencilBackOperationPass = function(BB) {
      this._stencilState.stencilBackOpStencilDepthPass = BB
    }, tB.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, tB.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    zB(40092);
    let iB = !1;
    iB || (iB = !0, tB.c.prototype.createDepthStencilTexture = function(BB, jB, zB) {
      if (jB.isCube) {
        const zB = BB.width || BB;
        return this._createDepthStencilCubeTexture(zB, jB)
      }
      return this._createDepthStencilTexture(BB, jB, zB)
    });
    zB(40101), zB(40137);
    let qB = !1;
    qB || (qB = !0, nB.ThinEngine.prototype.enableScissor = function(BB, jB, zB, QB) {
      const nB = this._gl;
      nB.enable(nB.SCISSOR_TEST), nB.scissor(BB, jB, zB, QB)
    }, nB.ThinEngine.prototype.disableScissor = function() {
      const BB = this._gl;
      BB.disable(BB.SCISSOR_TEST)
    })
  },
  39904: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => tB
    });
    var QB = zB(39913),
      nB = zB(37197),
      dB = zB(39922),
      IB = zB(39986);
    class NB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new uB(BB)
      }
      sampleFrame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.e.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const jB = BB - this._lastFrameTimeMs;
            this._rollingFrameTime.add(jB)
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
    class uB {
      constructor(BB) {
        this._samples = new Array(BB), this.reset()
      }
      add(BB) {
        let jB;
        if (this.isSaturated()) {
          const BB = this._samples[this._pos];
          jB = BB - this.average, this.average -= jB / (this._sampleCount - 1), this._m2 -= jB * (BB - this.average)
        } else this._sampleCount++;
        jB = BB - this.average, this.average += jB / this._sampleCount, this._m2 += jB * (BB - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = BB, this._pos++, this._pos %= this._samples.length
      }
      history(BB) {
        if (BB >= this._sampleCount || BB >= this._samples.length) return 0;
        const jB = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(jB - BB)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(BB) {
        const jB = this._samples.length;
        return (BB % jB + jB) % jB
      }
    }
    var UB = zB(40001),
      aB = zB(38783),
      pB = zB(40017),
      rB = zB(39980),
      sB = zB(39943);

    function JB(BB) {
      const jB = function(BB) {
        if (!(0, sB.h)() || !document.body) return null;
        const jB = document.createElement("span");
        jB.textContent = "Hg", jB.style.font = BB;
        const zB = document.createElement("div");
        zB.style.display = "inline-block", zB.style.width = "1px", zB.style.height = "0px", zB.style.verticalAlign = "bottom";
        const QB = document.createElement("div");
        let nB, dB;
        QB.style.whiteSpace = "nowrap", QB.appendChild(jB), QB.appendChild(zB), document.body.appendChild(QB);
        try {
          dB = zB.getBoundingClientRect().top - jB.getBoundingClientRect().top, zB.style.verticalAlign = "baseline", nB = zB.getBoundingClientRect().top - jB.getBoundingClientRect().top
        } finally {
          document.body.removeChild(QB)
        }
        const IB = {
          ascent: nB,
          height: dB,
          descent: dB - nB
        };
        return mB(IB) ? IB : null
      }(BB);
      if (jB) return jB;
      const zB = function(BB) {
        let jB = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? jB = new OffscreenCanvas(64, 64) : (0, sB.h)() && "function" === typeof document.createElement && (jB = document.createElement("canvas"), jB.width = 64, jB.height = 64);
          const zB = jB?.getContext("2d");
          if (!zB) return null;
          zB.font = BB;
          const QB = zB.measureText("Hg"),
            nB = Number(QB.actualBoundingBoxAscent ?? QB.fontBoundingBoxAscent),
            dB = Number(QB.actualBoundingBoxDescent ?? QB.fontBoundingBoxDescent),
            IB = {
              ascent: nB,
              height: nB + dB,
              descent: dB
            };
          return mB(IB) ? IB : null
        } catch {
          return null
        } finally {
          const BB = jB;
          "function" === typeof BB?.dispose && BB.dispose()
        }
      }(BB);
      return zB || function(BB) {
        const jB = Math.max(1, function(BB) {
            const jB = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(BB || ""));
            return jB ? Number(jB[1]) : 16
          }(BB)),
          zB = .8 * jB,
          QB = .2 * jB;
        return {
          ascent: zB,
          height: zB + QB,
          descent: QB
        }
      }(BB)
    }

    function mB(BB) {
      return Number.isFinite(BB.ascent) && Number.isFinite(BB.height) && Number.isFinite(BB.descent) && BB.height > 0
    }

    function yB(BB) {
      if (BB.requestPointerLock) {
        const jB = BB.requestPointerLock();
        jB instanceof Promise ? jB.then((() => {
          BB.focus()
        })).catch((() => {})) : BB.focus()
      }
    }
    var kB = zB(40034),
      GB = zB(39976),
      LB = zB(40039),
      gB = zB(40042);
    class tB extends dB.ThinEngine {
      static get NpmPackage() {
        return rB.c.NpmPackage
      }
      static get Version() {
        return rB.c.Version
      }
      static get Instances() {
        return nB.c.Instances
      }
      static get LastCreatedEngine() {
        return nB.c.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return nB.c.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(BB) {
        return rB.c.DefaultLoadingScreenFactory(BB)
      }
      get _supportsHardwareTextureRescaling() {
        return !!tB._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, LB.b)(), (0, gB.d)(), super(BB, jB, zB, QB), this._performanceMonitor = new NB, this._drawCalls = new kB.d, BB && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(BB) {
        super._sharedInit(BB),
          function(BB, jB, zB) {
            BB._onCanvasFocus = () => {
              BB.onCanvasFocusObservable.notifyObservers(BB)
            }, BB._onCanvasBlur = () => {
              BB.onCanvasBlurObservable.notifyObservers(BB)
            }, BB._onCanvasContextMenu = jB => {
              BB.disableContextMenu && jB.preventDefault()
            }, jB.addEventListener("focus", BB._onCanvasFocus), jB.addEventListener("blur", BB._onCanvasBlur), jB.addEventListener("contextmenu", BB._onCanvasContextMenu), BB._onBlur = () => {
              BB.disablePerformanceMonitorInBackground && BB.performanceMonitor.disable(), BB._windowIsBackground = !0
            }, BB._onFocus = () => {
              BB.disablePerformanceMonitorInBackground && BB.performanceMonitor.enable(), BB._windowIsBackground = !1
            }, BB._onCanvasPointerOut = zB => {
              document.elementFromPoint(zB.clientX, zB.clientY) !== jB && BB.onCanvasPointerOutObservable.notifyObservers(zB)
            };
            const QB = BB.getHostWindow();
            QB && "function" === typeof QB.addEventListener && (QB.addEventListener("blur", BB._onBlur), QB.addEventListener("focus", BB._onFocus)), jB.addEventListener("pointerout", BB._onCanvasPointerOut), zB.doNotHandleTouchAction || function(BB) {
              BB && BB.setAttribute && (BB.setAttribute("touch-action", "none"), BB.style.touchAction = "none", BB.style.webkitTapHighlightColor = "transparent")
            }(jB), !rB.c.audioEngine && zB.audioEngine && rB.c.AudioEngineFactory && (rB.c.audioEngine = rB.c.AudioEngineFactory(BB.getRenderingCanvas(), BB.getAudioContext(), BB.getAudioDestination())), (0, sB.h)() && (BB._onFullscreenChange = () => {
              BB.isFullscreen = !!document.fullscreenElement, BB.isFullscreen && BB._pointerLockRequested && jB && yB(jB)
            }, document.addEventListener("fullscreenchange", BB._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", BB._onFullscreenChange, !1), BB._onPointerLockChange = () => {
              BB.isPointerLock = document.pointerLockElement === jB
            }, document.addEventListener("pointerlockchange", BB._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", BB._onPointerLockChange, !1)), BB.enableOfflineSupport = void 0 !== rB.c.OfflineProviderFactory, BB._deterministicLockstep = !!zB.deterministicLockstep, BB._lockstepMaxSteps = zB.lockstepMaxSteps || 0, BB._timeStep = zB.timeStep || 1 / 60
          }(this, BB, this._creationOptions)
      }
      resizeImageBitmap(BB, jB, zB) {
        return function(BB, jB, zB, QB) {
          const nB = BB.createCanvas(zB, QB).getContext("2d");
          if (!nB) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return nB.drawImage(jB, 0, 0), nB.getImageData(0, 0, zB, QB).data
        }(this, BB, jB, zB)
      }
      async _createImageBitmapFromSource(BB, jB) {
        return await async function(BB, jB, zB) {
          return await new Promise(((QB, nB) => {
            const dB = new Image;
            dB.onload = () => {
              dB.decode().then((() => {
                BB.createImageBitmap(dB, zB).then((BB => {
                  QB(BB)
                }))
              }))
            }, dB.onerror = () => {
              nB(`Error loading image ${dB.src}`)
            }, dB.src = jB
          }))
        }(this, BB, jB)
      }
      switchFullscreen(BB) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(BB)
      }
      enterFullscreen(BB) {
        this.isFullscreen || (this._pointerLockRequested = BB, this._renderingCanvas && function(BB) {
          const jB = BB.requestFullscreen || BB.webkitRequestFullscreen;
          jB && jB.call(BB)
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
      setDirectViewport(BB, jB, zB, QB) {
        const nB = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(BB, jB, zB, QB), nB
      }
      scissorClear(BB, jB, zB, QB, nB) {
        this.enableScissor(BB, jB, zB, QB), this.clear(nB, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(BB) {
        const jB = this._gl.getAttachedShaders(BB);
        return jB ? this._gl.getShaderSource(jB[0]) : null
      }
      getFragmentShaderSource(BB) {
        const jB = this._gl.getAttachedShaders(BB);
        return jB ? this._gl.getShaderSource(jB[1]) : null
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
        return JB(BB)
      }
      enterPointerlock() {
        this._renderingCanvas && yB(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      gL() {
        this._measureFps(), super.gL()
      }
      _deletePipelineContext(BB) {
        const jB = BB;
        jB && jB.program && jB.transformFeedback && (this.deleteTransformFeedback(jB.transformFeedback), jB.transformFeedback = null), super._deletePipelineContext(BB)
      }
      createShaderProgram(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        nB = nB || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const IB = super.createShaderProgram(BB, jB, zB, QB, nB, dB);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), IB
      }
      _createShaderProgram(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const dB = QB.createProgram();
        if (BB.program = dB, !dB) throw new Error("Unable to create program");
        if (QB.attachShader(dB, jB), QB.attachShader(dB, zB), this.gm > 1 && nB) {
          const jB = this.createTransformFeedback();
          this.bindTransformFeedback(jB), this.setTranformFeedbackVaryings(dB, nB), BB.transformFeedback = jB
        }
        return QB.linkProgram(dB), this.gm > 1 && nB && this.bindTransformFeedback(null), BB.context = QB, BB.vertexShader = jB, BB.fragmentShader = zB, BB.isParallelCompiled || this._finalizePipelineContext(BB), dB
      }
      _releaseTexture(BB) {
        super._releaseTexture(BB)
      }
      _releaseRenderTargetWrapper(BB) {
        super._releaseRenderTargetWrapper(BB);
        for (const jB of this.scenes) {
          for (const zB of jB.postProcesses) zB._outputTexture === BB && (zB._outputTexture = null);
          for (const zB of jB.cameras)
            for (const jB of zB._postProcesses) jB && jB._outputTexture === BB && (jB._outputTexture = null)
        }
      }
      _rescaleTexture(BB, jB, zB, QB, nB) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const dB = this.createRenderTargetTexture({
          width: jB.width,
          height: jB.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && tB._RescalePostProcessFactory && (this._rescalePostProcess = tB._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const IB = () => {
              this._rescalePostProcess.onApply = function(jB) {
                jB._bindTexture("textureSampler", BB)
              };
              let IB = zB;
              IB || (IB = this.scenes[this.scenes.length - 1]), IB.postProcessManager.directRender([this._rescalePostProcess], dB, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, jB, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, QB, 0, 0, jB.width, jB.height, 0), this.unBindFramebuffer(dB), dB.dispose(), nB && nB()
            },
            NB = this._rescalePostProcess.getEffect();
          NB ? NB.executeWhenCompiled(IB) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((BB => {
            BB.executeWhenCompiled(IB)
          }))
        }
      }
      wrapWebGLTexture(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const IB = new pB.d(BB, this._gl),
          NB = new QB.d(this, 15, !0);
        return NB._hardwareTexture = IB, NB.baseWidth = nB, NB.baseHeight = dB, NB.width = nB, NB.height = dB, NB.isReady = !0, NB.useMipMaps = jB, this.updateTextureSamplingMode(zB, NB), NB
      }
      updateWrappedWebGLTexture(BB, jB) {
        if (15 !== BB.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const QB of this._renderTargetWrapperCache)
          if (QB.textures?.includes(BB)) {
            if (QB.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (QB._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } BB._hardwareTexture = new pB.d(jB, this._gl), BB.isReady = !0, BB._cachedCoordinatesMode = null, BB._cachedWrapU = null, BB._cachedWrapV = null, BB._cachedWrapR = null, BB._cachedAnisotropicFilteringLevel = null;
        for (const QB in this._boundTexturesCache) this._boundTexturesCache[QB] === BB && (this._boundTexturesCache[QB] = null);
        this.updateTextureSamplingMode(BB.samplingMode, BB);
        const zB = this._gl;
        for (const QB of this._renderTargetWrapperCache) {
          if (QB.texture !== BB) continue;
          const nB = QB,
            dB = QB.samples,
            IB = dB > 1;
          nB._framebuffer && zB.deleteFramebuffer(nB._framebuffer), !IB && nB._depthStencilBuffer && (zB.deleteRenderbuffer(nB._depthStencilBuffer), nB._depthStencilBuffer = null);
          const NB = this._currentFramebuffer,
            uB = zB.createFramebuffer();
          this._bindUnboundFramebuffer(uB), zB.framebufferTexture2D(zB.FRAMEBUFFER, zB.COLOR_ATTACHMENT0, zB.TEXTURE_2D, jB, 0), IB || (nB._depthStencilBuffer = this._setupFramebufferDepthAttachments(QB._generateStencilBuffer, QB._generateDepthBuffer, QB.width, QB.height)), this._bindUnboundFramebuffer(NB), nB._framebuffer = uB, IB && (QB._samples = 1, this.updateRenderTargetTextureSampleCount(nB, dB))
        }
      }
      _uploadImageToTexture(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const nB = this._gl,
          dB = this._getWebGLTextureType(BB.type),
          IB = this._getInternalFormat(BB.format),
          NB = this._getRGBABufferInternalSizedFormat(BB.type, IB),
          uB = BB.isCube ? nB.TEXTURE_CUBE_MAP : nB.TEXTURE_2D;
        this._bindTextureDirectly(uB, BB, !0), this._unpackFlipY(BB.invertY);
        let UB = nB.TEXTURE_2D;
        BB.isCube && (UB = nB.TEXTURE_CUBE_MAP_POSITIVE_X + zB), nB.texImage2D(UB, QB, NB, IB, dB, jB), this._bindTextureDirectly(uB, null, !0)
      }
      updateTextureComparisonFunction(BB, jB) {
        if (1 === this.gm) return void aB.c.Error("WebGL 1 does not support texture comparison.");
        const zB = this._gl;
        BB.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, BB, !0), 0 === jB ? (zB.texParameteri(zB.TEXTURE_CUBE_MAP, zB.TEXTURE_COMPARE_FUNC, 515), zB.texParameteri(zB.TEXTURE_CUBE_MAP, zB.TEXTURE_COMPARE_MODE, zB.NONE)) : (zB.texParameteri(zB.TEXTURE_CUBE_MAP, zB.TEXTURE_COMPARE_FUNC, jB), zB.texParameteri(zB.TEXTURE_CUBE_MAP, zB.TEXTURE_COMPARE_MODE, zB.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, BB, !0), 0 === jB ? (zB.texParameteri(zB.TEXTURE_2D, zB.TEXTURE_COMPARE_FUNC, 515), zB.texParameteri(zB.TEXTURE_2D, zB.TEXTURE_COMPARE_MODE, zB.NONE)) : (zB.texParameteri(zB.TEXTURE_2D, zB.TEXTURE_COMPARE_FUNC, jB), zB.texParameteri(zB.TEXTURE_2D, zB.TEXTURE_COMPARE_MODE, zB.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), BB._comparisonFunction = jB
      }
      createInstancesBuffer(BB) {
        const jB = this._gl.createBuffer();
        if (!jB) throw new Error("Unable to create instance buffer");
        const zB = new UB.d(jB);
        return zB.Ep = BB, this.bindArrayBuffer(zB), this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, this._gl.DYNAMIC_DRAW), zB.references = 1, zB
      }
      deleteInstancesBuffer(BB) {
        this._gl.deleteBuffer(BB)
      }
      async _clientWaitAsync(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const QB = this._gl;
        return await new Promise(((nB, dB) => {
          (0, GB.e)((() => {
            const zB = QB.clientWaitSync(BB, jB, 0);
            if (zB == QB.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return zB != QB.TIMEOUT_EXPIRED
          }), nB, dB, zB)
        }))
      }
      _readPixelsAsync(BB, jB, zB, QB, nB, dB, IB) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const NB = this._gl,
          uB = NB.createBuffer();
        NB.bindBuffer(NB.PIXEL_PACK_BUFFER, uB), NB.bufferData(NB.PIXEL_PACK_BUFFER, IB.byteLength, NB.STREAM_READ), NB.readPixels(BB, jB, zB, QB, nB, dB, 0), NB.bindBuffer(NB.PIXEL_PACK_BUFFER, null);
        const UB = NB.fenceSync(NB.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return UB ? (NB.flush(), this._clientWaitAsync(UB, 0, 10).then((() => (NB.deleteSync(UB), NB.bindBuffer(NB.PIXEL_PACK_BUFFER, uB), NB.getBufferSubData(NB.PIXEL_PACK_BUFFER, 0, IB), NB.bindBuffer(NB.PIXEL_PACK_BUFFER, null), NB.deleteBuffer(uB), IB)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(BB, jB) {
            1 === nB.c.Instances.length && rB.c.audioEngine && (rB.c.audioEngine.dispose(), rB.c.audioEngine = null);
            const zB = BB.getHostWindow();
            zB && "function" === typeof zB.removeEventListener && (zB.removeEventListener("blur", BB._onBlur), zB.removeEventListener("focus", BB._onFocus)), jB && (jB.removeEventListener("focus", BB._onCanvasFocus), jB.removeEventListener("blur", BB._onCanvasBlur), jB.removeEventListener("pointerout", BB._onCanvasPointerOut), jB.removeEventListener("contextmenu", BB._onCanvasContextMenu)), (0, sB.h)() && (document.removeEventListener("fullscreenchange", BB._onFullscreenChange), document.removeEventListener("mozfullscreenchange", BB._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", BB._onFullscreenChange), document.removeEventListener("msfullscreenchange", BB._onFullscreenChange), document.removeEventListener("pointerlockchange", BB._onPointerLockChange), document.removeEventListener("mspointerlockchange", BB._onPointerLockChange), document.removeEventListener("mozpointerlockchange", BB._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", BB._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    tB.ALPHA_DISABLE = 0, tB.ALPHA_ADD = 1, tB.ALPHA_COMBINE = 2, tB.ALPHA_SUBTRACT = 3, tB.ALPHA_MULTIPLY = 4, tB.ALPHA_MAXIMIZED = 5, tB.ALPHA_ONEONE = 6, tB.ALPHA_PREMULTIPLIED = 7, tB.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, tB.ALPHA_INTERPOLATE = 9, tB.ALPHA_SCREENMODE = 10, tB.DELAYLOADSTATE_NONE = 0, tB.DELAYLOADSTATE_LOADED = 1, tB.DELAYLOADSTATE_LOADING = 2, tB.DELAYLOADSTATE_NOTLOADED = 4, tB.NEVER = 512, tB.ALWAYS = 519, tB.LESS = 513, tB.EQUAL = 514, tB.LEQUAL = 515, tB.GREATER = 516, tB.GEQUAL = 518, tB.NOTEQUAL = 517, tB.KEEP = 7680, tB.REPLACE = 7681, tB.INCR = 7682, tB.DECR = 7683, tB.INVERT = 5386, tB.INCR_WRAP = 34055, tB.DECR_WRAP = 34056, tB.TEXTURE_CLAMP_ADDRESSMODE = 0, tB.TEXTURE_WRAP_ADDRESSMODE = 1, tB.TEXTURE_MIRROR_ADDRESSMODE = 2, tB.TEXTUREFORMAT_ALPHA = 0, tB.TEXTUREFORMAT_LUMINANCE = 1, tB.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, tB.TEXTUREFORMAT_RGB = 4, tB.TEXTUREFORMAT_RGBA = 5, tB.TEXTUREFORMAT_RED = 6, tB.TEXTUREFORMAT_R = 6, tB.TEXTUREFORMAT_R16_UNORM = 33322, tB.TEXTUREFORMAT_RG16_UNORM = 33324, tB.TEXTUREFORMAT_RGB16_UNORM = 32852, tB.TEXTUREFORMAT_RGBA16_UNORM = 32859, tB.TEXTUREFORMAT_R16_SNORM = 36760, tB.TEXTUREFORMAT_RG16_SNORM = 36761, tB.TEXTUREFORMAT_RGB16_SNORM = 36762, tB.TEXTUREFORMAT_RGBA16_SNORM = 36763, tB.TEXTUREFORMAT_RG = 7, tB.TEXTUREFORMAT_RED_INTEGER = 8, tB.TEXTUREFORMAT_R_INTEGER = 8, tB.TEXTUREFORMAT_RG_INTEGER = 9, tB.TEXTUREFORMAT_RGB_INTEGER = 10, tB.TEXTUREFORMAT_RGBA_INTEGER = 11, tB.TEXTURETYPE_UNSIGNED_BYTE = 0, tB.TEXTURETYPE_UNSIGNED_INT = 0, tB.TEXTURETYPE_FLOAT = 1, tB.TEXTURETYPE_HALF_FLOAT = 2, tB.TEXTURETYPE_BYTE = 3, tB.TEXTURETYPE_SHORT = 4, tB.TEXTURETYPE_UNSIGNED_SHORT = 5, tB.TEXTURETYPE_INT = 6, tB.TEXTURETYPE_UNSIGNED_INTEGER = 7, tB.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, tB.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, tB.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, tB.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, tB.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, tB.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, tB.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, tB.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, tB.TEXTURE_NEAREST_SAMPLINGMODE = 1, tB.TEXTURE_BILINEAR_SAMPLINGMODE = 2, tB.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, tB.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, tB.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, tB.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, tB.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, tB.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, tB.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, tB.TEXTURE_NEAREST_LINEAR = 7, tB.TEXTURE_NEAREST_NEAREST = 1, tB.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, tB.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, tB.TEXTURE_LINEAR_LINEAR = 2, tB.TEXTURE_LINEAR_NEAREST = 12, tB.TEXTURE_EXPLICIT_MODE = 0, tB.TEXTURE_SPHERICAL_MODE = 1, tB.TEXTURE_PLANAR_MODE = 2, tB.TEXTURE_CUBIC_MODE = 3, tB.TEXTURE_PROJECTION_MODE = 4, tB.TEXTURE_SKYBOX_MODE = 5, tB.TEXTURE_INVCUBIC_MODE = 6, tB.TEXTURE_EQUIRECTANGULAR_MODE = 7, tB.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, tB.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, tB.SCALEMODE_FLOOR = 1, tB.SCALEMODE_NEAREST = 2, tB.SCALEMODE_CEILING = 3
  },
  40053: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => nB
    });
    var QB = zB(40025);
    class nB {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(BB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = BB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, BB && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, QB.d)(BB.format))
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
        const jB = this._textures[BB],
          zB = this._layerIndices?.[BB] ?? 0,
          QB = this._faceIndices?.[BB] ?? 0;
        return jB.isCube ? 6 * zB + QB : jB.is3D ? 0 : zB
      }
      get samples() {
        return this._samples
      }
      setSamples(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === BB && !zB) return BB;
        const QB = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, BB, jB) : this._engine.updateRenderTargetTextureSampleCount(this, BB);
        return this._samples = BB, QB
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(BB, jB, zB, QB, nB) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = BB, this._isCube = jB, this._size = zB, this._engine = QB, this._depthStencilTexture = null, this.label = nB
      }
      setTextures(BB) {
        Array.isArray(BB) ? this._textures = BB : this._textures = BB ? [BB] : null
      }
      setTexture(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[jB] !== BB && (this._textures[jB] && zB && this._textures[jB].dispose(), this._textures[jB] = BB)
      }
      setLayerAndFaceIndices(BB, jB) {
        this._layerIndices = BB, this._faceIndices = jB
      }
      setLayerAndFaceIndex() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== jB && jB >= 0 && (this._layerIndices[BB] = jB), void 0 !== zB && zB >= 0 && (this._faceIndices[BB] = zB)
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          dB = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = zB, this._depthStencilTextureLabel = dB, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: jB,
          comparisonFunction: BB,
          generateStencil: zB,
          isCube: this._isCube,
          samples: QB,
          depthTextureFormat: nB,
          label: dB
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
          const jB = this.textures;
          if (jB && jB.length > 0) {
            let zB = !1,
              QB = jB.length,
              nB = -1;
            const dB = jB[jB.length - 1]._source;
            14 !== dB && 12 !== dB || (zB = !0, nB = jB[jB.length - 1].format, QB--);
            const IB = [],
              NB = [],
              uB = [],
              UB = [],
              aB = [],
              pB = [],
              rB = [],
              sB = {};
            for (let BB = 0; BB < QB; ++BB) {
              const zB = jB[BB];
              IB.push(zB.samplingMode), NB.push(zB.type), uB.push(zB.format);
              void 0 !== sB[zB.uniqueId] ? (UB.push(-1), rB.push(0)) : (sB[zB.uniqueId] = BB, zB.is2DArray ? (UB.push(35866), rB.push(zB.depth)) : zB.isCube ? (UB.push(34067), rB.push(0)) : zB.is3D ? (UB.push(32879), rB.push(zB.depth)) : (UB.push(3553), rB.push(0))), this._faceIndices && aB.push(this._faceIndices[BB] ?? 0), this._layerIndices && pB.push(this._layerIndices[BB] ?? 0)
            }
            const JB = {
                samplingModes: IB,
                generateMipMaps: jB[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: zB,
                depthTextureFormat: nB,
                types: NB,
                formats: uB,
                DIB: QB,
                targetTypes: UB,
                faceIndex: aB,
                layerIndex: pB,
                layerCounts: rB,
                label: this.label
              },
              mB = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            BB = this._engine.createMultipleRenderTarget(mB, JB);
            for (let yB = 0; yB < QB; ++yB) {
              if (-1 !== UB[yB]) continue;
              const zB = sB[jB[yB].uniqueId];
              BB.setTexture(BB.textures[zB], yB)
            }
          }
        } else {
          const jB = {};
          if (jB.generateDepthBuffer = this._generateDepthBuffer, jB.generateMipMaps = this.texture?.generateMipMaps ?? !1, jB.generateStencilBuffer = this._generateStencilBuffer, jB.samplingMode = this.texture?.samplingMode, jB.type = this.texture?.type, jB.format = this.texture?.format, jB.noColorAttachment = !this._textures, jB.label = this.label, this.isCube) BB = this._engine.createRenderTargetCubeTexture(this.width, jB);
          else {
            const zB = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            BB = this._engine.createRenderTargetTexture(zB, jB)
          }
          BB.texture && (BB.texture.isReady = !0)
        }
        return BB
      }
      _swapRenderTargetWrapper(BB) {
        if (this._textures && BB._textures)
          for (let jB = 0; jB < this._textures.length; ++jB) this._textures[jB]._swapAndDie(BB._textures[jB], !1), BB._textures[jB].isReady = !0;
        this._depthStencilTexture && BB._depthStencilTexture && (this._depthStencilTexture._swapAndDie(BB._depthStencilTexture), BB._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const BB = this._cloneRenderTargetWrapper();
        if (BB) {
          if (this._depthStencilTexture) {
            const jB = this._depthStencilTexture.samplingMode,
              zB = this._depthStencilTexture.format,
              QB = 2 === jB || 3 === jB || 11 === jB;
            BB.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, QB, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, zB, this._depthStencilTextureLabel)
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
  40529: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      static get ForceFullSceneLoadingForIncremental() {
        return QB._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(BB) {
        QB._ForceFullSceneLoadingForIncremental = BB
      }
      static get ShowLoadingScreen() {
        return QB._ShowLoadingScreen
      }
      static set ShowLoadingScreen(BB) {
        QB._ShowLoadingScreen = BB
      }
      static get loggingLevel() {
        return QB._LoggingLevel
      }
      static set loggingLevel(BB) {
        QB._LoggingLevel = BB
      }
      static get CleanBoneMatrixWeights() {
        return QB._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(BB) {
        QB._CleanBoneMatrixWeights = BB
      }
    }
    QB._ForceFullSceneLoadingForIncremental = !1, QB._ShowLoadingScreen = !0, QB._CleanBoneMatrixWeights = !1, QB._LoggingLevel = 0
  },
  40145: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => IB
    });
    var QB = zB(38783);
    const nB = new Map;

    function dB(BB, jB) {
      (function(BB) {
        return nB.delete(BB)
      })(BB) && QB.c.Warn(`Extension with the name '${BB}' already exists`), nB.set(BB, jB)
    }

    function IB(BB, jB) {
      "image/ktx" !== jB && "image/ktx2" !== jB || (BB = ".ktx"), nB.has(BB) || (BB.endsWith(".ies") && dB(".ies", (async () => await zB.e(314).then((() => zB(41866))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && dB(".dds", (async () => await zB.e(312).then((() => zB(41871))).then((BB => new BB._DDSTextureLoader)))), BB.endsWith(".basis") && dB(".basis", (async () => await zB.e(315).then((() => zB(41880))).then((BB => new BB._BasisTextureLoader)))), BB.endsWith(".env") && dB(".env", (async () => await Promise.all([zB.e(316), zB.e(313)]).then((() => zB(41883))).then((BB => new BB._ENVTextureLoader)))), BB.endsWith(".hdr") && dB(".hdr", (async () => await zB.e(317).then((() => zB(41925))).then((BB => new BB._HDRTextureLoader)))), (BB.endsWith(".ktx") || BB.endsWith(".ktx2")) && (dB(".ktx", (async () => await zB.e(318).then((() => zB(41929))).then((BB => new BB._KTXTextureLoader)))), dB(".ktx2", (async () => await zB.e(318).then((() => zB(41929))).then((BB => new BB._KTXTextureLoader))))), BB.endsWith(".tga") && dB(".tga", (async () => await zB.e(319).then((() => zB(41941))).then((BB => new BB._TGATextureLoader)))), BB.endsWith(".exr") && dB(".exr", (async () => await zB.e(320).then((() => zB(41950))).then((BB => new BB._ExrTextureLoader)))));
      const QB = nB.get(BB);
      return QB ? Promise.resolve(QB(jB)) : null
    }
  },
  40555: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => IB,
      f: () => UB
    });
    var QB = zB(40380),
      nB = zB(40089),
      dB = zB(37222);
    class IB extends QB.b {
      get Y5() {
        return this._subMaterials
      }
      set Y5(BB) {
        this._subMaterials = BB, this._hookArray(BB)
      }
      getChildren() {
        return this.Y5
      }
      constructor(BB, jB) {
        super(BB, jB, !0), this._waitingSubMaterialsUniqueIds = [], this.aY().addMultiMaterial(this), this.Y5 = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(BB) {
        var jB = this;
        const zB = BB.push;
        BB.push = function() {
          for (var QB = arguments.length, nB = new Array(QB), dB = 0; dB < QB; dB++) nB[dB] = arguments[dB];
          const IB = zB.apply(BB, nB);
          return jB._markAllSubMeshesAsTexturesDirty(), IB
        };
        const QB = BB.splice;
        BB.splice = (jB, zB) => {
          const nB = QB.call(BB, jB, zB ?? BB.length);
          return this._markAllSubMeshesAsTexturesDirty(), nB
        }
      }
      getSubMaterial(BB) {
        return BB < 0 || BB >= this.Y5.length ? this.aY().defaultMaterial : this.Y5[BB]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.Y5.map((BB => BB ? BB.getActiveTextures() : [])))
      }
      hasTexture(BB) {
        if (super.hasTexture(BB)) return !0;
        for (let jB = 0; jB < this.Y5.length; jB++)
          if (this.Y5[jB]?.hasTexture(BB)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(BB, jB, zB) {
        for (let QB = 0; QB < this.Y5.length; QB++) {
          const nB = this.Y5[QB];
          if (nB) {
            if (nB._storeEffectOnSubMeshes) {
              if (!nB.isReadyForSubMesh(BB, jB, zB)) return !1;
              continue
            }
            if (!nB.isReady(BB)) return !1
          }
        }
        return !0
      }
      clone(BB, jB) {
        const zB = new IB(BB, this.aY());
        for (let QB = 0; QB < this.Y5.length; QB++) {
          let nB;
          const dB = this.Y5[QB];
          nB = jB && dB ? dB.clone(BB + "-" + dB.name) : this.Y5[QB], zB.Y5.push(nB)
        }
        return zB
      }
      serialize() {
        const BB = {};
        BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, nB.d && (BB.tags = nB.d.GetTags(this)), BB.materialsUniqueIds = [], BB.materials = [];
        for (let jB = 0; jB < this.Y5.length; jB++) {
          const zB = this.Y5[jB];
          zB ? (BB.materialsUniqueIds.push(zB.uniqueId), BB.materials.push(zB.id)) : (BB.materialsUniqueIds.push(null), BB.materials.push(null))
        }
        return BB
      }
      dispose(BB, jB, zB) {
        const QB = this.aY();
        if (!QB) return;
        if (zB)
          for (let dB = 0; dB < this.Y5.length; dB++) {
            const zB = this.Y5[dB];
            zB && zB.dispose(BB, jB)
          }
        const nB = QB.multiMaterials.indexOf(this);
        nB >= 0 && QB.multiMaterials.splice(nB, 1), super.dispose(BB, jB)
      }
    }
    let NB = !1;

    function uB(BB, jB) {
      const zB = new IB(BB.name, jB);
      if (zB.id = BB.id, zB._loadedUniqueId = BB.uniqueId, nB.d && nB.d.AddTagsTo(zB, BB.tags), BB.materialsUniqueIds) zB._waitingSubMaterialsUniqueIds = BB.materialsUniqueIds;
      else
        for (const QB of BB.materials) zB.Y5.push(jB.getLastMaterialById(QB));
      return zB
    }

    function UB() {
      NB || (NB = !0, IB.ParseMultiMaterial = uB, (0, dB.d)("BABYLON.MultiMaterial", IB))
    }
  },
  40312: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    var QB, nB, dB = zB(37171);
    ! function(BB) {
      BB[BB.LOCAL = 0] = "LOCAL", BB[BB.WORLD = 1] = "WORLD", BB[BB.BONE = 2] = "BONE"
    }(QB || (QB = {}));
    class IB {}
    IB.X = new dB.m(1, 0, 0), IB.Y = new dB.m(0, 1, 0), IB.Z = new dB.m(0, 0, 1),
      function(BB) {
        BB[BB.X = 0] = "X", BB[BB.Y = 1] = "Y", BB[BB.Z = 2] = "Z"
      }(nB || (nB = {}))
  },
  40056: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => uB,
      h: () => UB
    });
    var QB = zB(37171);
    const nB = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      dB = [() => 1, BB => BB.y, BB => BB.z, BB => BB.x, BB => BB.x * BB.y, BB => BB.y * BB.z, BB => 3 * BB.z * BB.z - 1, BB => BB.x * BB.z, BB => BB.x * BB.x - BB.y * BB.y],
      IB = (BB, jB) => nB[BB] * dB[BB](jB),
      NB = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class uB {
      constructor() {
        this.preScaled = !1, this.l00 = QB.m.Zero(), this.l1_1 = QB.m.Zero(), this.l10 = QB.m.Zero(), this.l11 = QB.m.Zero(), this.l2_2 = QB.m.Zero(), this.l2_1 = QB.m.Zero(), this.l20 = QB.m.Zero(), this.l21 = QB.m.Zero(), this.l22 = QB.m.Zero()
      }
      addLight(BB, jB, zB) {
        QB.h.KJ[0].set(jB.r, jB.g, jB.b);
        const nB = QB.h.KJ[0],
          dB = QB.h.KJ[1];
        nB.scaleToRef(zB, dB), dB.scaleToRef(IB(0, BB), QB.h.KJ[2]), this.l00.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(1, BB), QB.h.KJ[2]), this.l1_1.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(2, BB), QB.h.KJ[2]), this.l10.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(3, BB), QB.h.KJ[2]), this.l11.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(4, BB), QB.h.KJ[2]), this.l2_2.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(5, BB), QB.h.KJ[2]), this.l2_1.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(6, BB), QB.h.KJ[2]), this.l20.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(7, BB), QB.h.KJ[2]), this.l21.addInPlace(QB.h.KJ[2]), dB.scaleToRef(IB(8, BB), QB.h.KJ[2]), this.l22.addInPlace(QB.h.KJ[2])
      }
      scaleInPlace(BB) {
        this.l00.scaleInPlace(BB), this.l1_1.scaleInPlace(BB), this.l10.scaleInPlace(BB), this.l11.scaleInPlace(BB), this.l2_2.scaleInPlace(BB), this.l2_1.scaleInPlace(BB), this.l20.scaleInPlace(BB), this.l21.scaleInPlace(BB), this.l22.scaleInPlace(BB)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(NB[0]), this.l1_1.scaleInPlace(NB[1]), this.l10.scaleInPlace(NB[2]), this.l11.scaleInPlace(NB[3]), this.l2_2.scaleInPlace(NB[4]), this.l2_1.scaleInPlace(NB[5]), this.l20.scaleInPlace(NB[6]), this.l21.scaleInPlace(NB[7]), this.l22.scaleInPlace(NB[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(nB[0]), this.l1_1.scaleInPlace(nB[1]), this.l10.scaleInPlace(nB[2]), this.l11.scaleInPlace(nB[3]), this.l2_2.scaleInPlace(nB[4]), this.l2_1.scaleInPlace(nB[5]), this.l20.scaleInPlace(nB[6]), this.l21.scaleInPlace(nB[7]), this.l22.scaleInPlace(nB[8])
      }
      updateFromArray(BB) {
        return QB.m.FromArrayToRef(BB[0], 0, this.l00), QB.m.FromArrayToRef(BB[1], 0, this.l1_1), QB.m.FromArrayToRef(BB[2], 0, this.l10), QB.m.FromArrayToRef(BB[3], 0, this.l11), QB.m.FromArrayToRef(BB[4], 0, this.l2_2), QB.m.FromArrayToRef(BB[5], 0, this.l2_1), QB.m.FromArrayToRef(BB[6], 0, this.l20), QB.m.FromArrayToRef(BB[7], 0, this.l21), QB.m.FromArrayToRef(BB[8], 0, this.l22), this
      }
      updateFromFloatsArray(BB) {
        return QB.m.FromFloatsToRef(BB[0], BB[1], BB[2], this.l00), QB.m.FromFloatsToRef(BB[3], BB[4], BB[5], this.l1_1), QB.m.FromFloatsToRef(BB[6], BB[7], BB[8], this.l10), QB.m.FromFloatsToRef(BB[9], BB[10], BB[11], this.l11), QB.m.FromFloatsToRef(BB[12], BB[13], BB[14], this.l2_2), QB.m.FromFloatsToRef(BB[15], BB[16], BB[17], this.l2_1), QB.m.FromFloatsToRef(BB[18], BB[19], BB[20], this.l20), QB.m.FromFloatsToRef(BB[21], BB[22], BB[23], this.l21), QB.m.FromFloatsToRef(BB[24], BB[25], BB[26], this.l22), this
      }
      static FromArray(BB) {
        return (new uB).updateFromArray(BB)
      }
      static FromPolynomial(BB) {
        const jB = new uB;
        return jB.l00 = BB.xx.scale(.376127).add(BB.yy.scale(.376127)).add(BB.zz.scale(.376126)), jB.l1_1 = BB.y.scale(.977204), jB.l10 = BB.z.scale(.977204), jB.l11 = BB.x.scale(.977204), jB.l2_2 = BB.xy.scale(1.16538), jB.l2_1 = BB.yz.scale(1.16538), jB.l20 = BB.zz.scale(1.34567).subtract(BB.xx.scale(.672834)).subtract(BB.yy.scale(.672834)), jB.l21 = BB.zx.scale(1.16538), jB.l22 = BB.xx.scale(1.16538).subtract(BB.yy.scale(1.16538)), jB.l1_1.scaleInPlace(-1), jB.l11.scaleInPlace(-1), jB.l2_1.scaleInPlace(-1), jB.l21.scaleInPlace(-1), jB.scaleInPlace(Math.PI), jB
      }
    }
    class UB {
      constructor() {
        this.x = QB.m.Zero(), this.y = QB.m.Zero(), this.z = QB.m.Zero(), this.xx = QB.m.Zero(), this.yy = QB.m.Zero(), this.zz = QB.m.Zero(), this.xy = QB.m.Zero(), this.yz = QB.m.Zero(), this.zx = QB.m.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = uB.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(BB) {
        QB.h.KJ[0].U3(BB.r, BB.g, BB.b);
        const jB = QB.h.KJ[0];
        this.xx.addInPlace(jB), this.yy.addInPlace(jB), this.zz.addInPlace(jB)
      }
      scaleInPlace(BB) {
        this.x.scaleInPlace(BB), this.y.scaleInPlace(BB), this.z.scaleInPlace(BB), this.xx.scaleInPlace(BB), this.yy.scaleInPlace(BB), this.zz.scaleInPlace(BB), this.yz.scaleInPlace(BB), this.zx.scaleInPlace(BB), this.xy.scaleInPlace(BB)
      }
      updateFromHarmonics(BB) {
        return this._harmonics = BB, this.x.jH(BB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.jH(BB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.jH(BB.l10), this.z.scaleInPlace(1.02333), this.xx.jH(BB.l00), QB.h.KJ[0].jH(BB.l20).scaleInPlace(.247708), QB.h.KJ[1].jH(BB.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).MQB(QB.h.KJ[0]).addInPlace(QB.h.KJ[1]), this.yy.jH(BB.l00), this.yy.scaleInPlace(.886277).MQB(QB.h.KJ[0]).MQB(QB.h.KJ[1]), this.zz.jH(BB.l00), QB.h.KJ[0].jH(BB.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(QB.h.KJ[0]), this.yz.jH(BB.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.jH(BB.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.jH(BB.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(BB) {
        return (new UB).updateFromHarmonics(BB)
      }
      static FromArray(BB) {
        const jB = new UB;
        return QB.m.FromArrayToRef(BB[0], 0, jB.x), QB.m.FromArrayToRef(BB[1], 0, jB.y), QB.m.FromArrayToRef(BB[2], 0, jB.z), QB.m.FromArrayToRef(BB[3], 0, jB.xx), QB.m.FromArrayToRef(BB[4], 0, jB.yy), QB.m.FromArrayToRef(BB[5], 0, jB.zz), QB.m.FromArrayToRef(BB[6], 0, jB.yz), QB.m.FromArrayToRef(BB[7], 0, jB.zx), QB.m.FromArrayToRef(BB[8], 0, jB.xy), jB
      }
    }
  },
  40539: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => FB,
      g: () => VB
    });
    var QB = zB(40066),
      nB = zB(37202),
      dB = zB(37171),
      IB = zB(40211),
      NB = zB(40519),
      uB = zB(40546),
      UB = zB(40202),
      aB = zB(40404),
      pB = zB(40195);
    class rB {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new dB.m(0, 0, 0), this._diffPositionForCollisions = new dB.m(0, 0, 0), this._collisionResponse = !0
      }
    }
    var sB, JB, mB, yB = zB(39965),
      kB = zB(40130),
      GB = zB(40418),
      LB = zB(37379),
      gB = zB(37178),
      tB = zB(40312),
      SB = zB(38783),
      MB = zB(40068),
      EB = zB(39980),
      iB = zB(37222);

    function qB(BB, jB) {
      return BB - Math.floor(BB / jB) * jB
    }

    function fB(BB, jB, zB) {
      BB instanceof Float32Array ? dB.c.FromArrayToRef(BB, jB, zB) : zB.U3((0, kB.c)(BB[jB]), (0, kB.c)(BB[jB + 1]), (0, kB.c)(BB[jB + 2]), (0, kB.c)(BB[jB + 3]), (0, kB.c)(BB[jB + 4]), (0, kB.c)(BB[jB + 5]), (0, kB.c)(BB[jB + 6]), (0, kB.c)(BB[jB + 7]), (0, kB.c)(BB[jB + 8]), (0, kB.c)(BB[jB + 9]), (0, kB.c)(BB[jB + 10]), (0, kB.c)(BB[jB + 11]), (0, kB.c)(BB[jB + 12]), (0, kB.c)(BB[jB + 13]), (0, kB.c)(BB[jB + 14]), (0, kB.c)(BB[jB + 15]))
    }

    function oB(BB, jB, zB, QB, nB, NB, uB, UB, aB) {
      const pB = zB.texture,
        rB = pB?.getInternalTexture(),
        sB = rB?._bufferView;
      if (!(sB instanceof Float32Array) && !(sB instanceof Uint16Array)) return SB.c.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const JB = pB.getSize(),
        mB = function(BB, jB) {
          const zB = BB.y - BB.x + 1,
            QB = jB * BB.w / zB,
            nB = QB < 1 ? 0 : 1,
            dB = zB - nB;
          let IB = qB(QB - Math.floor(QB), 1) * dB;
          return IB = qB(IB + BB.z, dB), Math.floor(IB) + BB.x + nB
        }(QB, zB.time);
      if (!isFinite(mB) || mB < 0 || mB >= JB.height) return SB.c.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const yB = dB.h.KJ[0],
        kB = dB.h.Matrix[0],
        GB = dB.h.Matrix[1],
        LB = mB * JB.width * 4,
        gB = jB === IB.l.NormalKind ? dB.m.TransformNormalFromFloatsToRef : dB.m.TransformCoordinatesFromFloatsToRef;
      for (let dB = 0, IB = 0; dB < BB.length; dB += 3, IB += 4) {
        let jB, zB;
        for (kB.reset(), jB = 0; jB < 4 && jB < aB; jB++) zB = NB[IB + jB], zB > 0 && (fB(sB, LB + 16 * Math.floor(nB[IB + jB]), GB), GB.scaleAndAddToRef(zB, kB));
        if (uB && UB)
          for (jB = 0; jB < 4 && jB + 4 < aB; jB++) zB = UB[IB + jB], zB > 0 && (fB(sB, LB + 16 * Math.floor(uB[IB + jB]), GB), GB.scaleAndAddToRef(zB, kB));
        gB(BB[dB], BB[dB + 1], BB[dB + 2], kB, yB), yB.toArray(BB, dB)
      }
      return !0
    }
    class HB {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = dB.m.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class DB {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new HB, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new rB, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let FB = (() => {
        var BB;
        let jB, rB = uB.f,
          sB = [];
        return BB = class extends rB {
          static get BILLBOARDMODE_NONE() {
            return uB.f.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return uB.f.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return uB.f.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return uB.f.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return uB.f.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return uB.f.BILLBOARDMODE_USE_POSITION
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
          set Jr(BB) {
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
            const jB = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = BB, (1 === jB && 1 !== BB || 1 !== jB && 1 === BB) && this._markSubMeshesAsDirty((BB => {
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
            this._internalAbstractMeshDataInfo._material !== BB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = BB, BB && BB.meshMap && (BB.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.cL && (this.resetDrawCache(void 0, null == BB), this._unBindEffect()))
          }
          getMaterialForRenderPass(BB) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[BB]
          }
          setMaterialForRenderPass(BB, jB) {
            this.resetDrawCache(BB), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const zB = this._internalAbstractMeshDataInfo._materialForRenderPass[BB];
            zB?.meshMap?.[this.uniqueId] && (zB.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[BB] = jB, jB && jB.meshMap && (jB.meshMap[this.uniqueId] = this)
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
            const jB = this._internalAbstractMeshDataInfo._skeleton;
            jB && jB.needInitialSkinMatrix && jB._unregisterMeshWithPoseMatrix(this), BB && BB.needInitialSkinMatrix && BB._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = BB, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(jB) {
            var zB;
            let QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(jB, QB, !1), zB = this, this._internalAbstractMeshDataInfo = new DB, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = BB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new nB.c, this.onCollisionPositionChangeObservable = new nB.c, this.onMaterialChangedObservable = new nB.c, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.Ny = BB.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = LB.d.Red(), this.outlineWidth = .02, this.overlayColor = LB.d.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.xJ = !1, this.cJ = !1, this.actionManager = null, this.ellipsoid = new dB.m(.5, 1, .5), this.ellipsoidOffset = new dB.m(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new LB.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                kY: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new nB.c, this._onCollisionPositionChange = function(BB, jB) {
                let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                jB.subtractToRef(zB._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, zB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), zB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > EB.c.CollisionsEpsilon && zB.position.addInPlace(zB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), QB && zB.onCollideObservable.notifyObservers(QB), zB.onCollisionPositionChangeObservable.notifyObservers(zB.position)
              }, QB = this.aY(), this.layerMask = QB.defaultRenderableLayerMask, QB.IQB(this), this._resyncLightSources(), this._uniformBuffer = new pB.d(this.aY().wJ(), void 0, void 0, jB, !this.aY().wJ().isWebGPU), this._buildUniformLayout(), QB.performancePriority) {
              case 2:
                this.cJ = !0;
              case 1:
                this.xJ = !0, this.Ny = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(BB) {
            const jB = this._uniformBuffer;
            jB.l_("world", BB), jB.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), jB.update()
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
            let jB = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            jB += ", # of submeshes: " + (this.cL ? this.cL.length : 0);
            const zB = this._internalAbstractMeshDataInfo._skeleton;
            return zB && (jB += ", skeleton: " + zB.name), BB && (jB += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], jB += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.kY ? "YES" : "NO")), jB
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== uB.f.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(BB) {
            let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (jB || this.actionManager.isRecursive)) {
              if (!BB) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(BB)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(BB, !1) : null
          }
          _releaseRenderPassId(BB) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.cL) {
              for (const BB of this.cL) BB._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const BB of this.aY().lights) BB.isEnabled() && BB.canAffectMesh(this) && this._lightSources.push(BB);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(BB) {
            const jB = BB.isEnabled() && BB.canAffectMesh(this),
              zB = this._lightSources.indexOf(BB);
            let QB = !1;
            if (-1 === zB) {
              if (!jB) return;
              this._lightSources.push(BB)
            } else {
              if (jB) return;
              QB = !0, this._lightSources.splice(zB, 1)
            }
            this._markSubMeshesAsLightDirty(QB)
          }
          _unBindEffect() {
            for (const BB of this.cL) BB.setEffect(null)
          }
          _removeLightSource(BB, jB) {
            const zB = this._lightSources.indexOf(BB); - 1 !== zB && (this._lightSources.splice(zB, 1), this._markSubMeshesAsLightDirty(jB))
          }
          _markSubMeshesAsDirty(BB) {
            if (this.cL)
              for (const jB of this.cL)
                for (let zB = 0; zB < jB._drawWrappers.length; ++zB) {
                  const QB = jB._drawWrappers[zB];
                  QB && QB.defines && QB.defines.markAllAsDirty && BB(QB.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((jB => jB.markAsLightDirty(BB)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((BB => BB.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((BB => BB.markAsMiscDirty()))
          }
          DjB(BB) {
            return this._currentRenderId = Number.MAX_VALUE, super.DjB(BB), this._isDirty = !0, this
          }
          resetDrawCache(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.cL)
              for (const zB of this.cL) zB.resetDrawCache(BB, jB)
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
          dQB() {
            return null
          }
          getVerticesData(BB) {
            return null
          }
          setVerticesData(BB, jB, zB, QB) {
            return this
          }
          updateVerticesData(BB, jB, zB, QB) {
            return this
          }
          setIndices(BB, jB) {
            return this
          }
          isVerticesDataPresent(BB) {
            return !1
          }
          rV() {
            return this._masterMesh ? this._masterMesh.rV() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.rV()
          }
          setBoundingInfo(BB) {
            return this._boundingInfo = BB, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(BB, jB, zB) {
            return this._boundingInfo = new aB.c(BB, jB, zB), this._boundingInfo
          }
          normalizeToUnitCube() {
            let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zB = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(BB, jB, zB)
          }
          get useBones() {
            return this.skeleton && this.aY().skeletonsEnabled && this.isVerticesDataPresent(IB.l.MatricesIndicesKind) && this.isVerticesDataPresent(IB.l.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(BB) {}
          _activate(BB, jB) {
            return this._renderId = BB, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === uB.f.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get rY() {
            return !1
          }
          get bQB() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(BB, jB, zB) {
            return this.position.addInPlace(this.calcMovePOV(BB, jB, zB)), this
          }
          calcMovePOV(BB, jB, zB) {
            const QB = new dB.c;
            (this.rotationQuaternion ? this.rotationQuaternion : dB.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(QB);
            const nB = dB.m.Zero(),
              IB = this.definedFacingForward ? -1 : 1;
            return dB.m.TransformCoordinatesFromFloatsToRef(BB * IB, jB, zB * IB, QB, nB), nB
          }
          rotatePOV(BB, jB, zB) {
            return this.rotation.addInPlace(this.calcRotatePOV(BB, jB, zB)), this
          }
          calcRotatePOV(BB, jB, zB) {
            const QB = this.definedFacingForward ? 1 : -1;
            return new dB.m(BB * QB, jB, zB * QB)
          }
          _refreshBoundingInfo(BB, jB) {
            if (BB) {
              const zB = (0, GB.e)(BB, 0, this.getTotalVertices(), jB);
              this._boundingInfo ? this._boundingInfo.reConstruct(zB.minimum, zB.maximum) : this._boundingInfo = new aB.c(zB.minimum, zB.maximum)
            }
            if (this.cL)
              for (let zB = 0; zB < this.cL.length; zB++) this.cL[zB].refreshBoundingInfo(BB);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(BB) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new aB.c(BB.minimum, BB.maximum), this.cL)
              for (let jB = 0; jB < this.cL.length; jB++) this.cL[jB].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(BB, jB, zB, QB, nB, NB, uB) {
            ! function(BB, jB, zB, QB, nB, NB, uB) {
              const UB = dB.h.KJ[0],
                aB = dB.h.Matrix[0],
                pB = dB.h.Matrix[1],
                rB = jB === IB.l.NormalKind ? dB.m.TransformNormalFromFloatsToRef : dB.m.TransformCoordinatesFromFloatsToRef;
              for (let IB = 0, sB = 0; IB < BB.length; IB += 3, sB += 4) {
                let jB, JB;
                for (aB.reset(), jB = 0; jB < 4; jB++) JB = nB[sB + jB], JB > 0 && (dB.c.FromFloat32ArrayToRefScaled(zB, Math.floor(16 * QB[sB + jB]), JB, pB), aB.addToSelf(pB));
                if (NB && uB)
                  for (jB = 0; jB < 4; jB++) JB = uB[sB + jB], JB > 0 && (dB.c.FromFloat32ArrayToRefScaled(zB, Math.floor(16 * NB[sB + jB]), JB, pB), aB.addToSelf(pB));
                rB(BB[IB], BB[IB + 1], BB[IB + 2], aB, UB), UB.toArray(BB, IB)
              }
            }(BB, jB, zB, QB, nB, NB, uB)
          }
          _getData(jB, zB) {
            let QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IB.l.PositionKind;
            const nB = jB.cache,
              NB = BB => {
                if (nB) {
                  const jB = nB._vertexData || (nB._vertexData = {});
                  return jB[BB] || this.copyVerticesData(BB, jB), jB[BB]
                }
                return this.getVerticesData(BB)
              };
            if (zB || (zB = NB(QB)), !zB) return null;
            nB ? (nB._outputData ? nB._outputData.set(zB) : nB._outputData = new Float32Array(zB), zB = nB._outputData) : (jB.applyMorph && this.morphTargetManager || jB.applySkeleton && this.skeleton || jB.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (zB = zB.slice()), jB.applyMorph && this.morphTargetManager && function(BB, jB, zB) {
              let QB;
              switch (jB) {
                case IB.l.PositionKind:
                  QB = BB => BB.getPositions();
                  break;
                case IB.l.NormalKind:
                  QB = BB => BB.getNormals();
                  break;
                case IB.l.TangentKind:
                  QB = BB => BB.getTangents();
                  break;
                case IB.l.UVKind:
                  QB = BB => BB.getUVs();
                  break;
                case IB.l.UV2Kind:
                  QB = BB => BB.getUV2s();
                  break;
                case IB.l.ColorKind:
                  QB = BB => BB.getColors();
                  break;
                default:
                  return
              }
              for (let nB = 0; nB < BB.length; nB++) {
                let jB = BB[nB];
                for (let dB = 0; dB < zB.numTargets; dB++) {
                  const IB = zB.getTarget(dB),
                    NB = IB.influence;
                  if (0 !== NB) {
                    const zB = QB(IB);
                    zB && (jB += (zB[nB] - BB[nB]) * NB)
                  }
                }
                BB[nB] = jB
              }
            }(zB, QB, this.morphTargetManager);
            const uB = this.bakedVertexAnimationManager;
            let UB = !1;
            if (jB.applyBakedVertexAnimation && uB?.isEnabled) {
              const BB = NB(IB.l.MatricesIndicesKind),
                nB = NB(IB.l.MatricesWeightsKind);
              if (nB && BB) {
                const dB = this.numBoneInfluencers > 4,
                  aB = dB ? NB(IB.l.MatricesIndicesExtraKind) : null,
                  pB = dB ? NB(IB.l.MatricesWeightsExtraKind) : null;
                UB = oB(zB, QB, uB, jB.bakedVertexAnimationSettings ?? uB.animationParameters, BB, nB, aB, pB, this.numBoneInfluencers)
              }
            }
            if (!UB && jB.applySkeleton && this.skeleton) {
              const jB = NB(IB.l.MatricesIndicesKind),
                nB = NB(IB.l.MatricesWeightsKind);
              if (nB && jB) {
                const dB = this.numBoneInfluencers > 4,
                  uB = dB ? NB(IB.l.MatricesIndicesExtraKind) : null,
                  UB = dB ? NB(IB.l.MatricesWeightsExtraKind) : null,
                  aB = this.skeleton.getTransformMatrices(this);
                BB._ApplySkeleton(zB, QB, aB, jB, nB, uB, UB)
              }
            }
            if (!1 !== jB.updatePositionsArray && QB === IB.l.PositionKind) {
              const BB = this._internalAbstractMeshDataInfo._positions || [],
                jB = BB.length;
              if (BB.length = zB.length / 3, jB < BB.length)
                for (let zB = jB; zB < BB.length; zB++) BB[zB] = new dB.m;
              for (let QB = 0, nB = 0; QB < BB.length; QB++, nB += 3) BB[QB].U3(zB[nB], zB[nB + 1], zB[nB + 2]);
              this._internalAbstractMeshDataInfo._positions = BB
            }
            return zB
          }
          getNormalsData() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: BB,
              applyMorph: jB,
              updatePositionsArray: !1
            }, null, IB.l.NormalKind)
          }
          Gw() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: BB,
              applyMorph: jB,
              updatePositionsArray: !1
            }, zB, IB.l.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new aB.c(dB.m.Zero(), dB.m.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(BB) {
            if (!this.cL) return this;
            const jB = this.cL.length;
            for (let zB = 0; zB < jB; zB++) {
              const QB = this.cL[zB];
              (jB > 1 || !QB.IsGlobal) && QB.updateBoundingInfo(BB)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.cJ || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(BB) {
            return this.rV().isInFrustum(BB, this.cullingStrategy)
          }
          isCompletelyInFrustum(BB) {
            return this.rV().isCompletelyInFrustum(BB)
          }
          lQB(BB) {
            let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              zB = arguments.length > 2 ? arguments[2] : void 0;
            const QB = this.rV(),
              nB = BB.rV();
            if (QB.intersects(nB, jB)) return !0;
            if (zB)
              for (const dB of this.getChildMeshes())
                if (dB.lQB(BB, jB, !0)) return !0;
            return !1
          }
          intersectsPoint(BB) {
            return this.rV().intersectsPoint(BB)
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
            let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const zB = this.aY().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = zB.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, zB.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, BB, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, jB), this
          }
          _collideForSubMesh(BB, jB, zB) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!BB._lastColliderWorldVertices || !BB._lastColliderTransformMatrix.equals(jB)) {
              BB._lastColliderTransformMatrix = jB.clone(), BB._lastColliderWorldVertices = [], BB._trianglePlanes = [];
              const zB = BB.verticesStart,
                QB = BB.verticesStart + BB.verticesCount;
              for (let nB = zB; nB < QB; nB++) BB._lastColliderWorldVertices.push(dB.m.TransformCoordinates(this._positions[nB], jB))
            }
            return zB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.dQB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.bJ(), this, this._shouldConvertRHS(), 7 === BB.bJ()?.fillMode), this
          }
          _processCollisionsForSubMeshes(BB, jB) {
            const zB = this._scene.getCollidingSubMeshCandidates(this, BB),
              QB = zB.length;
            for (let nB = 0; nB < QB; nB++) {
              const dB = zB.data[nB];
              QB > 1 && !dB._checkCollision(BB) || this._collideForSubMesh(dB, jB, BB)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(BB) {
            if (!this.rV()._checkCollision(BB)) return this;
            const jB = dB.h.Matrix[0],
              zB = dB.h.Matrix[1];
            return dB.c.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, jB), this.worldMatrixFromCache.multiplyToRef(jB, zB), this._processCollisionsForSubMeshes(BB, zB), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(BB, jB, zB) {
            let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              nB = arguments.length > 4 ? arguments[4] : void 0,
              IB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const NB = new UB.d,
              uB = this.getClassName(),
              aB = "InstancedLinesMesh" === uB || "LinesMesh" === uB || "GreasedLineMesh" === uB ? this.intersectionThreshold : 0,
              pB = this.rV();
            if (!this.cL) return NB;
            if (!IB && (!BB.intersectsSphere(pB.fQB, aB) || !BB.intersectsBox(pB.boundingBox, aB))) return NB;
            if (QB) return NB.hit = !IB, NB.pickedMesh = IB ? null : this, NB.distance = IB ? 0 : dB.m.Distance(BB.origin, pB.fQB.center), NB.subMeshId = 0, NB;
            if (!this._generatePointsArray()) return NB;
            let rB = null;
            const sB = this._scene.getIntersectingSubMeshCandidates(this, BB),
              JB = sB.length;
            let mB = !1;
            for (let dB = 0; dB < JB; dB++) {
              const BB = sB.data[dB].bJ();
              if (BB && (7 == BB.fillMode || 0 == BB.fillMode || 1 == BB.fillMode || 2 == BB.fillMode || 4 == BB.fillMode)) {
                mB = !0;
                break
              }
            }
            if (!mB) return NB.hit = !0, NB.pickedMesh = this, NB.distance = dB.m.Distance(BB.origin, pB.fQB.center), NB.subMeshId = -1, NB;
            for (let dB = 0; dB < JB; dB++) {
              const QB = sB.data[dB];
              if (JB > 1 && !IB && !QB.canIntersects(BB)) continue;
              const nB = QB.intersects(BB, this._positions, this.dQB(), jB, zB);
              if (nB && (jB || !rB || nB.distance < rB.distance) && (rB = nB, rB.subMeshId = QB._id, rB._internalSubMeshId = dB, jB)) break
            }
            if (rB) {
              const jB = nB ?? this.getWorldMatrix(),
                zB = dB.h.KJ[0],
                QB = dB.h.KJ[1];
              dB.m.TransformCoordinatesToRef(BB.origin, jB, zB), BB.direction.scaleToRef(rB.distance, QB);
              const IB = dB.m.TransformNormal(QB, jB).addInPlace(zB);
              return NB.hit = !0, NB.distance = dB.m.Distance(zB, IB), NB.pickedPoint = IB, NB.pickedMesh = this, NB.bu = rB.bu || 0, NB.bv = rB.bv || 0, NB.subMeshFaceId = rB.faceId, NB.faceId = rB.faceId + sB.data[rB._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), NB.subMeshId = rB.subMeshId, NB
            }
            return NB
          }
          clone(BB, jB, zB) {
            return null
          }
          releaseSubMeshes() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.cL)
              for (; this.cL.length;) this.cL[0].dispose(BB);
            else this.cL = [];
            return this
          }
          dispose(BB) {
            let jB, zB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const QB = this.aY();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), QB.freeActiveMeshes(), QB.freeRenderingGroups(), QB.renderingManager.maintainStateBetweenFrames && QB.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((BB => BB !== this && BB.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), jB = 0; jB < this._intersectionsInProgress.length; jB++) {
              const BB = this._intersectionsInProgress[jB],
                zB = BB._intersectionsInProgress.indexOf(this);
              BB._intersectionsInProgress.splice(zB, 1)
            }
            this._intersectionsInProgress.length = 0;
            const nB = QB.lights;
            for (const IB of nB) {
              let BB = IB.includedOnlyMeshes.indexOf(this); - 1 !== BB && IB.includedOnlyMeshes.splice(BB, 1), BB = IB.excludedMeshes.indexOf(this), -1 !== BB && IB.excludedMeshes.splice(BB, 1);
              const jB = IB.getShadowGenerators();
              if (jB) {
                const zB = jB.values();
                for (let jB = zB.next(); !0 !== jB.done; jB = zB.next()) {
                  const zB = jB.value.getShadowMap();
                  zB && zB.renderList && (BB = zB.renderList.indexOf(this), -1 !== BB && zB.renderList.splice(BB, 1))
                }
              }
            }
            this.releaseSubMeshes(QB._isDisposing);
            const dB = QB.wJ();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, dB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), dB.wipeCaches(), QB.qY(this), this._parentContainer) {
              const BB = this._parentContainer.meshes.indexOf(this);
              BB > -1 && this._parentContainer.meshes.splice(BB, 1), this._parentContainer = null
            }
            if (zB && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !BB)
              for (jB = 0; jB < QB.RL.length; jB++) QB.RL[jB].emitter === this && (QB.RL[jB].dispose(), jB--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(BB, zB)
          }
          _initFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.dQB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSubdivisions : 10, BB.partitioningBBoxRatio = BB.partitioningBBoxRatio ? BB.partitioningBBoxRatio : 1.01;
            for (let jB = 0; jB < BB.facetNb; jB++) BB.facetNormals[jB] = dB.m.Zero(), BB.facetPositions[jB] = dB.m.Zero();
            return BB.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            BB.facetDataEnabled || this._initFacetData();
            const jB = this.getVerticesData(IB.l.PositionKind),
              zB = this.dQB(),
              QB = this.getVerticesData(IB.l.NormalKind)?.slice(),
              nB = this.rV();
            if (BB.facetDepthSort && !BB.facetDepthSortEnabled) {
              if (BB.facetDepthSortEnabled = !0, zB instanceof Uint16Array) BB.depthSortedIndices = new Uint16Array(zB);
              else if (zB instanceof Uint32Array) BB.depthSortedIndices = new Uint32Array(zB);
              else {
                let jB = !1;
                for (let BB = 0; BB < zB.length; BB++)
                  if (zB[BB] > 65535) {
                    jB = !0;
                    break
                  } BB.depthSortedIndices = jB ? new Uint32Array(zB) : new Uint16Array(zB)
              }
              if (BB.facetDepthSortFunction = function(BB, jB) {
                  return jB.sqDistance - BB.sqDistance
                }, !BB.facetDepthSortFrom) {
                const jB = this.aY().activeCamera;
                BB.facetDepthSortFrom = jB ? jB.position : dB.m.Zero()
              }
              BB.depthSortedFacets = [];
              for (let jB = 0; jB < BB.facetNb; jB++) {
                const zB = {
                  ind: 3 * jB,
                  sqDistance: 0
                };
                BB.depthSortedFacets.push(zB)
              }
              BB.invertedMatrix = dB.c.Identity(), BB.facetDepthSortOrigin = dB.m.Zero()
            }
            BB.bbSize.x = nB.maximum.x - nB.minimum.x > gB.c ? nB.maximum.x - nB.minimum.x : gB.c, BB.bbSize.y = nB.maximum.y - nB.minimum.y > gB.c ? nB.maximum.y - nB.minimum.y : gB.c, BB.bbSize.z = nB.maximum.z - nB.minimum.z > gB.c ? nB.maximum.z - nB.minimum.z : gB.c;
            let uB = BB.bbSize.x > BB.bbSize.y ? BB.bbSize.x : BB.bbSize.y;
            if (uB = uB > BB.bbSize.z ? uB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / uB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / uB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / uB), BB.subDiv.X = BB.subDiv.X < 1 ? 1 : BB.subDiv.X, BB.subDiv.Y = BB.subDiv.Y < 1 ? 1 : BB.subDiv.Y, BB.subDiv.Z = BB.subDiv.Z < 1 ? 1 : BB.subDiv.Z, BB.facetParameters.facetNormals = this.getFacetLocalNormals(), BB.facetParameters.facetPositions = this.getFacetLocalPositions(), BB.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), BB.facetParameters.bInfo = nB, BB.facetParameters.bbSize = BB.bbSize, BB.facetParameters.subDiv = BB.subDiv, BB.facetParameters.ratio = this.partitioningBBoxRatio, BB.facetParameters.depthSort = BB.facetDepthSort, BB.facetDepthSort && BB.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(BB.invertedMatrix), dB.m.TransformCoordinatesToRef(BB.facetDepthSortFrom, BB.invertedMatrix, BB.facetDepthSortOrigin), BB.facetParameters.distanceTo = BB.facetDepthSortOrigin), BB.facetParameters.depthSortedFacets = BB.depthSortedFacets, QB && NB.e.ComputeNormals(jB, zB, QB, BB.facetParameters), BB.facetDepthSort && BB.facetDepthSortEnabled) {
              BB.depthSortedFacets.sort(BB.facetDepthSortFunction);
              const jB = BB.depthSortedIndices.length / 3 | 0;
              for (let QB = 0; QB < jB; QB++) {
                const jB = BB.depthSortedFacets[QB].ind;
                BB.depthSortedIndices[3 * QB] = zB[jB], BB.depthSortedIndices[3 * QB + 1] = zB[jB + 1], BB.depthSortedIndices[3 * QB + 2] = zB[jB + 2]
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
            const jB = dB.m.Zero();
            return this.getFacetPositionToRef(BB, jB), jB
          }
          getFacetPositionToRef(BB, jB) {
            const zB = this.getFacetLocalPositions()[BB],
              QB = this.getWorldMatrix();
            return dB.m.TransformCoordinatesToRef(zB, QB, jB), this
          }
          getFacetNormal(BB) {
            const jB = dB.m.Zero();
            return this.getFacetNormalToRef(BB, jB), jB
          }
          getFacetNormalToRef(BB, jB) {
            const zB = this.getFacetLocalNormals()[BB];
            return dB.m.TransformNormalToRef(zB, this.getWorldMatrix(), jB), this
          }
          getFacetsAtLocalCoordinates(BB, jB, zB) {
            const QB = this.rV(),
              nB = this._internalAbstractMeshDataInfo._facetData,
              dB = Math.floor((BB - QB.minimum.x * nB.partitioningBBoxRatio) * nB.subDiv.X * nB.partitioningBBoxRatio / nB.bbSize.x),
              IB = Math.floor((jB - QB.minimum.y * nB.partitioningBBoxRatio) * nB.subDiv.Y * nB.partitioningBBoxRatio / nB.bbSize.y),
              NB = Math.floor((zB - QB.minimum.z * nB.partitioningBBoxRatio) * nB.subDiv.Z * nB.partitioningBBoxRatio / nB.bbSize.z);
            return dB < 0 || dB > nB.subDiv.max || IB < 0 || IB > nB.subDiv.max || NB < 0 || NB > nB.subDiv.max ? null : nB.facetPartitioning[dB + nB.subDiv.max * IB + nB.subDiv.max * nB.subDiv.max * NB]
          }
          getClosestFacetAtCoordinates(BB, jB, zB, QB) {
            let nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              IB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const NB = this.getWorldMatrix(),
              uB = dB.h.Matrix[5];
            NB.invertToRef(uB);
            const UB = dB.h.KJ[8];
            dB.m.TransformCoordinatesFromFloatsToRef(BB, jB, zB, uB, UB);
            const aB = this.getClosestFacetAtLocalCoordinates(UB.x, UB.y, UB.z, QB, nB, IB);
            return QB && dB.m.TransformCoordinatesFromFloatsToRef(QB.x, QB.y, QB.z, NB, QB), aB
          }
          getClosestFacetAtLocalCoordinates(BB, jB, zB, QB) {
            let nB, dB, IB, NB, uB, UB, aB, pB, rB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              sB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              JB = null;
            const mB = this.getFacetLocalPositions(),
              yB = this.getFacetLocalNormals(),
              kB = this.getFacetsAtLocalCoordinates(BB, jB, zB);
            if (!kB) return null;
            let GB, LB, gB, tB, SB = Number.MAX_VALUE;
            for (let MB = 0; MB < kB.length; MB++) LB = kB[MB], gB = yB[LB], tB = mB[LB], NB = (BB - tB.x) * gB.x + (jB - tB.y) * gB.y + (zB - tB.z) * gB.z, (!rB || rB && sB && NB >= 0 || rB && !sB && NB <= 0) && (NB = gB.x * tB.x + gB.y * tB.y + gB.z * tB.z, uB = -(gB.x * BB + gB.y * jB + gB.z * zB - NB) / (gB.x * gB.x + gB.y * gB.y + gB.z * gB.z), UB = BB + gB.x * uB, aB = jB + gB.y * uB, pB = zB + gB.z * uB, nB = UB - BB, dB = aB - jB, IB = pB - zB, GB = nB * nB + dB * dB + IB * IB, GB < SB && (SB = GB, JB = LB, QB && (QB.x = UB, QB.y = aB, QB.z = pB)));
            return JB
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetDataEnabled && (BB.facetDataEnabled = !1, BB.facetPositions = [], BB.facetNormals = [], BB.facetPartitioning = new Array, BB.facetParameters = {}, BB.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(BB, jB) {
            return this
          }
          createNormals(BB) {
            const jB = this.getVerticesData(IB.l.PositionKind),
              zB = this.dQB();
            let QB;
            return QB = this.isVerticesDataPresent(IB.l.NormalKind) ? this.getVerticesData(IB.l.NormalKind) : [], NB.e.ComputeNormals(jB, zB, QB, {
              useRightHandedSystem: this.aY().useRightHandedSystem
            }), this.setVerticesData(IB.l.NormalKind, QB, BB), this
          }
          async optimizeIndicesAsync() {
            const BB = this.dQB();
            if (!BB) return this;
            const {
              OptimizeIndices: jB
            } = await zB.e(356).then((() => zB(42687)));
            return jB(BB), this.setIndices(BB, this.getTotalVertices()), this
          }
          alignWithNormal(BB, jB) {
            jB || (jB = tB.c.Y);
            const zB = dB.h.KJ[0],
              QB = dB.h.KJ[1];
            return dB.m.CrossToRef(jB, BB, QB), dB.m.CrossToRef(BB, QB, zB), this.rotationQuaternion ? dB.d.RotationQuaternionFromAxisToRef(zB, BB, QB, this.rotationQuaternion) : dB.m.RotationFromAxisToRef(zB, BB, QB, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, yB.k)("EdgesRenderer")
          }
          enableEdgesRendering(BB, jB, zB) {
            throw (0, yB.k)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.RL.filter((BB => BB.emitter === this))
          }
        }, (() => {
          const zB = "function" === typeof Symbol && Symbol.metadata ? Object.create(rB[Symbol.metadata] ?? null) : void 0;
          jB = [MB.f.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, QB.e)(BB, null, jB, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: BB => "_ApplySkeleton" in BB,
              get: BB => BB._ApplySkeleton
            },
            metadata: zB
          }, null, sB), zB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: zB
          })
        })(), BB.OCCLUSION_TYPE_NONE = ((0, QB.g)(BB, sB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, BB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, BB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, BB.DefaultIsPickable = !0, BB
      })(),
      YB = !1;

    function VB() {
      YB || (YB = !0, (0, iB.d)("BABYLON.AbstractMesh", FB))
    }(sB = FB.prototype).createOrUpdateSubmeshesOctree ?? (sB.createOrUpdateSubmeshesOctree = (0, yB.i)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (JB = FB.prototype).getPhysicsImpostor ?? (JB.getPhysicsImpostor = (0, yB.i)("AbstractMesh", "getPhysicsImpostor")), (mB = FB.prototype).setPhysicsLinkWith ?? (mB.setPhysicsLinkWith = (0, yB.i)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(FB.prototype, "occlusionRetryCount") || Object.defineProperty(FB.prototype, "occlusionRetryCount", (0, yB.f)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(FB.prototype, "occlusionType") || Object.defineProperty(FB.prototype, "occlusionType", (0, yB.f)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(FB.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(FB.prototype, "occlusionQueryAlgorithmType", (0, yB.f)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(FB.prototype, "isOccluded") || Object.defineProperty(FB.prototype, "isOccluded", (0, yB.f)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(FB.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(FB.prototype, "isOcclusionQueryInProgress", (0, yB.f)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(FB.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(FB.prototype, "forceRenderingWhenOccluded", (0, yB.f)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(FB.prototype, "occlusionForRenderPassId") || Object.defineProperty(FB.prototype, "occlusionForRenderPassId", (0, yB.f)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(FB.prototype, "decalMap") || Object.defineProperty(FB.prototype, "decalMap", (0, yB.f)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(FB.prototype, "vY") || Object.defineProperty(FB.prototype, "vY", (0, yB.f)("AbstractMesh", "vY")), Object.getOwnPropertyDescriptor(FB.prototype, "physicsImpostor") || Object.defineProperty(FB.prototype, "physicsImpostor", (0, yB.f)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(FB.prototype, "showBoundingBox") || Object.defineProperty(FB.prototype, "showBoundingBox", (0, yB.f)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(FB.prototype, "edgesRenderer") || Object.defineProperty(FB.prototype, "edgesRenderer", (0, yB.f)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(FB.prototype, "renderOutline") || Object.defineProperty(FB.prototype, "renderOutline", (0, yB.f)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(FB.prototype, "renderOverlay") || Object.defineProperty(FB.prototype, "renderOverlay", (0, yB.f)("AbstractMesh", "renderOverlay"))
  },
  40525: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => kB
    });
    var QB = zB(37171),
      nB = zB(37379),
      dB = zB(40519),
      IB = zB(40211),
      NB = zB(40388),
      uB = zB(40529),
      UB = zB(40404),
      aB = zB(40164),
      pB = zB(38783),
      rB = zB(40089),
      sB = zB(40418),
      JB = zB(37197),
      mB = zB(40535),
      yB = zB(40125);
    class kB {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(BB) {
        this._boundingBias ? this._boundingBias.jH(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(BB) {
        const jB = new kB(kB.RandomId(), BB.aY());
        return jB.applyToMesh(BB), jB
      }
      get meshes() {
        return this._meshes
      }
      constructor(BB, jB, zB) {
        let nB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          IB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new QB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new QB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = jB || JB.c.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.wJ(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = nB, null !== IB && (this._totalVertices = IB), zB ? this.setAllVerticesData(zB, nB) : null === IB && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), dB && (this.applyToMesh(dB), dB.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      aY() {
        return this._scene
      }
      wJ() {
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
        for (const jB in this._vertexBuffers) BB.add(this._vertexBuffers[jB].getWrapperBuffer());
        BB.forEach((BB => {
          BB._rebuild()
        }))
      }
      setAllVerticesData(BB, jB) {
        BB.applyToGeometry(this, jB), this._notifyUpdate()
      }
      setVerticesData(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 ? arguments[3] : void 0;
        zB && Array.isArray(jB) && (jB = new Float32Array(jB));
        const nB = new IB.l(this._engine, jB, BB, {
          updatable: zB,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: QB,
          label: "Geometry_" + this.id + "_" + BB
        });
        this.setVerticesBuffer(nB)
      }
      removeVerticesData(BB) {
        this._vertexBuffers[BB] && (this._vertexBuffers[BB].dispose(), delete this._vertexBuffers[BB]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const nB = BB.getKind();
        this._vertexBuffers[nB] && zB && this._vertexBuffers[nB].dispose(), BB._buffer && BB._ownsBuffer && BB._buffer._increaseReferences(), this._vertexBuffers[nB] = BB;
        const dB = this._meshes,
          NB = dB.length;
        if (nB === IB.l.PositionKind) {
          this._totalVertices = jB ?? BB._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : BB.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const zB = this._extend && this._extend.minimum || new QB.m(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            nB = this._extend && this._extend.maximum || new QB.m(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let BB = 0; BB < NB; BB++) {
            const jB = dB[BB];
            jB.buildBoundingInfo(zB, nB), jB._createGlobalSubMesh(jB.isUnIndexed), jB.computeWorldMatrix(!0), jB.synchronizeInstances()
          }
        }
        this._notifyUpdate(nB)
      }
      updateVerticesDataDirectly(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nB = this.getVertexBuffer(BB);
        nB && (nB.updateDirectly(jB, zB, QB), this._notifyUpdate(BB))
      }
      updateVerticesData(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const QB = this.getVertexBuffer(BB);
        QB && (QB.update(jB), BB === IB.l.PositionKind && this._updateBoundingInfo(zB, jB), this._notifyUpdate(BB))
      }
      _updateBoundingInfo(BB, jB) {
        if (BB && this._updateExtend(jB), this._resetPointsArrayCache(), BB) {
          const BB = this._meshes;
          for (const jB of BB) {
            jB.hasBoundingInfo ? jB.rV().reConstruct(this._extend.minimum, this._extend.maximum) : jB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const BB = jB.cL;
            for (const jB of BB) jB.refreshBoundingInfo()
          }
        }
      }
      _bind(BB, jB, zB, QB) {
        if (!BB) return;
        void 0 === jB && (jB = this._indexBuffer);
        const nB = this.getVertexBuffers();
        if (!nB) return;
        if (jB != this._indexBuffer || !this._vertexArrayObjects && !QB) return void this._engine.bindBuffers(nB, jB, BB, zB);
        const dB = QB || this._vertexArrayObjects,
          IB = this._engine;
        dB[BB.key] || (dB[BB.key] = IB.recordVertexArrayObject(nB, jB, BB, zB)), IB.bindVertexArrayObject(dB[BB.key], jB)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(BB, jB, zB) {
        const QB = this.getVertexBuffer(BB);
        return QB ? QB.getFloatData(this._totalVertices, zB || jB && 1 !== this._meshes.length) : null
      }
      copyVerticesData(BB, jB) {
        const zB = this.getVertexBuffer(BB);
        if (!zB) return;
        jB[BB] || (jB[BB] = new Float32Array(this._totalVertices * zB.getSize()));
        const QB = zB.getData();
        QB && (0, yB.c)(QB, zB.getSize(), zB.type, zB.byteOffset, zB.byteStride, zB.normalized, this._totalVertices, jB[BB])
      }
      isVertexBufferUpdatable(BB) {
        const jB = this._vertexBuffers[BB];
        return !!jB && jB.isUpdatable()
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
        let jB;
        if (!this._vertexBuffers && this._delayInfo)
          for (jB in this._delayInfo) BB.push(jB);
        else
          for (jB in this._vertexBuffers) BB.push(jB);
        return BB
      }
      updateIndices(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const QB = BB.length !== this._indices.length;
            if (zB || (this._indices = BB.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, BB, jB), QB)
              for (const BB of this._meshes) BB._createGlobalSubMesh(!0)
          } else this.setIndices(BB, null, !0)
      }
      setIndexBuffer(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = BB, this._totalVertices = jB, this._totalIndices = zB, BB.is32Bits = null === QB ? jB > 65535 : QB;
        for (const nB of this._meshes) nB._createGlobalSubMesh(!0), nB.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = BB, this._indexBufferIsUpdatable = zB, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, zB, "Geometry_" + this.id + "_IndexBuffer")), void 0 != jB && (this._totalVertices = jB);
        for (const nB of this._meshes) nB._createGlobalSubMesh(!QB), nB.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      dQB(BB, jB) {
        if (!this.isReady()) return null;
        const zB = this._indices;
        return jB || BB && 1 !== this._meshes.length ? zB.slice() : zB
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        BB && this._vertexArrayObjects && this._vertexArrayObjects[BB.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[BB.key]), delete this._vertexArrayObjects[BB.key])
      }
      releaseForMesh(BB, jB) {
        const zB = this._meshes,
          QB = zB.indexOf(BB); - 1 !== QB && (zB.splice(QB, 1), this._vertexArrayObjects && BB._invalidateInstanceVertexArrayObject(), BB._geometry = null, 0 === zB.length && jB && this.dispose())
      }
      applyToMesh(BB) {
        if (BB._geometry === this) return;
        const jB = BB._geometry;
        jB && jB.releaseForMesh(BB), this._vertexArrayObjects && BB._invalidateInstanceVertexArrayObject();
        const zB = this._meshes;
        BB._geometry = this, BB._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), zB.push(BB), this.isReady() ? this._applyToMesh(BB) : this._boundingInfo && BB.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!BB && (BB = this.getVerticesData(IB.l.PositionKind), !BB)) return;
          this._extend = (0, sB.e)(BB, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(BB) {
        for (const jB in this._vertexBuffers) {
          const zB = this._vertexBuffers[jB];
          zB._buffer.getBuffer() || zB.create(), jB === IB.l.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), BB._syncGeometryWithMorphTargetManager(), BB.synchronizeInstances()
      }
      _notifyUpdate(BB) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, BB), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const jB of this._meshes) jB._markSubMeshesAsAttributesDirty()
      }
      load(BB, jB) {
        2 !== this.delayLoadState && (this.isReady() ? jB && jB() : (this.delayLoadState = 2, this._queueLoad(BB, jB)))
      }
      _queueLoad(BB, jB) {
        this.delayLoadingFile && (BB.addPendingData(this), (async () => {
          try {
            const zB = await BB._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void BB.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(zB), this), this.delayLoadState = 1, this._delayInfo = [], BB.removePendingData(this);
            const QB = this._meshes,
              nB = QB.length;
            for (let BB = 0; BB < nB; BB++) this._applyToMesh(QB[BB]);
            jB && jB()
          } catch (zB) {
            BB.removePendingData(this), BB.aE || pB.c.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${zB}`)
          }
        })())
      }
      toLeftHanded() {
        const BB = this.dQB(!1);
        if (null != BB && BB.length > 0) {
          for (let jB = 0; jB < BB.length; jB += 3) {
            const zB = BB[jB + 0];
            BB[jB + 0] = BB[jB + 2], BB[jB + 2] = zB
          }
          this.setIndices(BB)
        }
        const jB = this.getVerticesData(IB.l.PositionKind, !1);
        if (null != jB && jB.length > 0) {
          for (let BB = 0; BB < jB.length; BB += 3) jB[BB + 2] = -jB[BB + 2];
          this.setVerticesData(IB.l.PositionKind, jB, !1)
        }
        const zB = this.getVerticesData(IB.l.NormalKind, !1);
        if (null != zB && zB.length > 0) {
          for (let BB = 0; BB < zB.length; BB += 3) zB[BB + 2] = -zB[BB + 2];
          this.setVerticesData(IB.l.NormalKind, zB, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const BB = this.getVerticesData(IB.l.PositionKind);
        if (!BB || 0 === BB.length) return !1;
        for (let jB = 3 * this._positionsCache.length, zB = this._positionsCache.length; jB < BB.length; jB += 3, ++zB) this._positionsCache[zB] = QB.m.FromArray(BB, jB);
        for (let jB = 0, zB = 0; jB < BB.length; jB += 3, ++zB) this._positionsCache[zB].set(BB[0 + jB], BB[1 + jB], BB[2 + jB]);
        return this._positionsCache.length = BB.length / 3, this._positions = this._positionsCache, !0
      }
      aE() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const zB in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[zB]);
          this._vertexArrayObjects = {};
          const BB = this._meshes,
            jB = BB.length;
          for (let zB = 0; zB < jB; zB++) BB[zB]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const BB = this._meshes,
          jB = BB.length;
        let zB;
        for (zB = 0; zB < jB; zB++) this.releaseForMesh(BB[zB]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const QB in this._vertexBuffers) this._vertexBuffers[QB].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const BB = this._parentContainer.geometries.indexOf(this);
          BB > -1 && this._parentContainer.geometries.splice(BB, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(BB) {
        const jB = new kB(BB, this._scene),
          zB = this.dQB(void 0, !0);
        zB && jB.setIndices(zB);
        let QB, nB = !1;
        for (QB in this._vertexBuffers) {
          const BB = this.getVertexBuffer(QB),
            zB = BB.getData();
          if (!zB) continue;
          const dB = BB.isUpdatable(),
            NB = BB.getSize(),
            {
              type: uB,
              byteOffset: UB,
              byteStride: aB,
              normalized: pB
            } = BB;
          nB = nB || dB;
          let rB = this._totalVertices;
          if (BB.getIsInstanced()) {
            let BB;
            BB = zB instanceof Array ? 4 * zB.length : zB.byteLength, rB = BB / aB
          }
          const sB = (0, yB.t)(zB, NB, uB, UB, aB, rB, !0),
            JB = new IB.l(this._engine, sB, QB, {
              updatable: dB,
              useBytes: !1,
              stride: NB,
              size: NB,
              offset: 0,
              type: uB,
              normalized: pB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            });
          jB.setVerticesBuffer(JB, rB)
        }
        for (QB in jB._updatable = nB, jB.delayLoadState = this.delayLoadState, jB.delayLoadingFile = this.delayLoadingFile, jB._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) jB._delayInfo = jB._delayInfo || [], jB._delayInfo.push(QB);
        return jB._boundingInfo = new UB.c(this._extend.minimum, this._extend.maximum), jB
      }
      serialize() {
        const BB = {};
        return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, rB.d && rB.d.HasTags(this) && (BB.tags = rB.d.GetTags(this)), BB
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
        return this.isVerticesDataPresent(IB.l.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(IB.l.PositionKind)), this.isVertexBufferUpdatable(IB.l.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(IB.l.NormalKind) && (BB.normals = this._toNumberArray(this.getVerticesData(IB.l.NormalKind)), this.isVertexBufferUpdatable(IB.l.NormalKind) && (BB.normalsUpdatable = !0)), this.isVerticesDataPresent(IB.l.TangentKind) && (BB.tangents = this._toNumberArray(this.getVerticesData(IB.l.TangentKind)), this.isVertexBufferUpdatable(IB.l.TangentKind) && (BB.tangentsUpdatable = !0)), this.isVerticesDataPresent(IB.l.UVKind) && (BB.uvs = this._toNumberArray(this.getVerticesData(IB.l.UVKind)), this.isVertexBufferUpdatable(IB.l.UVKind) && (BB.uvsUpdatable = !0)), this.isVerticesDataPresent(IB.l.UV2Kind) && (BB.uvs2 = this._toNumberArray(this.getVerticesData(IB.l.UV2Kind)), this.isVertexBufferUpdatable(IB.l.UV2Kind) && (BB.uvs2Updatable = !0)), this.isVerticesDataPresent(IB.l.UV3Kind) && (BB.uvs3 = this._toNumberArray(this.getVerticesData(IB.l.UV3Kind)), this.isVertexBufferUpdatable(IB.l.UV3Kind) && (BB.uvs3Updatable = !0)), this.isVerticesDataPresent(IB.l.UV4Kind) && (BB.uvs4 = this._toNumberArray(this.getVerticesData(IB.l.UV4Kind)), this.isVertexBufferUpdatable(IB.l.UV4Kind) && (BB.uvs4Updatable = !0)), this.isVerticesDataPresent(IB.l.UV5Kind) && (BB.uvs5 = this._toNumberArray(this.getVerticesData(IB.l.UV5Kind)), this.isVertexBufferUpdatable(IB.l.UV5Kind) && (BB.uvs5Updatable = !0)), this.isVerticesDataPresent(IB.l.UV6Kind) && (BB.uvs6 = this._toNumberArray(this.getVerticesData(IB.l.UV6Kind)), this.isVertexBufferUpdatable(IB.l.UV6Kind) && (BB.uvs6Updatable = !0)), this.isVerticesDataPresent(IB.l.ColorKind) && (BB.colors = this._toNumberArray(this.getVerticesData(IB.l.ColorKind)), this.isVertexBufferUpdatable(IB.l.ColorKind) && (BB.colorsUpdatable = !0)), this.isVerticesDataPresent(IB.l.MatricesIndicesKind) && (BB.matricesIndices = this._toNumberArray(this.getVerticesData(IB.l.MatricesIndicesKind)), BB.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(IB.l.MatricesIndicesKind) && (BB.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(IB.l.MatricesWeightsKind) && (BB.matricesWeights = this._toNumberArray(this.getVerticesData(IB.l.MatricesWeightsKind)), this.isVertexBufferUpdatable(IB.l.MatricesWeightsKind) && (BB.matricesWeightsUpdatable = !0)), BB.indices = this._toNumberArray(this.dQB()), BB
      }
      static ExtractFromMesh(BB, jB) {
        const zB = BB._geometry;
        return zB ? zB.copy(jB) : null
      }
      static RandomId() {
        return aB.i.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(BB, jB) {
        for (let zB = 0; zB < jB.geometries.length; zB++)
          if (jB.geometries[zB]._loadedUniqueId === BB) return jB.geometries[zB];
        return null
      }
      static _ImportGeometry(BB, jB) {
        const zB = jB.aY(),
          QB = BB.geometryUniqueId,
          dB = BB.geometryId;
        if (QB || dB) {
          const BB = QB ? this._GetGeometryByLoadedUniqueId(QB, zB) : zB.getGeometryById(dB);
          BB && BB.applyToMesh(jB)
        } else if (BB instanceof ArrayBuffer) {
          const zB = jB._binaryInfo;
          if (zB.positionsAttrDesc && zB.positionsAttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.positionsAttrDesc.offset, zB.positionsAttrDesc.count);
            jB.setVerticesData(IB.l.PositionKind, QB, !1)
          }
          if (zB.normalsAttrDesc && zB.normalsAttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.normalsAttrDesc.offset, zB.normalsAttrDesc.count);
            jB.setVerticesData(IB.l.NormalKind, QB, !1)
          }
          if (zB.tangetsAttrDesc && zB.tangetsAttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.tangetsAttrDesc.offset, zB.tangetsAttrDesc.count);
            jB.setVerticesData(IB.l.TangentKind, QB, !1)
          }
          if (zB.uvsAttrDesc && zB.uvsAttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.uvsAttrDesc.offset, zB.uvsAttrDesc.count);
            if (mB.d)
              for (let BB = 1; BB < QB.length; BB += 2) QB[BB] = 1 - QB[BB];
            jB.setVerticesData(IB.l.UVKind, QB, !1)
          }
          if (zB.uvs2AttrDesc && zB.uvs2AttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.uvs2AttrDesc.offset, zB.uvs2AttrDesc.count);
            if (mB.d)
              for (let BB = 1; BB < QB.length; BB += 2) QB[BB] = 1 - QB[BB];
            jB.setVerticesData(IB.l.UV2Kind, QB, !1)
          }
          if (zB.uvs3AttrDesc && zB.uvs3AttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.uvs3AttrDesc.offset, zB.uvs3AttrDesc.count);
            if (mB.d)
              for (let BB = 1; BB < QB.length; BB += 2) QB[BB] = 1 - QB[BB];
            jB.setVerticesData(IB.l.UV3Kind, QB, !1)
          }
          if (zB.uvs4AttrDesc && zB.uvs4AttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.uvs4AttrDesc.offset, zB.uvs4AttrDesc.count);
            if (mB.d)
              for (let BB = 1; BB < QB.length; BB += 2) QB[BB] = 1 - QB[BB];
            jB.setVerticesData(IB.l.UV4Kind, QB, !1)
          }
          if (zB.uvs5AttrDesc && zB.uvs5AttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.uvs5AttrDesc.offset, zB.uvs5AttrDesc.count);
            if (mB.d)
              for (let BB = 1; BB < QB.length; BB += 2) QB[BB] = 1 - QB[BB];
            jB.setVerticesData(IB.l.UV5Kind, QB, !1)
          }
          if (zB.uvs6AttrDesc && zB.uvs6AttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.uvs6AttrDesc.offset, zB.uvs6AttrDesc.count);
            if (mB.d)
              for (let BB = 1; BB < QB.length; BB += 2) QB[BB] = 1 - QB[BB];
            jB.setVerticesData(IB.l.UV6Kind, QB, !1)
          }
          if (zB.colorsAttrDesc && zB.colorsAttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.colorsAttrDesc.offset, zB.colorsAttrDesc.count);
            jB.setVerticesData(IB.l.ColorKind, QB, !1, zB.colorsAttrDesc.stride)
          }
          if (zB.matricesIndicesAttrDesc && zB.matricesIndicesAttrDesc.count > 0) {
            const QB = new Int32Array(BB, zB.matricesIndicesAttrDesc.offset, zB.matricesIndicesAttrDesc.count),
              nB = [];
            for (let BB = 0; BB < QB.length; BB++) {
              const jB = QB[BB];
              nB.push(255 & jB), nB.push((65280 & jB) >> 8), nB.push((16711680 & jB) >> 16), nB.push(jB >> 24 & 255)
            }
            jB.setVerticesData(IB.l.MatricesIndicesKind, nB, !1)
          }
          if (zB.matricesIndicesExtraAttrDesc && zB.matricesIndicesExtraAttrDesc.count > 0) {
            const QB = new Int32Array(BB, zB.matricesIndicesExtraAttrDesc.offset, zB.matricesIndicesExtraAttrDesc.count),
              nB = [];
            for (let BB = 0; BB < QB.length; BB++) {
              const jB = QB[BB];
              nB.push(255 & jB), nB.push((65280 & jB) >> 8), nB.push((16711680 & jB) >> 16), nB.push(jB >> 24 & 255)
            }
            jB.setVerticesData(IB.l.MatricesIndicesExtraKind, nB, !1)
          }
          if (zB.matricesWeightsAttrDesc && zB.matricesWeightsAttrDesc.count > 0) {
            const QB = new Float32Array(BB, zB.matricesWeightsAttrDesc.offset, zB.matricesWeightsAttrDesc.count);
            jB.setVerticesData(IB.l.MatricesWeightsKind, QB, !1)
          }
          if (zB.indicesAttrDesc && zB.indicesAttrDesc.count > 0) {
            const QB = new Int32Array(BB, zB.indicesAttrDesc.offset, zB.indicesAttrDesc.count);
            jB.setIndices(QB, null)
          }
          if (zB.subMeshesAttrDesc && zB.subMeshesAttrDesc.count > 0) {
            const QB = new Int32Array(BB, zB.subMeshesAttrDesc.offset, 5 * zB.subMeshesAttrDesc.count);
            jB.cL = [];
            for (let BB = 0; BB < zB.subMeshesAttrDesc.count; BB++) {
              const zB = QB[5 * BB + 0],
                nB = QB[5 * BB + 1],
                dB = QB[5 * BB + 2],
                IB = QB[5 * BB + 3],
                uB = QB[5 * BB + 4];
              NB.d.AddToMesh(zB, nB, dB, IB, uB, jB)
            }
          }
        } else if (BB.positions && BB.normals && BB.indices) {
          if (jB.setVerticesData(IB.l.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), jB.setVerticesData(IB.l.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && jB.setVerticesData(IB.l.TangentKind, BB.tangents, BB.tangents._updatable || BB.tangentsUpdatable), BB.uvs && jB.setVerticesData(IB.l.UVKind, BB.uvs, BB.uvs._updatable || BB.uvsUpdatable), BB.uvs2 && jB.setVerticesData(IB.l.UV2Kind, BB.uvs2, BB.uvs2._updatable || BB.uvs2Updatable), BB.uvs3 && jB.setVerticesData(IB.l.UV3Kind, BB.uvs3, BB.uvs3._updatable || BB.uvs3Updatable), BB.uvs4 && jB.setVerticesData(IB.l.UV4Kind, BB.uvs4, BB.uvs4._updatable || BB.uvs4Updatable), BB.uvs5 && jB.setVerticesData(IB.l.UV5Kind, BB.uvs5, BB.uvs5._updatable || BB.uvs5Updatable), BB.uvs6 && jB.setVerticesData(IB.l.UV6Kind, BB.uvs6, BB.uvs6._updatable || BB.uvs6Updatable), BB.colors && jB.setVerticesData(IB.l.ColorKind, nB.g.CheckColors4(BB.colors, BB.positions.length / 3), BB.colors._updatable), BB.matricesIndices)
            if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, jB.setVerticesData(IB.l.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
            else {
              const zB = [];
              for (let jB = 0; jB < BB.matricesIndices.length; jB++) {
                const QB = BB.matricesIndices[jB];
                zB.push(255 & QB), zB.push((65280 & QB) >> 8), zB.push((16711680 & QB) >> 16), zB.push(QB >> 24 & 255)
              }
              jB.setVerticesData(IB.l.MatricesIndicesKind, zB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
            } if (BB.matricesIndicesExtra)
            if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, jB.setVerticesData(IB.l.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable);
            else {
              const zB = [];
              for (let jB = 0; jB < BB.matricesIndicesExtra.length; jB++) {
                const QB = BB.matricesIndicesExtra[jB];
                zB.push(255 & QB), zB.push((65280 & QB) >> 8), zB.push((16711680 & QB) >> 16), zB.push(QB >> 24 & 255)
              }
              jB.setVerticesData(IB.l.MatricesIndicesExtraKind, zB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
            } BB.matricesWeights && (kB._CleanMatricesWeights(BB, jB), jB.setVerticesData(IB.l.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && jB.setVerticesData(IB.l.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matricesWeights._updatable), jB.setIndices(BB.indices, null)
        }
        if (BB.cL) {
          jB.cL = [];
          for (let zB = 0; zB < BB.cL.length; zB++) {
            const QB = BB.cL[zB];
            NB.d.AddToMesh(QB.materialIndex, QB.verticesStart, QB.verticesCount, QB.indexStart, QB.indexCount, jB)
          }
        }
        jB._shouldGenerateFlatShading && (jB.convertToFlatShadedMesh(), jB._shouldGenerateFlatShading = !1), jB.computeWorldMatrix(!0), zB.onMeshImportedObservable.notifyObservers(jB)
      }
      static _CleanMatricesWeights(BB, jB) {
        const zB = .001;
        if (!uB.c.CleanBoneMatrixWeights) return;
        let QB;
        if (!(BB.skeletonId > -1)) return;
        {
          const zB = jB.aY().getLastSkeletonById(BB.skeletonId);
          if (!zB) return;
          QB = zB.bones.length
        }
        const nB = jB.getVerticesData(IB.l.MatricesIndicesKind),
          dB = jB.getVerticesData(IB.l.MatricesIndicesExtraKind),
          NB = BB.matricesWeights,
          UB = BB.matricesWeightsExtra,
          aB = BB.numBoneInfluencer,
          pB = NB.length;
        for (let IB = 0; IB < pB; IB += 4) {
          let BB = 0,
            jB = -1;
          for (let QB = 0; QB < 4; QB++) {
            const nB = NB[IB + QB];
            BB += nB, nB < zB && jB < 0 && (jB = QB)
          }
          if (UB)
            for (let QB = 0; QB < 4; QB++) {
              const nB = UB[IB + QB];
              BB += nB, nB < zB && jB < 0 && (jB = QB + 4)
            }
          if ((jB < 0 || jB > aB - 1) && (jB = aB - 1), BB > zB) {
            const jB = 1 / BB;
            for (let BB = 0; BB < 4; BB++) NB[IB + BB] *= jB;
            if (UB)
              for (let BB = 0; BB < 4; BB++) UB[IB + BB] *= jB
          } else jB >= 4 ? (UB[IB + jB - 4] = 1 - BB, dB[IB + jB - 4] = QB) : (NB[IB + jB] = 1 - BB, nB[IB + jB] = QB)
        }
        jB.setVerticesData(IB.l.MatricesIndicesKind, nB), BB.matricesWeightsExtra && jB.setVerticesData(IB.l.MatricesIndicesExtraKind, dB)
      }
      static Parse(BB, jB, zB) {
        const nB = new kB(BB.id, jB, void 0, BB.updatable);
        return nB._loadedUniqueId = BB.uniqueId, rB.d && rB.d.AddTagsTo(nB, BB.tags), BB.delayLoadingFile ? (nB.delayLoadState = 4, nB.delayLoadingFile = zB + BB.delayLoadingFile, nB._boundingInfo = new UB.c(QB.m.FromArray(BB.boundingBoxMinimum), QB.m.FromArray(BB.boundingBoxMaximum)), nB._delayInfo = [], BB.hasUVs && nB._delayInfo.push(IB.l.UVKind), BB.hasUVs2 && nB._delayInfo.push(IB.l.UV2Kind), BB.hasUVs3 && nB._delayInfo.push(IB.l.UV3Kind), BB.hasUVs4 && nB._delayInfo.push(IB.l.UV4Kind), BB.hasUVs5 && nB._delayInfo.push(IB.l.UV5Kind), BB.hasUVs6 && nB._delayInfo.push(IB.l.UV6Kind), BB.hasColors && nB._delayInfo.push(IB.l.ColorKind), BB.hasMatricesIndices && nB._delayInfo.push(IB.l.MatricesIndicesKind), BB.hasMatricesWeights && nB._delayInfo.push(IB.l.MatricesWeightsKind), nB._delayLoadingFunction = dB.e.ImportVertexData) : dB.e.ImportVertexData(BB, nB), jB.pushGeometry(nB, !0), nB
      }
    }
  },
  40570: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => pB,
      h: () => JB
    });
    var QB = zB(37171),
      nB = zB(38783),
      dB = zB(40539),
      IB = zB(40504),
      NB = zB(38780),
      uB = zB(40546),
      UB = zB(40211),
      aB = zB(37222);
    class pB extends dB.e {
      constructor(BB, jB) {
        super(BB, jB.aY()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, jB.T_(this), this._sourceMesh = jB, this._unIndexed = jB._unIndexed, this.position.jH(jB.position), this.rotation.jH(jB.rotation), this.pp.jH(jB.pp), jB.rotationQuaternion && (this.rotationQuaternion = jB.rotationQuaternion.clone()), this.animations = jB.animations.slice();
        for (const zB of jB.getAnimationRanges()) null != zB && this.createAnimationRange(zB.name, zB.from, zB.to);
        if (this.infiniteDistance = jB.infiniteDistance, this.setPivotMatrix(jB.getPivotMatrix()), jB.skeleton || jB.morphTargetManager || !jB.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const BB = jB.rV();
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
        this._sourceMesh?.receiveShadows !== BB && nB.c.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(BB) {
        this._sourceMesh?.material !== BB && nB.c.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(BB) {
        this._sourceMesh?.visibility !== BB && nB.c.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(BB) {
        this._sourceMesh?.skeleton !== BB && nB.c.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(BB) {
        this._sourceMesh && BB !== this._sourceMesh.renderingGroupId && nB.c.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(BB) {
        this._sourceMesh && BB !== this._sourceMesh.meshBlendingTag && nB.c.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get vQB() {
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
      getVerticesData(BB, jB, zB) {
        return this._sourceMesh.getVerticesData(BB, jB, zB)
      }
      copyVerticesData(BB, jB) {
        this._sourceMesh.copyVerticesData(BB, jB)
      }
      getVertexBuffer(BB, jB) {
        return this._sourceMesh.getVertexBuffer(BB, jB)
      }
      setVerticesData(BB, jB, zB, QB) {
        return this.vQB && this.vQB.setVerticesData(BB, jB, zB, QB), this.vQB
      }
      updateVerticesData(BB, jB, zB, QB) {
        return this.vQB && this.vQB.updateVerticesData(BB, jB, zB, QB), this.vQB
      }
      setIndices(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.vQB && this.vQB.setIndices(BB, jB), this.vQB
      }
      isVerticesDataPresent(BB) {
        return this._sourceMesh.isVerticesDataPresent(BB)
      }
      dQB() {
        return this._sourceMesh.dQB()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let BB, jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.rV().isLocked) return this;
        BB = "object" === typeof jB ? jB : {
          applySkeleton: jB,
          applyMorph: zB
        };
        const QB = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, UB.l.PositionKind), QB), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(BB, jB) {
        if (super._activate(BB, jB), this._sourceMesh.cL || nB.c.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, BB), jB) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== uB.f.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new QB.c);
          const BB = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, QB.h.KJ[7].jH(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.jH(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.jH(QB.h.KJ[7]), this._currentLOD._masterMesh = BB, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get rY() {
        return !0
      }
      getLOD(BB) {
        if (!BB) return this;
        const jB = this.vQB.getLODLevels();
        if (jB && 0 !== jB.length) {
          const jB = this.rV();
          this._currentLOD = this.vQB.getLOD(BB, jB.fQB)
        } else this._currentLOD = this.vQB;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(BB) {
        return this.vQB._preActivateForIntermediateRendering(BB)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.cL)
          for (let BB = 0; BB < this._sourceMesh.cL.length; BB++) this._sourceMesh.cL[BB].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.rV().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(BB);
        if (NB.e.DeepCopy(this, QB, ["name", "cL", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "vQB", "rY", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "bQB", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "XIB", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), jB && (QB.parent = jB), !zB)
          for (let nB = 0; nB < this.aY().meshes.length; nB++) {
            const BB = this.aY().meshes[nB];
            BB.parent === this && BB.clone(BB.name, QB)
          }
        return QB.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(QB), QB
      }
      dispose(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.e_(this), super.dispose(BB, jB)
      }
      _serializeAsParent(BB) {
        super._serializeAsParent(BB), BB.parentId = this._sourceMesh.uniqueId, BB.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0, jB && jB.newSourcedMesh);
        QB && zB && zB(this, QB);
        for (const nB of this.getChildTransformNodes(!0)) nB.instantiateHierarchy(QB, jB, zB);
        return QB
      }
    }
    let rB = !1;

    function sB(BB, jB, zB, QB, nB) {
      for (let dB = 0; dB < jB.length; dB++) {
        const IB = BB[jB[dB]] ?? 0,
          NB = nB + zB[dB];
        IB.toArray ? IB.toArray(QB, NB) : IB.copyToArray ? IB.copyToArray(QB, NB) : QB[NB] = IB
      }
    }

    function JB() {
      rB || (rB = !0, IB.b._instancedMeshFactory = (BB, jB) => {
        const zB = new pB(BB, jB);
        if (jB.vY) {
          zB.vY = {};
          for (const BB in jB.vY) zB.vY[BB] = jB.vY[BB]
        }
        return zB
      }, IB.b.prototype.bY = function(BB, jB) {
        if (!this.vY) {
          this.vY = {};
          for (const BB of this.instances) BB.vY = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.wJ().getCaps().vertexArrayObject ? {} : void 0
        }), this.vY[BB] = null, this._userInstancedBuffersStorage.strides[BB] = jB;
        const zB = this._userInstancedBuffersStorage;
        zB.interleavedKinds = [], zB.interleavedOffsets = [], zB.interleavedRowStride = 0;
        for (const QB in zB.strides) zB.interleavedKinds.push(QB), zB.interleavedOffsets.push(zB.interleavedRowStride), zB.interleavedRowStride += zB.strides[QB];
        zB.interleavedData = new Float32Array(32 * zB.interleavedRowStride);
        for (const QB in zB.interleavedBuffers) zB.interleavedBuffers[QB].buffer.dispose();
        zB.interleavedBuffers = {}, zB.vertexBuffers[BB] = null;
        for (const QB of this.instances) QB.vY[BB] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, IB.b.prototype._processInstancedBuffers = function(BB, jB) {
        const zB = this._userInstancedBuffersStorage,
          QB = zB.interleavedRowStride;
        if (!QB) return;
        const nB = BB ? BB.length : 0,
          dB = (nB + 1) * QB;
        let IB = zB.interleavedData;
        if (IB.length < dB) {
          let BB = IB.length;
          for (; BB < dB;) BB *= 2;
          IB = zB.interleavedData = new Float32Array(BB)
        }
        const NB = zB.interleavedKinds,
          uB = zB.interleavedOffsets;
        let aB = 0;
        jB && (sB(this.vY, NB, uB, IB, aB), aB += QB);
        for (let UB = 0; UB < nB; UB++) sB(BB[UB].vY, NB, uB, IB, aB), aB += QB;
        let pB = "shared",
          rB = zB.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (pB = this._instanceDataStorage.engine.currentRenderPassId, zB.renderPasses || (zB.renderPasses = {}), zB.renderPasses[pB] || (zB.renderPasses[pB] = {}), rB = zB.renderPasses[pB]);
        const JB = zB.interleavedBuffers[pB];
        let mB = !JB || JB.data !== IB;
        for (let UB = 0; !mB && UB < NB.length; UB++) mB = !rB[NB[UB]];
        if (!mB) return void JB.buffer.updateDirectly(IB, 0);
        JB?.buffer.dispose();
        const yB = new UB.e(this.wJ(), IB, !0, QB, !1, !0);
        for (let UB = 0; UB < NB.length; UB++) {
          const BB = NB[UB],
            jB = yB.createVertexBuffer(BB, uB[UB], zB.strides[BB]);
          jB.hashCode += jB.byteOffset * 2 ** 24, rB[BB] = jB
        }
        zB.interleavedBuffers[pB] = {
          buffer: yB,
          data: IB
        }, this._invalidateInstanceVertexArrayObject()
      }, IB.b.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const BB in this._userInstancedBuffersStorage.vertexArrayObjects) this.wJ().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[BB]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, IB.b.prototype._disposeInstanceSpecificData = function() {
        for (const jB in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[jB].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const jB in this.vY) this._userInstancedBuffersStorage.vertexBuffers[jB] && this._userInstancedBuffersStorage.vertexBuffers[jB].dispose();
        const BB = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (BB) {
          for (const jB in BB) BB[jB].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.vY = {}
      }, (0, aB.d)("BABYLON.InstancedMesh", pB))
    }
  },
  40504: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => vB,
      f: () => OB,
      g: () => lB
    });
    var QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB = zB(37202),
      GB = zB(40164),
      LB = zB(40108),
      gB = zB(38780),
      tB = zB(40089),
      SB = zB(40512),
      MB = zB(40301),
      EB = zB(37171),
      iB = zB(37379),
      qB = zB(40306),
      fB = zB(40211),
      oB = zB(40519),
      HB = zB(40525),
      DB = zB(40539),
      FB = zB(40388),
      YB = zB(40380),
      VB = zB(40475),
      hB = zB(40555),
      XB = zB(40529),
      ZB = zB(40086),
      AB = zB(38783),
      TB = zB(37222),
      PB = zB(39965),
      WB = zB(40247);
    class eB {
      constructor(BB, jB) {
        this.distanceOrScreenCoverage = BB, this.mesh = jB
      }
    }
    class lB {}
    class wB {
      constructor() {
        this.batchCache = new KB(this), this.batchCacheReplacementModeInFrozenMode = new KB(this), this.instancesBufferSize = 2048
      }
    }
    class xB {
      constructor() {
        this.renderPasses = {}
      }
    }
    class KB {
      constructor(BB) {
        this.parent = BB, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class CB {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class cB {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const bB = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class vB extends DB.e {
      static _GetDefaultSideOrientation(BB) {
        return BB || vB.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (BB && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(fB.l.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(fB.l.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = BB, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new kB.c), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new kB.c), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new kB.c), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new kB.c), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new kB.c), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(BB) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(BB)
      }
      get bQB() {
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
      _copySource(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const nB = this.aY();
        if (BB._geometry && BB._geometry.applyToMesh(this), gB.e.DeepCopy(BB, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "bQB", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "rY", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "XIB", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = BB, nB.useClonedMeshMap && (BB._internalMeshDataInfo.meshMap || (BB._internalMeshDataInfo.meshMap = {}), BB._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = BB._originalBuilderSideOrientation, this._creationDataStorage = BB._creationDataStorage, BB._ranges) {
          const jB = BB._ranges;
          for (const BB in jB) Object.prototype.hasOwnProperty.call(jB, BB) && jB[BB] && this.createAnimationRange(BB, jB[BB].from, jB[BB].to)
        }
        if (BB.metadata && BB.metadata.clone ? this.metadata = BB.metadata.clone() : this.metadata = BB.metadata, this._internalMetadata = BB._internalMetadata, this.meshBlendingTag = BB.meshBlendingTag, tB.d && tB.d.HasTags(BB) && tB.d.AddTagsTo(this, tB.d.GetTags(BB, !0)), this.mH(BB.isEnabled(!1)), this.parent = BB.parent, this.setPivotMatrix(BB.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + BB.id, this.material = BB.material, !jB) {
          const nB = BB.getDescendants(!0);
          for (let BB = 0; BB < nB.length; BB++) {
            const dB = nB[BB];
            dB._isMesh ? (bB.parent = this, bB.doNotCloneChildren = jB, bB.clonePhysicsImpostor = zB, bB.cloneThinInstances = QB, dB.clone(this.name + "." + dB.name, bB)) : dB.clone && dB.clone(this.name + "." + dB.name, this)
          }
        }
        if (BB.morphTargetManager && (this.morphTargetManager = BB.morphTargetManager), (0, PB.c)(nB.getPhysicsEngine)) {
          const jB = nB.getPhysicsEngine();
          if (zB && jB)
            if (1 === jB.getPluginVersion()) {
              const zB = jB.getImpostorForPhysicsObject(BB);
              zB && (this.physicsImpostor = zB.clone(this))
            } else 2 === jB.getPluginVersion() && BB.physicsBody && BB.physicsBody.clone(this)
        }
        for (let dB = 0; dB < nB.RL.length; dB++) {
          const jB = nB.RL[dB];
          jB.emitter === BB && jB.clone(jB.name, this)
        }
        if (this.skeleton = BB.skeleton, QB && (BB._thinInstanceDataStorage.matrixData ? (this.i5("matrix", new Float32Array(BB._thinInstanceDataStorage.matrixData), 16, !BB._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = BB._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = BB._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = BB._thinInstanceDataStorage.matrixBufferSize, BB._userThinInstanceBuffersStorage)) {
          const jB = BB._userThinInstanceBuffersStorage;
          for (const BB in jB.data) this.i5(BB, new Float32Array(jB.data[BB]), jB.strides[BB], !jB.vertexBuffers?.[BB]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[BB] = jB.sizes[BB]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(BB) {
        let jB, zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          dB = arguments.length > 4 ? arguments[4] : void 0,
          IB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(BB, zB), this._internalMeshDataInfo = new cB, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new CB, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = vB.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, zB = this.aY(), this._instanceDataStorage = new xB, this._instanceDataStorage.engine = zB.wJ(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new wB), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (BB, jB, zB) => {
          BB && zB && (this._uniformBuffer ? this.transferToEffect(jB) : zB.bindOnlyWorldMatrix(jB))
        };
        let NB = !1;
        if (QB && void 0 === QB._addToSceneRootNodes) {
          const BB = QB;
          jB = BB.parent ?? null, nB = BB.source ?? null, dB = BB.doNotCloneChildren ?? !1, IB = BB.clonePhysicsImpostor ?? !0, NB = BB.cloneThinInstances ?? !1
        } else jB = QB;
        nB && this._copySource(nB, dB, IB, NB), null !== jB && (this.parent = jB), this._instanceDataStorage.hardwareInstancedRendering = this.wJ().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = BB => {
          BB.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new kB.c(this._internalMeshDataInfo._onMeshReadyObserverAdded), nB && nB.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const QB = 0 === this.getTotalVertices() || jB && jB.doNotInstantiate && (!0 === jB.doNotInstantiate || jB.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        QB.parent = BB || this.parent, QB.position = this.position.clone(), QB.pp = this.pp.clone(), this.rotationQuaternion ? QB.rotationQuaternion = this.rotationQuaternion.clone() : QB.rotation = this.rotation.clone(), zB && zB(this, QB);
        for (const nB of this.getChildTransformNodes(!0)) "InstancedMesh" === nB.getClassName() && "Mesh" === QB.getClassName() && nB.vQB === this ? nB.instantiateHierarchy(QB, {
          doNotInstantiate: jB && jB.doNotInstantiate || !1,
          newSourcedMesh: QB
        }, zB) : nB.instantiateHierarchy(QB, jB, zB);
        return QB
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(BB) {
        let jB = super.toString(BB);
        if (jB += ", n vertices: " + this.getTotalVertices(), jB += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let zB = 0; zB < this.animations.length; zB++) jB += ", animation[0]: " + this.animations[zB].toString(BB);
        if (BB)
          if (this._geometry) {
            const BB = this.dQB(),
              zB = this.getVerticesData(fB.l.PositionKind);
            zB && BB && (jB += ", flat shading: " + (zB.length / 3 === BB.length ? "YES" : "NO"))
          } else jB += ", flat shading: UNKNOWN";
        return jB
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
        this._internalMeshDataInfo._LODLevels.sort(((jB, zB) => jB.distanceOrScreenCoverage < zB.distanceOrScreenCoverage ? BB : jB.distanceOrScreenCoverage > zB.distanceOrScreenCoverage ? -BB : 0))
      }
      addLODLevel(BB, jB) {
        if (jB && jB._masterMesh) return AB.c.Warn("You cannot use a mesh as LOD level twice"), this;
        const zB = new eB(BB, jB);
        return this._internalMeshDataInfo._LODLevels.push(zB), jB && (jB._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(BB) {
        const jB = this._internalMeshDataInfo;
        for (let zB = 0; zB < jB._LODLevels.length; zB++) {
          const QB = jB._LODLevels[zB];
          if (QB.distanceOrScreenCoverage === BB) return QB.mesh
        }
        return null
      }
      removeLODLevel(BB) {
        const jB = this._internalMeshDataInfo;
        for (let zB = 0; zB < jB._LODLevels.length; zB++) jB._LODLevels[zB].mesh === BB && (jB._LODLevels.splice(zB, 1), BB && (BB._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(BB, jB) {
        const zB = this._internalMeshDataInfo;
        if (!zB._LODLevels || 0 === zB._LODLevels.length) return this;
        const QB = jB || this.rV().fQB,
          nB = BB.mode === MB.b.ORTHOGRAPHIC_CAMERA ? BB.minZ : QB.centerWorld.subtract(BB.globalPosition).length();
        let dB = nB,
          IB = 1;
        if (zB._useLODScreenCoverage) {
          const jB = BB.screenArea;
          let zB = QB.radiusWorld * BB.minZ / nB;
          zB = zB * zB * Math.PI, dB = zB / jB, IB = -1
        }
        if (IB * zB._LODLevels[zB._LODLevels.length - 1].distanceOrScreenCoverage > IB * dB) return this.onLODLevelSelection && this.onLODLevelSelection(dB, this, this), this;
        for (let NB = 0; NB < zB._LODLevels.length; NB++) {
          const BB = zB._LODLevels[NB];
          if (IB * BB.distanceOrScreenCoverage < IB * dB) {
            if (BB.mesh) {
              if (4 === BB.mesh.delayLoadState) return BB.mesh._checkDelayState(), this;
              if (2 === BB.mesh.delayLoadState) return this;
              BB.mesh._preActivate(), BB.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(dB, this, BB.mesh), BB.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(dB, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(BB, jB, zB, QB) {
        if (!this._geometry) return null;
        let nB = QB ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[BB]?.getFloatData(this.instances.length + 1, zB || jB && 1 !== this._geometry.meshes.length);
        return nB || (nB = this._geometry.getVerticesData(BB, jB, zB)), nB
      }
      copyVerticesData(BB, jB) {
        this._geometry && this._geometry.copyVerticesData(BB, jB)
      }
      getVertexBuffer(BB, jB) {
        return this._geometry ? (jB ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[BB]) ?? this._geometry.getVertexBuffer(BB) : null
      }
      isVerticesDataPresent(BB, jB) {
        return this._geometry ? !jB && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[BB] || this._geometry.isVerticesDataPresent(BB) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB)
      }
      isVertexBufferUpdatable(BB, jB) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB);
        if (!jB) {
          const jB = this._userInstancedBuffersStorage?.vertexBuffers[BB];
          if (jB) return jB.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(BB)
      }
      getVerticesDataKinds(BB) {
        if (!this._geometry) {
          const BB = [];
          if (this._delayInfo)
            for (const jB of this._delayInfo) BB.push(jB);
          return BB
        }
        const jB = this._geometry.getVerticesDataKinds();
        if (!BB && this._userInstancedBuffersStorage)
          for (const zB in this._userInstancedBuffersStorage.vertexBuffers) - 1 === jB.indexOf(zB) && jB.push(zB);
        return jB
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      dQB(BB, jB) {
        return this._geometry ? this._geometry.dQB(BB, jB) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(BB)) return !1;
        if (!this.cL || 0 === this.cL.length) return !0;
        if (!BB) return !0;
        const zB = this.wJ(),
          QB = this.aY(),
          nB = jB || zB.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const dB = this.material || QB.defaultMaterial;
        if (dB)
          if (dB._storeEffectOnSubMeshes)
            for (const NB of this.cL) {
              const BB = NB.bJ();
              if (BB)
                if (BB._storeEffectOnSubMeshes) {
                  if (!BB.isReadyForSubMesh(this, NB, nB)) return !1
                } else if (!BB.isReady(this, nB)) return !1
            } else if (!dB.isReady(this, nB)) return !1;
        const IB = zB.currentRenderPassId;
        for (const NB of this.lightSources) {
          const BB = NB.getShadowGenerators();
          if (!BB) continue;
          const jB = BB.values();
          for (let QB = jB.next(); !0 !== QB.done; QB = jB.next()) {
            const BB = QB.value;
            if (BB && (!BB.getShadowMap()?.renderList || BB.getShadowMap()?.renderList && -1 !== BB.getShadowMap()?.renderList?.indexOf(this))) {
              const jB = BB.getShadowMap().renderPassIds ?? [zB.currentRenderPassId];
              for (let QB = 0; QB < jB.length; ++QB) {
                zB.currentRenderPassId = jB[QB];
                for (const jB of this.cL)
                  if (!BB.isReady(jB, nB, jB.bJ()?.needAlphaBlendingForMesh(this) ?? !1)) return zB.currentRenderPassId = IB, !1
              }
              zB.currentRenderPassId = IB
            }
          }
        }
        for (const NB of this._internalMeshDataInfo._LODLevels)
          if (NB.mesh && !NB.mesh.isReady(nB)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      vJ() {
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
        let jB = this._instanceDataStorage.renderPasses[BB];
        return jB || (jB = new wB, this._instanceDataStorage.renderPasses[BB] = jB), jB
      }
      _preActivate() {
        const BB = this._internalMeshDataInfo,
          jB = this.aY().getRenderId();
        return BB._preActivateId === jB || (BB._preActivateId = jB, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(BB) {
        const jB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return jB.visibleInstances && (jB.visibleInstances.intermediateDefaultRenderId = BB), this
      }
      _registerInstanceForRenderId(BB, jB) {
        const zB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return zB.visibleInstances || (zB.visibleInstances = {
          defaultRenderId: jB,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), zB.visibleInstances[jB] || (void 0 === zB.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete zB.visibleInstances[zB.previousRenderId], zB.previousRenderId = jB, zB.visibleInstances[jB] = new Array), zB.visibleInstances[jB].push(BB), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.cJ || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let BB, jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          zB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.rV().isLocked) return this;
        BB = "object" === typeof jB ? jB : {
          applySkeleton: jB,
          applyMorph: zB
        };
        const QB = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(BB, null, fB.l.PositionKind), QB), this
      }
      _createGlobalSubMesh(BB) {
        const jB = this.getTotalVertices();
        if (!jB || !this.dQB()) return null;
        if (this.cL && this.cL.length > 0) {
          const zB = this.dQB();
          if (!zB) return null;
          const QB = zB.length;
          let nB = !1;
          if (BB) nB = !0;
          else
            for (const BB of this.cL) {
              if (BB.indexStart + BB.indexCount > QB) {
                nB = !0;
                break
              }
              if (BB.verticesStart + BB.verticesCount > jB) {
                nB = !0;
                break
              }
            }
          if (!nB) return this.cL[0]
        }
        return this.releaseSubMeshes(), new FB.d(0, 0, jB, 0, this.getTotalIndices() || (this.isUnIndexed ? jB : 0), this)
      }
      subdivide(BB) {
        if (BB < 1) return;
        const jB = this.getTotalIndices();
        let zB = jB / BB | 0,
          QB = 0;
        for (; zB % 3 !== 0;) zB++;
        this.releaseSubMeshes();
        for (let nB = 0; nB < BB && !(QB >= jB); nB++) FB.d.CreateFromIndices(0, QB, QB + zB >= jB ? jB - QB : zB, this, void 0, !1), QB += zB;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(BB, jB, zB, QB);
        else {
          const QB = new oB.e;
          QB.set(jB, BB);
          const nB = this.aY();
          new HB.c(HB.c.RandomId(), nB, QB, zB, this)
        }
        return this
      }
      removeVerticesData(BB) {
        this._geometry && this._geometry.removeVerticesData(BB)
      }
      markVerticesDataAsUpdatable(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zB = this.getVertexBuffer(BB);
        zB && zB.isUpdatable() !== jB && this.setVerticesData(BB, this.getVerticesData(BB), jB)
      }
      setVerticesBuffer(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = HB.c.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(BB, zB, jB), this
      }
      updateVerticesData(BB, jB, zB, QB) {
        return this._geometry ? (QB ? (this.makeGeometryUnique(), this.updateVerticesData(BB, jB, zB, !1)) : this._geometry.updateVerticesData(BB, jB, zB), this) : this
      }
      updateMeshPositions(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zB = this.getVerticesData(fB.l.PositionKind);
        if (!zB) return this;
        if (BB(zB), this.updateVerticesData(fB.l.PositionKind, zB, !1, !1), jB) {
          const BB = this.dQB(),
            jB = this.getVerticesData(fB.l.NormalKind);
          if (!jB) return this;
          oB.e.ComputeNormals(zB, BB, jB), this.updateVerticesData(fB.l.NormalKind, jB, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const BB = this._geometry,
          jB = this._geometry.copy(HB.c.RandomId());
        return BB.releaseForMesh(this, !0), jB.applyToMesh(this), this
      }
      setIndexBuffer(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          nB = this._geometry;
        nB || (nB = new HB.c(HB.c.RandomId(), this.aY(), void 0, void 0, this)), nB.setIndexBuffer(BB, jB, zB, QB)
      }
      setIndices(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(BB, jB, zB, QB);
        else {
          const QB = new oB.e;
          QB.indices = BB;
          const nB = this.aY();
          new HB.c(HB.c.RandomId(), nB, QB, zB, this, jB)
        }
        return this
      }
      updateIndices(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(BB, jB, zB), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(BB, jB, zB) {
        let QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const nB = this.aY().wJ();
        let dB;
        if (this._unIndexed)
          if (this._getRenderingFillMode(zB) === YB.b.WireFrameFillMode) dB = BB._getLinesIndexBuffer(this.dQB(), nB);
          else dB = null;
        else switch (this._getRenderingFillMode(zB)) {
          case YB.b.PointFillMode:
            dB = null;
            break;
          case YB.b.WireFrameFillMode:
            dB = BB._getLinesIndexBuffer(this.dQB(), nB);
            break;
          default:
          case YB.b.TriangleFillMode:
            dB = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(jB, dB, QB)
      }
      _bindDirect(BB, jB) {
        let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(BB), zB && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const BB = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const jB in BB) this._userInstancedBuffersStorage.vertexBuffers[jB] = BB[jB]
          }
          this._geometry._bind(BB, jB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(BB, jB);
        return this
      }
      _draw(BB, jB, zB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const QB = this.aY().wJ(),
          nB = QB._currentMaterialContext,
          dB = nB && nB.useVertexPulling;
        return this._unIndexed && jB !== YB.b.WireFrameFillMode || jB == YB.b.PointFillMode ? QB.drawArraysType(jB, BB.verticesStart, BB.verticesCount, this.forcedInstanceCount || zB) : jB == YB.b.WireFrameFillMode ? QB.drawElementsType(jB, 0, BB._linesIndexCount, this.forcedInstanceCount || zB) : dB ? QB.drawArraysType(jB, BB.indexStart, BB.indexCount, this.forcedInstanceCount || zB) : QB.drawElementsType(jB, BB.indexStart, BB.indexCount, this.forcedInstanceCount || zB), this
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
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const zB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (jB) return zB.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[BB] = !1, zB.batchCacheReplacementModeInFrozenMode.renderSelf[BB] = !0, zB.batchCacheReplacementModeInFrozenMode;
          if (zB.previousBatch) return zB.previousBatch
        }
        const QB = this.aY(),
          nB = QB._isInIntermediateRendering(),
          dB = nB ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          IB = zB.batchCache;
        if (IB.mustReturn = !1, IB.renderSelf[BB] = jB || !dB && this.isEnabled() && this.isVisible, IB.visibleInstances[BB] = null, zB.visibleInstances && !jB) {
          const jB = zB.visibleInstances,
            dB = QB.getRenderId(),
            NB = nB ? jB.intermediateDefaultRenderId : jB.defaultRenderId;
          IB.visibleInstances[BB] = jB[dB], !IB.visibleInstances[BB] && NB && (IB.visibleInstances[BB] = jB[NB])
        }
        return IB.hardwareInstancedRendering[BB] = !jB && this._instanceDataStorage.hardwareInstancedRendering && null !== IB.visibleInstances[BB] && void 0 !== IB.visibleInstances[BB], zB.previousBatch = IB, IB
      }
      _updateInstancedBuffers(BB, jB, zB, QB, nB, dB) {
        const IB = jB.visibleInstances[BB._id],
          NB = IB ? IB.length : 0,
          uB = jB.parent,
          UB = this._instanceDataStorage;
        let aB = uB.instancesBuffer,
          pB = uB.instancesPreviousBuffer,
          rB = 0,
          sB = 0;
        const JB = jB.renderSelf[BB._id],
          mB = this._scene.floatingOriginOffset,
          yB = !aB || zB !== uB.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !uB.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || UB.isFrozen && !yB) sB = (JB ? 1 : 0) + NB;
        else {
          const jB = this.getWorldMatrix();
          if (JB) {
            this._scene.needsPreviousWorldMatrices && (UB.masterMeshPreviousWorldMatrix ? (UB.masterMeshPreviousWorldMatrix.copyToArray(uB.instancesPreviousData, rB), UB.masterMeshPreviousWorldMatrix.jH(jB)) : (UB.masterMeshPreviousWorldMatrix = jB.clone(), UB.masterMeshPreviousWorldMatrix.copyToArray(uB.instancesPreviousData, rB))), jB.copyToArray(uB.instancesData, rB);
            const BB = jB.nQB();
            uB.instancesData[rB + 12] = BB[12] - mB.x, uB.instancesData[rB + 13] = BB[13] - mB.y, uB.instancesData[rB + 14] = BB[14] - mB.z, rB += 16, sB++
          }
          if (IB) {
            if (vB.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && BB.bJ()?.needAlphaBlendingForMesh(BB.getRenderingMesh())) {
              const BB = this._scene.activeCamera.globalPosition;
              for (let jB = 0; jB < IB.length; jB++) {
                const zB = IB[jB];
                zB._distanceToCamera = EB.m.Distance(zB.rV().fQB.centerWorld, BB)
              }
              IB.sort(((BB, jB) => BB._distanceToCamera > jB._distanceToCamera ? -1 : BB._distanceToCamera < jB._distanceToCamera ? 1 : 0))
            }
            for (let BB = 0; BB < IB.length; BB++) {
              const jB = IB[BB],
                zB = jB.getWorldMatrix();
              zB.copyToArray(uB.instancesData, rB), this._scene.needsPreviousWorldMatrices && (jB._previousWorldMatrix ? (jB._previousWorldMatrix.copyToArray(uB.instancesPreviousData, rB), jB._previousWorldMatrix.jH(zB)) : (jB._previousWorldMatrix = zB.clone(), jB._previousWorldMatrix.copyToArray(uB.instancesPreviousData, rB)));
              const QB = zB.nQB();
              uB.instancesData[rB + 12] = QB[12] - mB.x, uB.instancesData[rB + 13] = QB[13] - mB.y, uB.instancesData[rB + 14] = QB[14] - mB.z, rB += 16, sB++
            }
          }
        }
        if (yB) {
          let BB;
          if (aB && aB.dispose(), pB && pB.dispose(), aB = new fB.e(QB, uB.instancesData, !0, 16, !1, !0), uB.instancesBuffer = aB, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.wJ().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) BB = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const jB = this._instanceDataStorage.engine.currentRenderPassId;
            BB = this._userInstancedBuffersStorage.renderPasses[jB], BB || (this._userInstancedBuffersStorage.renderPasses[jB] = BB = {})
          }
          BB.world0 = aB.createVertexBuffer("world0", 0, 4), BB.world1 = aB.createVertexBuffer("world1", 4, 4), BB.world2 = aB.createVertexBuffer("world2", 8, 4), BB.world3 = aB.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (pB = new fB.e(QB, uB.instancesPreviousData, !0, 16, !1, !0), uB.instancesPreviousBuffer = pB, BB.previousWorld0 = pB.createVertexBuffer("previousWorld0", 0, 4), BB.previousWorld1 = pB.createVertexBuffer("previousWorld1", 4, 4), BB.previousWorld2 = pB.createVertexBuffer("previousWorld2", 8, 4), BB.previousWorld3 = pB.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (aB.updateDirectly(uB.instancesData, 0, sB), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || pB.updateDirectly(uB.instancesPreviousData, 0, sB));
        this._processInstancedBuffers(IB, JB), dB && void 0 !== nB && (this.aY()._activeIndices.addCount(BB.indexCount * sB, !1), QB._currentDrawContext && (QB._currentDrawContext.useInstancing = !0), this._bind(BB, dB, nB), this._draw(BB, nB, sB)), !this._scene.needsPreviousWorldMatrices || yB || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || pB.updateDirectly(uB.instancesData, 0, sB)
      }
      _renderWithInstances(BB, jB, zB, QB, nB) {
        const dB = zB.visibleInstances[BB._id],
          IB = dB ? dB.length : 0,
          NB = zB.parent,
          uB = NB.instancesBufferSize,
          UB = 16 * (IB + 1) * 4;
        for (; NB.instancesBufferSize < UB;) NB.instancesBufferSize *= 2;
        return NB.instancesData && uB == NB.instancesBufferSize || (NB.instancesData = new Float32Array(NB.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !NB.instancesPreviousData || uB != NB.instancesBufferSize) && (NB.instancesPreviousData = new Float32Array(NB.instancesBufferSize / 4)), this._updateInstancedBuffers(BB, zB, uB, nB, jB, QB), nB.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(BB, jB, zB, QB) {
        const nB = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.aY()._activeIndices.addCount(BB.indexCount * nB, !1), QB._currentDrawContext && (QB._currentDrawContext.useInstancing = !0), this._bind(BB, zB, jB), this._draw(BB, jB, nB), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, nB) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), QB.unbindInstanceAttributes()
      }
      _processInstancedBuffers(BB, jB) {}
      _processRendering(BB, jB, zB, QB, nB, dB, IB, NB) {
        const uB = this.aY(),
          UB = uB.wJ();
        if (QB = this._getRenderingFillMode(QB), dB && jB.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(jB, QB, zB, UB), this;
        if (dB) this._renderWithInstances(jB, QB, nB, zB, UB);
        else {
          UB._currentDrawContext && (UB._currentDrawContext.useInstancing = !1);
          let zB = 0;
          nB.renderSelf[jB._id] && (IB && IB(!1, BB.getWorldMatrix(), NB), zB++, this._draw(jB, QB, this._instanceDataStorage.overridenInstanceCount));
          const dB = nB.visibleInstances[jB._id];
          if (dB) {
            const BB = dB.length;
            zB += BB;
            for (let zB = 0; zB < BB; zB++) {
              const BB = dB[zB].getWorldMatrix();
              IB && IB(!0, BB, NB), this._draw(jB, QB)
            }
          }
          uB._activeIndices.addCount(jB.indexCount * zB, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB?.instancesBuffer && (jB && BB.instancesBuffer.dispose(), BB.instancesBuffer = null), BB?.instancesPreviousBuffer && (jB && BB.instancesPreviousBuffer.dispose(), BB.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const jB in this._instanceDataStorage.renderPasses) {
          const zB = this._instanceDataStorage.renderPasses[jB];
          this._disposeInstanceDataStorageRenderPass(zB, BB)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, BB), this._userInstancedBuffersStorage) {
          for (const jB in this._userInstancedBuffersStorage.vertexBuffers) {
            const zB = this._userInstancedBuffersStorage.vertexBuffers[jB];
            zB && (BB && zB.dispose(), this._userInstancedBuffersStorage.vertexBuffers[jB] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(BB)
      }
      _releaseRenderPassId(BB) {
        const jB = this._instanceDataStorage.renderPasses[BB];
        if (jB && (this._disposeInstanceDataStorageRenderPass(jB, !0), delete this._instanceDataStorage.renderPasses[BB]), this._userInstancedBuffersStorage?.renderPasses) {
          const jB = this._userInstancedBuffersStorage.renderPasses[BB];
          if (jB)
            for (const BB in jB) jB[BB]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[BB]
        }
        const zB = this._userInstancedBuffersStorage?.interleavedBuffers;
        zB?.[BB] && (zB[BB].buffer.dispose(), delete zB[BB])
      }
      _freeze() {
        if (this.cL) {
          for (let BB = 0; BB < this.cL.length; BB++) this._getInstancesRenderList(BB);
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
      renderWithRenderPassId(BB, jB, zB, QB) {
        let nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const dB = this._scene.wJ(),
          IB = dB.currentRenderPassId;
        if (void 0 !== BB && (dB.currentRenderPassId = BB), QB)(!nB || nB && QB.isInFrustum(this._scene._frustumPlanes)) && this.render(QB, !!jB, zB);
        else
          for (let NB = 0; NB < this.cL.length; NB++) {
            const BB = this.cL[NB];
            (!nB || nB && BB.isInFrustum(this._scene._frustumPlanes)) && this.render(BB, !!jB, zB)
          }
        return void 0 !== BB && (dB.currentRenderPassId = IB), this
      }
      directRender() {
        if (!this.cL) return this;
        for (const BB of this.cL) this.render(BB, !1);
        return this
      }
      render(BB, jB, zB) {
        const QB = this.aY(),
          nB = QB.wJ();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const dB = QB.activeCameras?.length ?? 0,
          IB = dB > 1 && QB.activeCamera === QB.activeCameras[0] || dB <= 1,
          NB = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== nB.currentRenderPassId;
        if (IB && this._checkOcclusionQuery(NB) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const uB = this._getInstancesRenderList(BB._id, !!zB);
        if (uB.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let UB = 0,
          aB = null;
        this.ignoreCameraMaxZ && QB.activeCamera && !QB._isInIntermediateRendering() && (UB = QB.activeCamera.maxZ, aB = QB.activeCamera, QB.activeCamera.maxZ = 0, QB.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const pB = BB.getRenderingMesh(),
          rB = uB.hardwareInstancedRendering[BB._id] || pB.hasThinInstances || !!this._userInstancedBuffersStorage && !BB.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          sB = this._instanceDataStorage,
          JB = BB.bJ();
        if (!JB) return aB && (aB.maxZ = UB, QB.updateTransformMatrix(!0)), this;
        if (sB.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === JB) {
          if (JB._storeEffectOnSubMeshes && !BB._drawWrapper?._wasPreviouslyReady || !JB._storeEffectOnSubMeshes && !JB._getDrawWrapper()._wasPreviouslyReady) return aB && (aB.maxZ = UB, QB.updateTransformMatrix(!0)), this
        } else {
          if (JB._storeEffectOnSubMeshes) {
            if (!JB.isReadyForSubMesh(this, BB, rB)) return aB && (aB.maxZ = UB, QB.updateTransformMatrix(!0)), this
          } else if (!JB.isReady(this, rB)) return aB && (aB.maxZ = UB, QB.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = JB
        }
        if (jB) {
          const BB = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === BB.alphaModes.length) nB.setAlphaMode(BB.alphaMode);
          else
            for (let jB = 0; jB < BB.alphaModes.length; jB++) {
              const zB = BB.alphaModes[jB];
              nB.setAlphaMode(void 0 !== zB ? zB : 2, !1, jB)
            }
        }
        let mB;
        mB = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? BB._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const yB = mB?.effect ?? null;
        for (let MB = 0, EB = QB._beforeRenderingMeshStage; MB < EB.length; MB++) {
          EB[MB].action(this, BB, uB, yB)
        }
        if (!mB || !yB) return aB && (aB.maxZ = UB, QB.updateTransformMatrix(!0)), this;
        const kB = zB || this;
        let GB;
        if (!sB.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const BB = kB._getWorldMatrixDeterminant();
          GB = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), BB < 0 && (GB = GB === YB.b.ClockWiseSideOrientation ? YB.b.CounterClockWiseSideOrientation : YB.b.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = GB
        }
        const LB = this._internalMeshDataInfo._effectiveMaterial._preBind(mB, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && nB.setDepthWrite(!0);
        const gB = this._internalMeshDataInfo._effectiveMaterial,
          tB = gB.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), rB || this._bind(BB, yB, tB, !1);
        const SB = kB.getWorldMatrix();
        gB._storeEffectOnSubMeshes ? gB.bindForSubMesh(SB, this, BB) : gB.bind(SB, this);
        try {
          VB.c._BindAttachmentsForEffect(nB, yB) && (!gB.backFaceCulling && gB.separateCullingPass && (nB.setState(!0, gB.zOffset, !1, !LB, gB.cullBackFaces, gB.stencil, gB.zOffsetUnits), this._processRendering(this, BB, yB, tB, uB, rB, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), nB.setState(!0, gB.zOffset, !1, LB, gB.cullBackFaces, gB.stencil, gB.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(BB)), this._processRendering(this, BB, yB, tB, uB, rB, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          VB.c._RestoreAttachments(nB)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let MB = 0, EB = QB._afterRenderingMeshStage; MB < EB.length; MB++) {
          EB[MB].action(this, BB, uB, yB)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), aB && (aB.maxZ = UB, QB.updateTransformMatrix(!0)), 2 !== QB.performancePriority || sB.isFrozen || this._freeze(), this
      }
      _renderRunFollower(BB, jB) {
        const zB = this._scene,
          QB = zB._engine;
        if (QB.isWebGPU || BB._mesh !== this || 0 !== this.instances.length || this.render !== vB.prototype.render) return !1;
        const nB = BB.bJ();
        if (!nB || nB !== zB._cachedMaterial || void 0 === nB._canBindRunFollower) return !1;
        const dB = BB._drawWrapper,
          IB = dB?.effect;
        if (!IB || IB !== zB._cachedEffect || this.visibility !== zB._cachedVisibility || dB._forceRebindOnNextCall) return !1;
        const NB = this.hasThinInstances;
        if (!NB && this._userInstancedBuffersStorage) return !1;
        if (!dB._wasPreviouslyReady || dB._wasPreviouslyUsingInstances !== NB) return !1;
        const uB = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || zB._isInIntermediateRendering() || 0 !== zB._beforeRenderingMeshStage.length || 0 !== zB._afterRenderingMeshStage.length || uB._onBeforeRenderObservable?.hasObservers() || uB._onBeforeBindObservable?.hasObservers() || uB._onAfterRenderObservable?.hasObservers()) return !1;
        const UB = this.occlusionType;
        if (void 0 !== UB && UB !== DB.e.OCCLUSION_TYPE_NONE || !nB._canBindRunFollower(zB, QB, this, BB, IB)) return !1;
        const aB = this._internalAbstractMeshDataInfo,
          pB = aB._isActiveIntermediate;
        pB ? aB._isActiveIntermediate = !1 : aB._isActive = !1;
        const rB = zB.activeCameras?.length ?? 0;
        (rB > 1 && zB.activeCamera === zB.activeCameras[0] || rB <= 1) && this._checkOcclusionQuery(!1);
        const sB = this._getInstancesRenderList(BB._id);
        if (sB.mustReturn) return !0;
        if (!NB && !sB.renderSelf[BB._id]) return pB ? aB._isActiveIntermediate = !0 : aB._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (uB._effectiveMaterial = nB, jB)
          if (1 === nB.alphaModes.length) QB.setAlphaMode(nB.alphaMode);
          else
            for (let mB = 0; mB < nB.alphaModes.length; mB++) {
              const BB = nB.alphaModes[mB];
              QB.setAlphaMode(void 0 !== BB ? BB : 2, !1, mB)
            }
        if (nB.backFaceCulling || null !== nB.sideOrientation || nB._twoSidedLighting) {
          const BB = this._getWorldMatrixDeterminant();
          let jB = nB._getEffectiveOrientation(this);
          BB < 0 && (jB = jB === YB.b.ClockWiseSideOrientation ? YB.b.CounterClockWiseSideOrientation : YB.b.ClockWiseSideOrientation), uB._effectiveSideOrientation = jB
        }
        nB._preBind(dB, uB._effectiveSideOrientation), nB.forceDepthWrite && QB.setDepthWrite(!0);
        const JB = nB.fillMode;
        return NB || this._bind(BB, IB, JB, !1), nB._bindRunFollower(this.getWorldMatrix(), this, BB, IB), this._processRendering(this, BB, IB, JB, sB, NB, this._onBeforeDraw, nB), nB.unbind(), 2 === zB.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(fB.l.MatricesWeightsKind) && (this.isVerticesDataPresent(fB.l.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const BB = this.getVerticesData(fB.l.MatricesWeightsKind),
          jB = BB.length;
        for (let zB = 0; zB < jB; zB += 4) {
          const jB = BB[zB] + BB[zB + 1] + BB[zB + 2] + BB[zB + 3];
          if (0 === jB) BB[zB] = 1;
          else {
            const QB = 1 / jB;
            BB[zB] *= QB, BB[zB + 1] *= QB, BB[zB + 2] *= QB, BB[zB + 3] *= QB
          }
        }
        this.setVerticesData(fB.l.MatricesWeightsKind, BB)
      }
      _normalizeSkinWeightsAndExtra() {
        const BB = this.getVerticesData(fB.l.MatricesWeightsExtraKind),
          jB = this.getVerticesData(fB.l.MatricesWeightsKind),
          zB = jB.length;
        for (let QB = 0; QB < zB; QB += 4) {
          let zB = jB[QB] + jB[QB + 1] + jB[QB + 2] + jB[QB + 3];
          if (zB += BB[QB] + BB[QB + 1] + BB[QB + 2] + BB[QB + 3], 0 === zB) jB[QB] = 1;
          else {
            const nB = 1 / zB;
            jB[QB] *= nB, jB[QB + 1] *= nB, jB[QB + 2] *= nB, jB[QB + 3] *= nB, BB[QB] *= nB, BB[QB + 1] *= nB, BB[QB + 2] *= nB, BB[QB + 3] *= nB
          }
        }
        this.setVerticesData(fB.l.MatricesWeightsKind, jB), this.setVerticesData(fB.l.MatricesWeightsKind, BB)
      }
      validateSkinning() {
        const BB = this.getVerticesData(fB.l.MatricesWeightsExtraKind),
          jB = this.getVerticesData(fB.l.MatricesWeightsKind);
        if (null === jB || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          JJ: "not skinned"
        };
        const zB = jB.length;
        let QB = 0,
          nB = 0,
          dB = 0,
          IB = 0;
        const NB = null === BB ? 4 : 8,
          uB = [];
        for (let sB = 0; sB <= NB; sB++) uB[sB] = 0;
        for (let sB = 0; sB < zB; sB += 4) {
          let zB = jB[sB],
            UB = zB,
            aB = 0 === UB ? 0 : 1;
          for (let nB = 1; nB < NB; nB++) {
            const dB = nB < 4 ? jB[sB + nB] : BB[sB + nB - 4];
            dB > zB && QB++, 0 !== dB && aB++, UB += dB, zB = dB
          }
          if (uB[aB]++, aB > dB && (dB = aB), 0 === UB) nB++;
          else {
            const zB = 1 / UB;
            let QB = 0;
            for (let nB = 0; nB < NB; nB++) QB += nB < 4 ? Math.abs(jB[sB + nB] - jB[sB + nB] * zB) : Math.abs(BB[sB + nB - 4] - BB[sB + nB - 4] * zB);
            QB > .001 && IB++
          }
        }
        const UB = this.skeleton.bones.length,
          aB = this.getVerticesData(fB.l.MatricesIndicesKind),
          pB = this.getVerticesData(fB.l.MatricesIndicesExtraKind);
        let rB = 0;
        for (let sB = 0; sB < zB; sB += 4)
          for (let BB = 0; BB < NB; BB++) {
            const jB = BB < 4 ? aB[sB + BB] : pB[sB + BB - 4];
            (jB >= UB || jB < 0) && rB++
          }
        return {
          skinned: !0,
          valid: 0 === nB && 0 === IB && 0 === rB,
          JJ: "Number of Weights = " + zB / 4 + "\nMaximum influences = " + dB + "\nMissing Weights = " + nB + "\nNot Sorted = " + QB + "\nNot Normalized = " + IB + "\nWeightCounts = [" + uB + "]\nNumber of bones = " + UB + "\nBad Bone Indices = " + rB
        }
      }
      _checkDelayState() {
        const BB = this.aY();
        return this._geometry ? this._geometry.load(BB) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(BB)), this
      }
      _queueLoad(BB) {
        BB.addPendingData(this);
        const jB = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const zB = await BB._loadDelayedFileAsync(this.delayLoadingFile, jB, !0);
            zB instanceof ArrayBuffer ? this._delayLoadingFunction(zB, this) : this._delayLoadingFunction(JSON.parse(zB), this);
            for (const BB of this.instances) BB.refreshBoundingInfo(), BB._syncSubMeshes();
            this.delayLoadState = 1, BB.removePendingData(this)
          } catch (zB) {
            BB.removePendingData(this), BB.aE || AB.c.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${zB}`)
          }
        })(), this
      }
      isInFrustum(BB) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(BB) && (this._checkDelayState(), !0))
      }
      setMaterialById(BB) {
        const jB = this.aY().materials;
        let zB;
        for (zB = jB.length - 1; zB > -1; zB--)
          if (jB[zB].id === BB) return this.material = jB[zB], this;
        const QB = this.aY().multiMaterials;
        for (zB = QB.length - 1; zB > -1; zB--)
          if (QB[zB].id === BB) return this.material = QB[zB], this;
        return this
      }
      getAnimatables() {
        const BB = [];
        return this.material && BB.push(this.material), this.skeleton && BB.push(this.skeleton), BB
      }
      bakeTransformIntoVertices(BB) {
        if (!this.isVerticesDataPresent(fB.l.PositionKind)) return this;
        const jB = this.cL.splice(0);
        this._resetPointsArrayCache();
        let zB = this.getVerticesData(fB.l.PositionKind);
        const QB = EB.m.Zero();
        let nB;
        for (nB = 0; nB < zB.length; nB += 3) EB.m.TransformCoordinatesFromFloatsToRef(zB[nB], zB[nB + 1], zB[nB + 2], BB, QB).toArray(zB, nB);
        if (this.setVerticesData(fB.l.PositionKind, zB, this.getVertexBuffer(fB.l.PositionKind).isUpdatable()), this.isVerticesDataPresent(fB.l.NormalKind)) {
          for (zB = this.getVerticesData(fB.l.NormalKind), nB = 0; nB < zB.length; nB += 3) EB.m.TransformNormalFromFloatsToRef(zB[nB], zB[nB + 1], zB[nB + 2], BB, QB).normalize().toArray(zB, nB);
          this.setVerticesData(fB.l.NormalKind, zB, this.getVertexBuffer(fB.l.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(fB.l.TangentKind)) {
          for (zB = this.getVerticesData(fB.l.TangentKind), nB = 0; nB < zB.length; nB += 4) EB.m.TransformNormalFromFloatsToRef(zB[nB], zB[nB + 1], zB[nB + 2], BB, QB).normalize().toArray(zB, nB);
          this.setVerticesData(fB.l.TangentKind, zB, this.getVertexBuffer(fB.l.TangentKind).isUpdatable())
        }
        return BB.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.cL = jB, this
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
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (jB && void 0 === jB._addToSceneRootNodes) {
          const zB = jB;
          return bB.source = this, bB.doNotCloneChildren = zB.doNotCloneChildren, bB.clonePhysicsImpostor = zB.clonePhysicsImpostor, bB.cloneThinInstances = zB.cloneThinInstances, new vB(BB, this.aY(), bB)
        }
        return new vB(BB, this.aY(), jB, this, zB, QB)
      }
      dispose(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const zB = this._internalMeshDataInfo;
        if (zB._onBeforeDrawObservable && zB._onBeforeDrawObservable.clear(), zB._onBeforeBindObservable && zB._onBeforeBindObservable.clear(), zB._onBeforeRenderObservable && zB._onBeforeRenderObservable.clear(), zB._onAfterRenderObservable && zB._onAfterRenderObservable.clear(), zB._onBetweenPassObservable && zB._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (zB.meshMap)
            for (const BB in zB.meshMap) {
              const jB = zB.meshMap[BB];
              jB && (jB._internalMeshDataInfo._source = null, zB.meshMap[BB] = void 0)
            }
          zB._source && zB._source._internalMeshDataInfo.meshMap && (zB._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const BB = this.aY().meshes;
          for (const jB of BB) {
            const BB = jB;
            BB._internalMeshDataInfo && BB._internalMeshDataInfo._source && BB._internalMeshDataInfo._source === this && (BB._internalMeshDataInfo._source = null)
          }
        }
        zB._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(BB, jB)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(BB, jB, zB, QB, nB, dB) {
        let IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          NB = arguments.length > 7 ? arguments[7] : void 0;
        const uB = this.aY();
        return (0, LB.r)(BB, (BB => {
          const NB = BB.width,
            uB = BB.height,
            UB = this.wJ().createCanvas(NB, uB).getContext("2d");
          UB.drawImage(BB, 0, 0);
          const aB = UB.getImageData(0, 0, NB, uB).data;
          this.applyDisplacementMapFromBuffer(aB, NB, uB, jB, zB, nB, dB, IB), QB && QB(this)
        }), NB || (() => {}), uB.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(BB, jB, zB, QB, nB, dB, IB) {
        let NB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(fB.l.PositionKind) || !this.isVerticesDataPresent(fB.l.NormalKind) || !this.isVerticesDataPresent(fB.l.UVKind)) return AB.c.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const uB = this.getVerticesData(fB.l.PositionKind, !0, !0),
          UB = this.getVerticesData(fB.l.NormalKind),
          aB = this.getVerticesData(fB.l.UVKind);
        let pB = EB.m.Zero();
        const rB = EB.m.Zero(),
          sB = EB.i.Zero();
        dB = dB || EB.i.Zero(), IB = IB || new EB.i(1, 1);
        for (let JB = 0; JB < uB.length; JB += 3) {
          EB.m.FromArrayToRef(uB, JB, pB), EB.m.FromArrayToRef(UB, JB, rB), EB.i.FromArrayToRef(aB, JB / 3 * 2, sB);
          const NB = 4 * ((Math.abs(sB.x * IB.x + dB.x % 1) * (jB - 1) % jB | 0) + (Math.abs(sB.y * IB.y + dB.y % 1) * (zB - 1) % zB | 0) * jB),
            mB = .3 * (BB[NB] / 255) + .59 * (BB[NB + 1] / 255) + .11 * (BB[NB + 2] / 255);
          rB.normalize(), rB.scaleInPlace(QB + (nB - QB) * mB), pB = pB.add(rB), pB.toArray(uB, JB)
        }
        return oB.e.ComputeNormals(uB, this.dQB(), UB), NB ? (this.setVerticesData(fB.l.PositionKind, uB), this.setVerticesData(fB.l.NormalKind, UB), this.setVerticesData(fB.l.UVKind, aB)) : (this.updateVerticesData(fB.l.PositionKind, uB), this.updateVerticesData(fB.l.NormalKind, UB)), this
      }
      _getFlattenedNormals(BB, jB) {
        const zB = new Float32Array(3 * BB.length);
        let QB = 0;
        const nB = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let dB = 0; dB < BB.length; dB += 3) {
          const IB = EB.m.FromArray(jB, 3 * BB[dB]),
            NB = EB.m.FromArray(jB, 3 * BB[dB + 1]),
            uB = EB.m.FromArray(jB, 3 * BB[dB + 2]),
            UB = IB.subtract(NB),
            aB = uB.subtract(NB),
            pB = EB.m.Normalize(EB.m.Cross(UB, aB));
          nB && pB.scaleInPlace(-1);
          for (let BB = 0; BB < 3; BB++) zB[QB++] = pB.x, zB[QB++] = pB.y, zB[QB++] = pB.z
        }
        return zB
      }
      _convertToUnIndexedMesh() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = this.getVerticesDataKinds().filter((BB => !this.getVertexBuffer(BB)?.getIsInstanced())),
          zB = this.dQB(!1, !0),
          QB = {},
          nB = (BB, jB) => {
            const QB = new Float32Array(zB.length * jB);
            let nB = 0;
            for (let dB = 0; dB < zB.length; dB++)
              for (let IB = 0; IB < jB; IB++) QB[nB++] = BB[zB[dB] * jB + IB];
            return QB
          },
          dB = this.rV(),
          IB = this.geometry ? this.cL.slice(0) : [];
        for (const NB of jB) QB[NB] = this.getVerticesData(NB);
        for (const NB of jB) {
          const jB = this.getVertexBuffer(NB),
            dB = jB.getSize();
          if (BB && NB === fB.l.NormalKind) {
            const BB = this._getFlattenedNormals(zB, QB[fB.l.PositionKind]);
            this.setVerticesData(fB.l.NormalKind, BB, jB.isUpdatable(), dB)
          } else this.setVerticesData(NB, nB(QB[NB], dB), jB.isUpdatable(), dB)
        }
        if (this.morphTargetManager) {
          for (let jB = 0; jB < this.morphTargetManager.numTargets; jB++) {
            const QB = this.morphTargetManager.getTarget(jB),
              dB = QB.getPositions();
            QB.FIB(nB(dB, 3));
            const IB = QB.getNormals();
            IB && QB.setNormals(BB ? this._getFlattenedNormals(zB, dB) : nB(IB, 3));
            const NB = QB.getTangents();
            NB && QB.setTangents(nB(NB, 3));
            const uB = QB.getUVs();
            uB && QB.setUVs(nB(uB, 2));
            const UB = QB.getColors();
            UB && QB.setColors(nB(UB, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let NB = 0; NB < zB.length; NB++) zB[NB] = NB;
        this.setIndices(zB), this._unIndexed = !0, this.releaseSubMeshes();
        for (const NB of IB) {
          const BB = NB.rV();
          FB.d.AddToMesh(NB.materialIndex, NB.indexStart, NB.indexCount, NB.indexStart, NB.indexCount, this).setBoundingInfo(BB)
        }
        return this.setBoundingInfo(dB), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = oB.e.ExtractFromMesh(this);
        let zB;
        if (BB && this.isVerticesDataPresent(fB.l.NormalKind) && jB.normals) {
          for (zB = 0; zB < jB.normals.length; zB++) jB.normals[zB] *= -1;
          this.setVerticesData(fB.l.NormalKind, jB.normals, this.isVertexBufferUpdatable(fB.l.NormalKind))
        }
        if (jB.indices) {
          let BB;
          for (zB = 0; zB < jB.indices.length; zB += 3) BB = jB.indices[zB + 1], jB.indices[zB + 1] = jB.indices[zB + 2], jB.indices[zB + 2] = BB;
          this.setIndices(jB.indices, null, this.isVertexBufferUpdatable(fB.l.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const jB = oB.e.ExtractFromMesh(this),
          zB = jB.indices && !Array.isArray(jB.indices) && Array.from ? Array.from(jB.indices) : jB.indices,
          QB = jB.positions && !Array.isArray(jB.positions) && Array.from ? Array.from(jB.positions) : jB.positions,
          nB = jB.uvs && !Array.isArray(jB.uvs) && Array.from ? Array.from(jB.uvs) : jB.uvs,
          dB = jB.normals && !Array.isArray(jB.normals) && Array.from ? Array.from(jB.normals) : jB.normals;
        if (zB && QB) {
          jB.indices = zB, jB.positions = QB, nB && (jB.uvs = nB), dB && (jB.normals = dB);
          const IB = BB + 1,
            NB = [];
          for (let BB = 0; BB < IB + 1; BB++) NB[BB] = [];
          let uB, UB;
          const aB = new EB.m(0, 0, 0),
            pB = new EB.m(0, 0, 0),
            rB = new EB.i(0, 0),
            sB = [],
            JB = [],
            mB = [];
          let yB, kB, GB, LB = QB.length;
          nB && (kB = nB.length), dB && (GB = dB.length);
          for (let BB = 0; BB < zB.length; BB += 3) {
            JB[0] = zB[BB], JB[1] = zB[BB + 1], JB[2] = zB[BB + 2];
            for (let BB = 0; BB < 3; BB++)
              if (uB = JB[BB], UB = JB[(BB + 1) % 3], void 0 === mB[uB] && void 0 === mB[UB] ? (mB[uB] = [], mB[UB] = []) : (void 0 === mB[uB] && (mB[uB] = []), void 0 === mB[UB] && (mB[UB] = [])), void 0 === mB[uB][UB] && void 0 === mB[UB][uB]) {
                mB[uB][UB] = [], aB.x = (QB[3 * UB] - QB[3 * uB]) / IB, aB.y = (QB[3 * UB + 1] - QB[3 * uB + 1]) / IB, aB.z = (QB[3 * UB + 2] - QB[3 * uB + 2]) / IB, dB && (pB.x = (dB[3 * UB] - dB[3 * uB]) / IB, pB.y = (dB[3 * UB + 1] - dB[3 * uB + 1]) / IB, pB.z = (dB[3 * UB + 2] - dB[3 * uB + 2]) / IB), nB && (rB.x = (nB[2 * UB] - nB[2 * uB]) / IB, rB.y = (nB[2 * UB + 1] - nB[2 * uB + 1]) / IB), mB[uB][UB].push(uB);
                for (let BB = 1; BB < IB; BB++) mB[uB][UB].push(QB.length / 3), QB[LB++] = QB[3 * uB] + BB * aB.x, QB[LB++] = QB[3 * uB + 1] + BB * aB.y, QB[LB++] = QB[3 * uB + 2] + BB * aB.z, dB && (dB[GB++] = dB[3 * uB] + BB * pB.x, dB[GB++] = dB[3 * uB + 1] + BB * pB.y, dB[GB++] = dB[3 * uB + 2] + BB * pB.z), nB && (nB[kB++] = nB[2 * uB] + BB * rB.x, nB[kB++] = nB[2 * uB + 1] + BB * rB.y);
                mB[uB][UB].push(UB), mB[UB][uB] = [], yB = mB[uB][UB].length;
                for (let BB = 0; BB < yB; BB++) mB[UB][uB][BB] = mB[uB][UB][yB - 1 - BB]
              } NB[0][0] = zB[BB], NB[1][0] = mB[zB[BB]][zB[BB + 1]][1], NB[1][1] = mB[zB[BB]][zB[BB + 2]][1];
            for (let jB = 2; jB < IB; jB++) {
              NB[jB][0] = mB[zB[BB]][zB[BB + 1]][jB], NB[jB][jB] = mB[zB[BB]][zB[BB + 2]][jB], aB.x = (QB[3 * NB[jB][jB]] - QB[3 * NB[jB][0]]) / jB, aB.y = (QB[3 * NB[jB][jB] + 1] - QB[3 * NB[jB][0] + 1]) / jB, aB.z = (QB[3 * NB[jB][jB] + 2] - QB[3 * NB[jB][0] + 2]) / jB, dB && (pB.x = (dB[3 * NB[jB][jB]] - dB[3 * NB[jB][0]]) / jB, pB.y = (dB[3 * NB[jB][jB] + 1] - dB[3 * NB[jB][0] + 1]) / jB, pB.z = (dB[3 * NB[jB][jB] + 2] - dB[3 * NB[jB][0] + 2]) / jB), nB && (rB.x = (nB[2 * NB[jB][jB]] - nB[2 * NB[jB][0]]) / jB, rB.y = (nB[2 * NB[jB][jB] + 1] - nB[2 * NB[jB][0] + 1]) / jB);
              for (let BB = 1; BB < jB; BB++) NB[jB][BB] = QB.length / 3, QB[LB++] = QB[3 * NB[jB][0]] + BB * aB.x, QB[LB++] = QB[3 * NB[jB][0] + 1] + BB * aB.y, QB[LB++] = QB[3 * NB[jB][0] + 2] + BB * aB.z, dB && (dB[GB++] = dB[3 * NB[jB][0]] + BB * pB.x, dB[GB++] = dB[3 * NB[jB][0] + 1] + BB * pB.y, dB[GB++] = dB[3 * NB[jB][0] + 2] + BB * pB.z), nB && (nB[kB++] = nB[2 * NB[jB][0]] + BB * rB.x, nB[kB++] = nB[2 * NB[jB][0] + 1] + BB * rB.y)
            }
            NB[IB] = mB[zB[BB + 1]][zB[BB + 2]], sB.push(NB[0][0], NB[1][0], NB[1][1]);
            for (let BB = 1; BB < IB; BB++) {
              let jB;
              for (jB = 0; jB < BB; jB++) sB.push(NB[BB][jB], NB[BB + 1][jB], NB[BB + 1][jB + 1]), sB.push(NB[BB][jB], NB[BB + 1][jB + 1], NB[BB][jB + 1]);
              sB.push(NB[BB][jB], NB[BB + 1][jB], NB[BB + 1][jB + 1])
            }
          }
          jB.indices = sB, jB.applyToMesh(this, this.isVertexBufferUpdatable(fB.l.PositionKind))
        } else AB.c.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const BB = oB.e.ExtractFromMesh(this),
          jB = BB.uvs,
          zB = BB.indices,
          QB = BB.positions,
          nB = BB.colors,
          dB = BB.matricesIndices,
          IB = BB.matricesWeights,
          NB = BB.matricesIndicesExtra,
          uB = BB.matricesWeightsExtra;
        if (void 0 === zB || void 0 === QB || null === zB || null === QB) AB.c.Warn("VertexData contains empty entries");
        else {
          const UB = [],
            aB = [],
            pB = [],
            rB = [],
            sB = [],
            JB = [],
            mB = [],
            yB = [];
          let kB, GB = 0;
          const LB = {};
          let gB, tB;
          for (let BB = 0; BB < zB.length; BB += 3) {
            tB = [zB[BB], zB[BB + 1], zB[BB + 2]], kB = [];
            for (let BB = 0; BB < 3; BB++) {
              kB[BB] = "";
              for (let jB = 0; jB < 3; jB++) Math.abs(QB[3 * tB[BB] + jB]) < 1e-8 && (QB[3 * tB[BB] + jB] = 0), kB[BB] += QB[3 * tB[BB] + jB] + "|"
            }
            if (kB[0] != kB[1] && kB[0] != kB[2] && kB[1] != kB[2])
              for (let BB = 0; BB < 3; BB++) {
                if (gB = LB[kB[BB]], void 0 === gB) {
                  LB[kB[BB]] = GB, gB = GB++;
                  for (let jB = 0; jB < 3; jB++) UB.push(QB[3 * tB[BB] + jB]);
                  if (null !== nB && void 0 !== nB)
                    for (let jB = 0; jB < 4; jB++) rB.push(nB[4 * tB[BB] + jB]);
                  if (null !== jB && void 0 !== jB)
                    for (let zB = 0; zB < 2; zB++) pB.push(jB[2 * tB[BB] + zB]);
                  if (null !== dB && void 0 !== dB)
                    for (let jB = 0; jB < 4; jB++) sB.push(dB[4 * tB[BB] + jB]);
                  if (null !== IB && void 0 !== IB)
                    for (let jB = 0; jB < 4; jB++) JB.push(IB[4 * tB[BB] + jB]);
                  if (null !== NB && void 0 !== NB)
                    for (let jB = 0; jB < 4; jB++) mB.push(NB[4 * tB[BB] + jB]);
                  if (null !== uB && void 0 !== uB)
                    for (let jB = 0; jB < 4; jB++) yB.push(uB[4 * tB[BB] + jB])
                }
                aB.push(gB)
              }
          }
          const SB = [];
          oB.e.ComputeNormals(UB, aB, SB), BB.positions = UB, BB.indices = aB, BB.normals = SB, null !== jB && void 0 !== jB && (BB.uvs = pB), null !== nB && void 0 !== nB && (BB.colors = rB), null !== dB && void 0 !== dB && (BB.matricesIndices = sB), null !== IB && void 0 !== IB && (BB.matricesWeights = JB), null !== NB && void 0 !== NB && (BB.matricesIndicesExtra = mB), null !== IB && void 0 !== IB && (BB.matricesWeightsExtra = yB), BB.applyToMesh(this, this.isVertexBufferUpdatable(fB.l.PositionKind))
        }
      }
      static _instancedMeshFactory(BB, jB) {
        throw (0, PB.k)("InstancedMesh")
      }
      static _PhysicsImpostorParser(BB, jB, zB) {
        throw (0, PB.k)("PhysicsImpostor")
      }
      createInstance(BB) {
        const jB = vB._instancedMeshFactory(BB, this);
        return jB.parent = this.parent, jB
      }
      synchronizeInstances() {
        for (let BB = 0; BB < this.instances.length; BB++) {
          this.instances[BB]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(BB) {
        const jB = this.dQB(),
          zB = this.getVerticesData(fB.l.PositionKind);
        if (!zB || !jB) return this;
        const QB = [];
        for (let dB = 0; dB < zB.length; dB += 3) QB.push(EB.m.FromArray(zB, dB));
        const nB = [];
        return GB.e.SyncAsyncForLoop(QB.length, 40, (BB => {
          const jB = QB.length - 1 - BB,
            zB = QB[jB];
          for (let dB = 0; dB < jB; ++dB) {
            const BB = QB[dB];
            if (zB.equals(BB)) {
              nB[jB] = dB;
              break
            }
          }
        }), (() => {
          for (let BB = 0; BB < jB.length; ++BB) jB[BB] = nB[jB[BB]] || jB[BB];
          const zB = this.cL.slice(0);
          this.setIndices(jB), this.cL = zB, BB && BB(this)
        })), this
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), tB.d && tB.d.HasTags(this) && (BB.tags = tB.d.GetTags(this)), BB.position = this.position.nQB(), this.rotationQuaternion ? BB.rotationQuaternion = this.rotationQuaternion.nQB() : this.rotation && (BB.rotation = this.rotation.nQB()), BB.pp = this.pp.nQB(), this._postMultiplyPivotMatrix ? BB.pivotMatrix = this.getPivotMatrix().nQB() : BB.localMatrix = this.getPivotMatrix().nQB(), BB.isEnabled = this.isEnabled(!1), BB.isVisible = this.isVisible, BB.infiniteDistance = this.infiniteDistance, BB.pickable = this.Ny, BB.receiveShadows = this.receiveShadows, BB.billboardMode = this.billboardMode, BB.visibility = this.visibility, BB.xJ = this.xJ, BB.checkCollisions = this.checkCollisions, BB.ellipsoid = this.ellipsoid.nQB(), BB.ellipsoidOffset = this.ellipsoidOffset.nQB(), BB.cJ = this.cJ, BB.isBlocker = this.isBlocker, BB.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (BB.kY = !0), this.parent && this.parent._serializeAsParent(BB), BB.isUnIndexed = this.isUnIndexed;
        const jB = this._geometry;
        if (jB && this.cL) {
          BB.geometryUniqueId = jB.uniqueId, BB.geometryId = jB.id, BB.cL = [];
          for (let jB = 0; jB < this.cL.length; jB++) {
            const zB = this.cL[jB];
            BB.cL.push({
              materialIndex: zB.materialIndex,
              verticesStart: zB.verticesStart,
              verticesCount: zB.verticesCount,
              indexStart: zB.indexStart,
              indexCount: zB.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (BB.materialUniqueId = this.material.uniqueId, BB.materialId = this.material.id) : (this.material = null, BB.materialUniqueId = this._scene.defaultMaterial.uniqueId, BB.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (BB.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (BB.skeletonId = this.skeleton.id, BB.skeletonUniqueId = this.skeleton.uniqueId, BB.numBoneInfluencers = this.numBoneInfluencers), this.aY()._getComponent(WB.b.NAME_PHYSICSENGINE)) {
          const jB = this.getPhysicsImpostor?.();
          jB && (BB.physicsMass = jB.getParam("fN"), BB.physicsFriction = jB.getParam("friction"), BB.physicsRestitution = jB.getParam("fN"), BB.physicsImpostor = jB.type)
        }
        this.metadata && (BB.metadata = this.metadata), 0 !== this.meshBlendingTag && (BB.meshBlendingTag = this.meshBlendingTag), BB.instances = [];
        for (let zB = 0; zB < this.instances.length; zB++) {
          const jB = this.instances[zB];
          if (jB.doNotSerialize) continue;
          const QB = {
            name: jB.name,
            id: jB.id,
            isEnabled: jB.isEnabled(!1),
            isVisible: jB.isVisible,
            Ny: jB.Ny,
            checkCollisions: jB.checkCollisions,
            position: jB.position.nQB(),
            pp: jB.pp.nQB()
          };
          if (jB.parent && jB.parent._serializeAsParent(QB), jB.rotationQuaternion ? QB.rotationQuaternion = jB.rotationQuaternion.nQB() : jB.rotation && (QB.rotation = jB.rotation.nQB()), this.aY()._getComponent(WB.b.NAME_PHYSICSENGINE)) {
            const BB = jB.getPhysicsImpostor?.();
            BB && (QB.physicsMass = BB.getParam("fN"), QB.physicsFriction = BB.getParam("friction"), QB.physicsRestitution = BB.getParam("fN"), QB.physicsImpostor = BB.type)
          }
          jB.metadata && (QB.metadata = jB.metadata), jB.actionManager && (QB.actions = jB.actionManager.serialize(jB.name)), BB.instances.push(QB), ZB.b.AppendSerializedAnimations(jB, QB), QB.gy = jB.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (BB.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.tjB
          }, this._userThinInstanceBuffersStorage)) {
          const jB = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const BB in this._userThinInstanceBuffersStorage.data) jB.data[BB] = Array.from(this._userThinInstanceBuffersStorage.data[BB]), jB.sizes[BB] = this._userThinInstanceBuffersStorage.sizes[BB], jB.strides[BB] = this._userThinInstanceBuffersStorage.strides[BB];
          BB.thinInstances.userThinInstance = jB
        }
        return ZB.b.AppendSerializedAnimations(this, BB), BB.gy = this.serializeAnimationRanges(), BB.layerMask = this.layerMask, BB.alphaIndex = this.alphaIndex, BB.hasVertexAlpha = this.hasVertexAlpha, BB.overlayAlpha = this.overlayAlpha, BB.overlayColor = this.overlayColor.nQB(), BB.renderOverlay = this.renderOverlay, BB.applyFog = this.applyFog, this.actionManager && (BB.actions = this.actionManager.serialize(this.name)), BB
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const BB = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (BB && BB.vertexCount) {
          if (BB.vertexCount !== this.getTotalVertices()) return AB.c.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (BB.isUsingTextureForTargets) return;
          for (let jB = 0; jB < BB.numInfluencers; jB++) {
            const zB = BB.getActiveTarget(jB),
              QB = zB.getPositions();
            if (!QB) return void AB.c.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(fB.l.PositionKind + jB, QB, !1, 3);
            const nB = zB.getNormals();
            nB && this.geometry.setVerticesData(fB.l.NormalKind + jB, nB, !1, 3);
            const dB = zB.getTangents();
            dB && this.geometry.setVerticesData(fB.l.TangentKind + jB, dB, !1, 3);
            const IB = zB.getUVs();
            IB && this.geometry.setVerticesData(fB.l.UVKind + "_" + jB, IB, !1, 2);
            const NB = zB.getUV2s();
            NB && this.geometry.setVerticesData(fB.l.UV2Kind + "_" + jB, NB, !1, 2);
            const uB = zB.getColors();
            uB && this.geometry.setVerticesData(fB.l.ColorKind + jB, uB, !1, 4)
          }
        } else {
          let BB = 0;
          for (; this.geometry.isVerticesDataPresent(fB.l.PositionKind + BB);) this.geometry.removeVerticesData(fB.l.PositionKind + BB), this.geometry.isVerticesDataPresent(fB.l.NormalKind + BB) && this.geometry.removeVerticesData(fB.l.NormalKind + BB), this.geometry.isVerticesDataPresent(fB.l.TangentKind + BB) && this.geometry.removeVerticesData(fB.l.TangentKind + BB), this.geometry.isVerticesDataPresent(fB.l.UVKind + "_" + BB) && this.geometry.removeVerticesData(fB.l.UVKind + "_" + BB), this.geometry.isVerticesDataPresent(fB.l.UV2Kind + "_" + BB) && this.geometry.removeVerticesData(fB.l.UV2Kind + "_" + BB), this.geometry.isVerticesDataPresent(fB.l.ColorKind + BB) && this.geometry.removeVerticesData(fB.l.ColorKind + BB), BB++
        }
      }
      static Parse(BB, jB, zB) {
        let QB, nB = !1;
        if (BB.type && "LinesMesh" === BB.type ? QB = vB._LinesMeshParser(BB, jB) : BB.type && "GroundMesh" === BB.type ? QB = vB._GroundMeshParser(BB, jB) : BB.type && "GoldbergMesh" === BB.type ? QB = vB._GoldbergMeshParser(BB, jB) : BB.type && "GreasedLineMesh" === BB.type ? QB = vB._GreasedLineMeshParser(BB, jB) : BB.type && "TrailMesh" === BB.type ? QB = vB._TrailMeshParser(BB, jB) : BB.type && "GaussianSplattingMesh" === BB.type ? (QB = BB._isCompound ? vB._GaussianSplattingCompoundMeshParser(BB, jB) : vB._GaussianSplattingMeshParser(BB, jB), nB = !0) : BB.type && "GaussianSplattingPartProxyMesh" === BB.type ? (QB = vB._GaussianSplattingPartProxyMeshParser(BB, jB), nB = !0) : QB = new vB(BB.name, jB), QB.id = BB.id, QB._waitingParsedUniqueId = BB.uniqueId, tB.d && tB.d.AddTagsTo(QB, BB.tags), QB.position = EB.m.FromArray(BB.position), void 0 !== BB.metadata && (QB.metadata = BB.metadata), void 0 !== BB.meshBlendingTag && (QB.meshBlendingTag = BB.meshBlendingTag), BB.rotationQuaternion ? QB.rotationQuaternion = EB.d.FromArray(BB.rotationQuaternion) : BB.rotation && (QB.rotation = EB.m.FromArray(BB.rotation)), QB.pp = EB.m.FromArray(BB.pp), BB.localMatrix ? QB.setPreTransformMatrix(EB.c.FromArray(BB.localMatrix)) : BB.pivotMatrix && QB.setPivotMatrix(EB.c.FromArray(BB.pivotMatrix)), QB.mH(BB.isEnabled), QB.isVisible = BB.isVisible, QB.infiniteDistance = BB.infiniteDistance, QB.xJ = !!BB.xJ, QB.showBoundingBox = BB.showBoundingBox, QB.showSubMeshesBoundingBox = BB.showSubMeshesBoundingBox, void 0 !== BB.applyFog && (QB.applyFog = BB.applyFog), void 0 !== BB.pickable && (QB.Ny = BB.pickable), void 0 !== BB.alphaIndex && (QB.alphaIndex = BB.alphaIndex), QB.receiveShadows = BB.receiveShadows, void 0 !== BB.billboardMode && (QB.billboardMode = BB.billboardMode), void 0 !== BB.visibility && (QB.visibility = BB.visibility), QB.checkCollisions = BB.checkCollisions, QB.cJ = !!BB.cJ, BB.ellipsoid && (QB.ellipsoid = EB.m.FromArray(BB.ellipsoid)), BB.ellipsoidOffset && (QB.ellipsoidOffset = EB.m.FromArray(BB.ellipsoidOffset)), null != BB.overrideMaterialSideOrientation && (QB.sideOrientation = BB.overrideMaterialSideOrientation), void 0 !== BB.sideOrientation && (QB.sideOrientation = BB.sideOrientation), void 0 !== BB.isBlocker && (QB.isBlocker = BB.isBlocker), QB._shouldGenerateFlatShading = BB.useFlatShading, BB.kY && (QB._waitingData.kY = BB.kY), void 0 !== BB.parentId && (QB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (QB._waitingParentInstanceIndex = BB.parentInstanceIndex), void 0 !== BB.actions && (QB._waitingData.actions = BB.actions), void 0 !== BB.overlayAlpha && (QB.overlayAlpha = BB.overlayAlpha), void 0 !== BB.overlayColor && (QB.overlayColor = iB.d.FromArray(BB.overlayColor)), void 0 !== BB.renderOverlay && (QB.renderOverlay = BB.renderOverlay), QB.isUnIndexed = !!BB.isUnIndexed, QB.hasVertexAlpha = BB.hasVertexAlpha, BB.delayLoadingFile ? (QB.delayLoadState = 4, QB.delayLoadingFile = zB + BB.delayLoadingFile, QB.buildBoundingInfo(EB.m.FromArray(BB.boundingBoxMinimum), EB.m.FromArray(BB.boundingBoxMaximum)), BB._binaryInfo && (QB._binaryInfo = BB._binaryInfo), QB._delayInfo = [], BB.hasUVs && QB._delayInfo.push(fB.l.UVKind), BB.hasUVs2 && QB._delayInfo.push(fB.l.UV2Kind), BB.hasUVs3 && QB._delayInfo.push(fB.l.UV3Kind), BB.hasUVs4 && QB._delayInfo.push(fB.l.UV4Kind), BB.hasUVs5 && QB._delayInfo.push(fB.l.UV5Kind), BB.hasUVs6 && QB._delayInfo.push(fB.l.UV6Kind), BB.hasColors && QB._delayInfo.push(fB.l.ColorKind), BB.hasMatricesIndices && QB._delayInfo.push(fB.l.MatricesIndicesKind), BB.hasMatricesWeights && QB._delayInfo.push(fB.l.MatricesWeightsKind), QB._delayLoadingFunction = HB.c._ImportGeometry, XB.c.ForceFullSceneLoadingForIncremental && QB._checkDelayState()) : nB || HB.c._ImportGeometry(BB, QB), BB.materialUniqueId ? QB._waitingMaterialId = BB.materialUniqueId : BB.materialId && (QB._waitingMaterialId = BB.materialId), BB.morphTargetManagerId > -1 && (QB._waitingMorphTargetManagerId = BB.morphTargetManagerId), void 0 !== BB.skeletonId && null !== BB.skeletonId && (QB.skeleton = jB.getLastSkeletonById(BB.skeletonId), QB._waitingSkeletonId = BB.skeletonId, BB.numBoneInfluencers && (QB.numBoneInfluencers = BB.numBoneInfluencers)), void 0 !== BB.skeletonUniqueId && null !== BB.skeletonUniqueId && (QB._waitingSkeletonUniqueId = BB.skeletonUniqueId), BB.animations) {
          for (let jB = 0; jB < BB.animations.length; jB++) {
            const zB = BB.animations[jB],
              nB = (0, TB.b)("BABYLON.Animation");
            nB && QB.animations.push(nB.Parse(zB))
          }
          qB.c.ParseAnimationRanges(QB, BB, jB)
        }
        if (BB.autoAnimate && jB.beginAnimation(QB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), BB.layerMask && !isNaN(BB.layerMask) ? QB.layerMask = Math.abs(parseInt(BB.layerMask)) : QB.layerMask = 268435455, BB.physicsImpostor && (QB.physicsImpostor = vB._PhysicsImpostorParser(jB, QB, BB)), BB.lodMeshIds && (QB._waitingData.lods = {
            ids: BB.lodMeshIds,
            distances: BB.lodDistances ? BB.lodDistances : null,
            coverages: BB.lodCoverages ? BB.lodCoverages : null
          }), BB.instances)
          for (let dB = 0; dB < BB.instances.length; dB++) {
            const zB = BB.instances[dB],
              nB = QB.createInstance(zB.name);
            if (zB.id && (nB.id = zB.id), tB.d && (zB.tags ? tB.d.AddTagsTo(nB, zB.tags) : tB.d.AddTagsTo(nB, BB.tags)), nB.position = EB.m.FromArray(zB.position), void 0 !== zB.metadata && (nB.metadata = zB.metadata), void 0 !== zB.parentId && (nB._waitingParentId = zB.parentId), void 0 !== zB.parentInstanceIndex && (nB._waitingParentInstanceIndex = zB.parentInstanceIndex), void 0 !== zB.isEnabled && null !== zB.isEnabled && nB.mH(zB.isEnabled), void 0 !== zB.isVisible && null !== zB.isVisible && (nB.isVisible = zB.isVisible), void 0 !== zB.Ny && null !== zB.Ny && (nB.Ny = zB.Ny), zB.rotationQuaternion ? nB.rotationQuaternion = EB.d.FromArray(zB.rotationQuaternion) : zB.rotation && (nB.rotation = EB.m.FromArray(zB.rotation)), nB.pp = EB.m.FromArray(zB.pp), void 0 != zB.checkCollisions && null != zB.checkCollisions && (nB.checkCollisions = zB.checkCollisions), void 0 != zB.pickable && null != zB.pickable && (nB.Ny = zB.pickable), void 0 != zB.showBoundingBox && null != zB.showBoundingBox && (nB.showBoundingBox = zB.showBoundingBox), void 0 != zB.showSubMeshesBoundingBox && null != zB.showSubMeshesBoundingBox && (nB.showSubMeshesBoundingBox = zB.showSubMeshesBoundingBox), void 0 != zB.alphaIndex && null != zB.showSubMeshesBoundingBox && (nB.alphaIndex = zB.alphaIndex), zB.physicsImpostor && (nB.physicsImpostor = vB._PhysicsImpostorParser(jB, nB, zB)), void 0 !== zB.actions && (nB._waitingData.actions = zB.actions), zB.animations) {
              for (let BB = 0; BB < zB.animations.length; BB++) {
                const jB = zB.animations[BB],
                  QB = (0, TB.b)("BABYLON.Animation");
                QB && nB.animations.push(QB.Parse(jB))
              }
              qB.c.ParseAnimationRanges(nB, zB, jB), zB.autoAnimate && jB.beginAnimation(nB, zB.autoAnimateFrom, zB.autoAnimateTo, zB.autoAnimateLoop, zB.autoAnimateSpeed || 1)
            }
          }
        if (BB.thinInstances) {
          const jB = BB.thinInstances;
          if (QB.tjB = !!jB.enablePicking, jB.matrixData ? (QB.i5("matrix", new Float32Array(jB.matrixData), 16, !1), QB._thinInstanceDataStorage.matrixBufferSize = jB.matrixBufferSize, QB._thinInstanceDataStorage.instancesCount = jB.instancesCount) : QB._thinInstanceDataStorage.matrixBufferSize = jB.matrixBufferSize, BB.thinInstances.userThinInstance) {
            const jB = BB.thinInstances.userThinInstance;
            for (const BB in jB.data) QB.i5(BB, new Float32Array(jB.data[BB]), jB.strides[BB], !1), QB._userThinInstanceBuffersStorage.sizes[BB] = jB.sizes[BB]
          }
        }
        return QB
      }
      setPositionsForCPUSkinning() {
        const BB = this._internalMeshDataInfo;
        if (!BB._sourcePositions) {
          const jB = this.getVerticesData(fB.l.PositionKind);
          if (!jB) return BB._sourcePositions;
          BB._sourcePositions = new Float32Array(jB), this.isVertexBufferUpdatable(fB.l.PositionKind) || this.setVerticesData(fB.l.PositionKind, jB, !0)
        }
        return BB._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const BB = this._internalMeshDataInfo;
        if (!BB._sourceNormals) {
          const jB = this.getVerticesData(fB.l.NormalKind);
          if (!jB) return BB._sourceNormals;
          BB._sourceNormals = new Float32Array(jB), this.isVertexBufferUpdatable(fB.l.NormalKind) || this.setVerticesData(fB.l.NormalKind, jB, !0)
        }
        return BB._sourceNormals
      }
      applySkeleton(BB) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.aY().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.aY().getFrameId(), !this.isVerticesDataPresent(fB.l.PositionKind)) return this;
        if (!this.isVerticesDataPresent(fB.l.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(fB.l.MatricesWeightsKind)) return this;
        const jB = this.isVerticesDataPresent(fB.l.NormalKind),
          zB = this._internalMeshDataInfo;
        if (!zB._sourcePositions) {
          const BB = this.cL.slice();
          this.setPositionsForCPUSkinning(), this.cL = BB
        }
        jB && !zB._sourceNormals && this.setNormalsForCPUSkinning();
        let QB = this.getVerticesData(fB.l.PositionKind);
        if (!QB) return this;
        QB instanceof Float32Array || (QB = new Float32Array(QB));
        let nB = this.getVerticesData(fB.l.NormalKind);
        if (jB) {
          if (!nB) return this;
          nB instanceof Float32Array || (nB = new Float32Array(nB))
        }
        const dB = this.getVerticesData(fB.l.MatricesIndicesKind),
          IB = this.getVerticesData(fB.l.MatricesWeightsKind);
        if (!IB || !dB) return this;
        const NB = this.numBoneInfluencers > 4,
          uB = NB ? this.getVerticesData(fB.l.MatricesIndicesExtraKind) : null,
          UB = NB ? this.getVerticesData(fB.l.MatricesWeightsExtraKind) : null,
          aB = BB.getTransformMatrices(this),
          pB = EB.m.Zero(),
          rB = new EB.c,
          sB = new EB.c;
        let JB, mB = 0;
        for (let yB = 0; yB < QB.length; yB += 3, mB += 4) {
          let BB;
          for (JB = 0; JB < 4; JB++) BB = IB[mB + JB], BB > 0 && (EB.c.FromFloat32ArrayToRefScaled(aB, Math.floor(16 * dB[mB + JB]), BB, sB), rB.addToSelf(sB));
          if (NB)
            for (JB = 0; JB < 4; JB++) BB = UB[mB + JB], BB > 0 && (EB.c.FromFloat32ArrayToRefScaled(aB, Math.floor(16 * uB[mB + JB]), BB, sB), rB.addToSelf(sB));
          EB.m.TransformCoordinatesFromFloatsToRef(zB._sourcePositions[yB], zB._sourcePositions[yB + 1], zB._sourcePositions[yB + 2], rB, pB), pB.toArray(QB, yB), jB && (EB.m.TransformNormalFromFloatsToRef(zB._sourceNormals[yB], zB._sourceNormals[yB + 1], zB._sourceNormals[yB + 2], rB, pB), pB.toArray(nB, yB)), rB.reset()
        }
        return this.updateVerticesData(fB.l.PositionKind, QB), jB && this.updateVerticesData(fB.l.NormalKind, nB), this
      }
      static MinMax(BB) {
        let jB = null,
          zB = null;
        for (const QB of BB) {
          const BB = QB.rV().boundingBox;
          jB && zB ? (jB.minimizeInPlace(BB.minimumWorld), zB.maximizeInPlace(BB.maximumWorld)) : (jB = BB.minimumWorld.clone(), zB = BB.maximumWorld.clone())
        }
        return jB && zB ? {
          min: jB,
          max: zB
        } : {
          min: EB.m.Zero(),
          max: EB.m.Zero()
        }
      }
      static Center(BB) {
        const jB = BB instanceof Array ? vB.MinMax(BB) : BB;
        return EB.m.Center(jB.min, jB.max)
      }
      static MergeMeshes(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 ? arguments[5] : void 0;
        return (0, SB.m)(vB._MergeMeshesCoroutine(BB, jB, zB, QB, nB, dB, !1))
      }
      static async MergeMeshesAsync(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 ? arguments[4] : void 0,
          dB = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, SB.l)(vB._MergeMeshesCoroutine(BB, jB, zB, QB, nB, dB, !0), (0, SB.d)())
      }
      static * _MergeMeshesCoroutine(BB) {
        let jB, zB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          QB = arguments.length > 2 ? arguments[2] : void 0,
          nB = arguments.length > 3 ? arguments[3] : void 0,
          dB = arguments.length > 4 ? arguments[4] : void 0,
          IB = arguments.length > 5 ? arguments[5] : void 0,
          NB = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (BB = BB.filter(Boolean)).length) return null;
        if (!QB) {
          let zB = 0;
          for (jB = 0; jB < BB.length; jB++)
            if (zB += BB[jB].getTotalVertices(), zB >= 65536) return AB.c.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const uB = BB[0];
        IB && (dB = !1, BB.sort(((BB, jB) => (BB.material?.uniqueId ?? -1) - (jB.material?.uniqueId ?? -1))));
        const UB = new Array,
          aB = new Array,
          pB = new Array,
          rB = BB[0].sideOrientation;
        for (jB = 0; jB < BB.length; jB++) {
          const zB = BB[jB];
          if (zB.rY) return AB.c.Warn("Cannot merge instance meshes."), null;
          if (rB !== zB.sideOrientation) return AB.c.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (dB || IB) {
            const BB = pB.reduce(((BB, jB) => Math.max(BB, jB.start + jB.count)), 0);
            if (IB)
              if (zB.material) {
                const jB = zB.material;
                if (jB instanceof hB.b) {
                  for (let BB = 0; BB < jB.Y5.length; BB++) UB.indexOf(jB.Y5[BB]) < 0 && UB.push(jB.Y5[BB]);
                  for (let QB = 0; QB < zB.cL.length; QB++) aB.push(UB.indexOf(jB.Y5[zB.cL[QB].materialIndex])), pB.push({
                    start: BB + zB.cL[QB].indexStart,
                    count: zB.cL[QB].indexCount
                  })
                } else {
                  UB.indexOf(jB) < 0 && UB.push(jB);
                  for (let QB = 0; QB < zB.cL.length; QB++) aB.push(UB.indexOf(jB)), pB.push({
                    start: BB + zB.cL[QB].indexStart,
                    count: zB.cL[QB].indexCount
                  })
                }
              } else
                for (let jB = 0; jB < zB.cL.length; jB++) aB.push(0), pB.push({
                  start: BB + zB.cL[jB].indexStart,
                  count: zB.cL[jB].indexCount
                });
            else pB.push({
              start: BB,
              count: zB.getTotalIndices()
            })
          }
        }
        if (IB && pB.length > 1) {
          let BB = 0;
          for (let jB = 1; jB < pB.length; jB++) {
            const zB = pB[BB],
              QB = pB[jB];
            aB[jB] === aB[BB] && zB.start + zB.count === QB.start ? zB.count += QB.count : (BB++, pB[BB] = QB, aB[BB] = aB[jB])
          }
          pB.length = BB + 1, aB.length = BB + 1
        }
        const sB = BB => {
            const jB = BB.computeWorldMatrix(!0);
            return {
              vertexData: oB.e.ExtractFromMesh(BB, !1, !1),
              transform: jB
            }
          },
          {
            vertexData: JB,
            transform: mB
          } = sB(BB[0]);
        NB && (yield);
        const yB = new Array(BB.length - 1);
        for (let SB = 1; SB < BB.length; SB++) yB[SB - 1] = sB(BB[SB]), NB && (yield);
        const kB = JB._mergeCoroutine(mB, yB, QB, NB, !zB);
        let GB = kB.next();
        for (; !GB.done;) NB && (yield), GB = kB.next();
        const LB = GB.value;
        nB || (nB = new vB(uB.name + "_merged", uB.aY()));
        const gB = LB._applyToCoroutine(nB, void 0, NB);
        let tB = gB.next();
        for (; !tB.done;) NB && (yield), tB = gB.next();
        if (nB.checkCollisions = uB.checkCollisions, nB.sideOrientation = uB.sideOrientation, zB)
          for (jB = 0; jB < BB.length; jB++) BB[jB].dispose();
        if (dB || IB) {
          for (nB.releaseSubMeshes(), jB = 0; jB < pB.length;) FB.d.CreateFromIndices(0, pB[jB].start, pB[jB].count, nB, void 0, !1), jB++;
          for (const BB of nB.cL) BB.refreshBoundingInfo();
          nB.computeWorldMatrix(!0)
        }
        if (IB) {
          const BB = new hB.b(uB.name + "_merged", uB.aY());
          BB.Y5 = UB;
          for (let jB = 0; jB < nB.cL.length; jB++) nB.cL[jB].materialIndex = aB[jB];
          nB.material = BB
        } else nB.material = uB.material;
        return nB
      }
      T_(BB) {
        BB._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(BB)
      }
      e_(BB) {
        const jB = BB._indexInSourceMeshInstanceArray;
        if (-1 != jB) {
          if (jB !== this.instances.length - 1) {
            const BB = this.instances[this.instances.length - 1];
            this.instances[jB] = BB, BB._indexInSourceMeshInstanceArray = jB
          }
          BB._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === YB.b.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(BB) {
        const jB = this.aY();
        return jB.forcePointsCloud ? YB.b.PointFillMode : jB.forceWireframe ? YB.b.WireFrameFillMode : this.overrideRenderingFillMode ?? BB
      }
      setMaterialByID(BB) {
        return this.setMaterialById(BB)
      }
      static CreateRibbon(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(BB, jB, zB, QB, nB, dB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(BB, jB, zB, QB, nB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(BB, jB, zB, QB, nB, dB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(BB, jB, zB, QB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(BB, jB, zB, QB, nB, dB, IB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(BB, jB, zB, QB, nB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(BB, jB, zB, QB, nB, dB, IB, NB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(BB, jB, zB, QB, nB, dB, IB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(BB, jB, zB, QB, nB, dB, IB, NB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(BB, jB, zB, QB, nB, dB, IB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(BB, jB, zB, QB, nB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(BB, jB, zB, QB, nB, dB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(BB, jB, zB, QB, nB, dB, IB, NB, uB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(BB, jB, zB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(BB, jB, zB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(BB, jB, zB, QB, nB, dB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(BB, jB, zB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(BB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    vB.FRONTSIDE = oB.e.FRONTSIDE, vB.BACKSIDE = oB.e.BACKSIDE, vB.DOUBLESIDE = oB.e.DOUBLESIDE, vB.DEFAULTSIDE = oB.e.DEFAULTSIDE, vB.NO_CAP = 0, vB.CAP_START = 1, vB.CAP_END = 2, vB.CAP_ALL = 3, vB.NO_FLIP = 0, vB.FLIP_TILE = 1, vB.ROTATE_TILE = 2, vB.FLIP_ROW = 3, vB.ROTATE_ROW = 4, vB.FLIP_N_ROTATE_TILE = 5, vB.FLIP_N_ROTATE_ROW = 6, vB.CENTER = 0, vB.LEFT = 1, vB.RIGHT = 2, vB.TOP = 3, vB.BOTTOM = 4, vB.INSTANCEDMESH_SORT_TRANSPARENT = !1, vB._GroundMeshParser = (BB, jB) => {
      throw (0, PB.k)("GroundMesh")
    }, vB._GoldbergMeshParser = (BB, jB) => {
      throw (0, PB.k)("GoldbergMesh")
    }, vB._LinesMeshParser = (BB, jB) => {
      throw (0, PB.k)("LinesMesh")
    }, vB._GreasedLineMeshParser = (BB, jB) => {
      throw (0, PB.k)("GreasedLineMesh")
    }, vB._GreasedLineRibbonMeshParser = (BB, jB) => {
      throw (0, PB.k)("GreasedLineRibbonMesh")
    }, vB._TrailMeshParser = (BB, jB) => {
      throw (0, PB.k)("TrailMesh")
    }, vB._GaussianSplattingMeshParser = (BB, jB) => {
      throw (0, PB.k)("GaussianSplattingMesh")
    }, vB._GaussianSplattingPartProxyMeshParser = (BB, jB) => {
      throw (0, PB.k)("GaussianSplattingPartProxyMesh")
    }, vB._GaussianSplattingCompoundMeshParser = (BB, jB) => {
      throw (0, PB.k)("GaussianSplattingCompoundMesh")
    };
    let RB = !1;

    function OB() {
      RB || (RB = !0, (0, TB.d)("BABYLON.Mesh", vB))
    }(QB = vB.prototype).bY ?? (QB.bY = (0, PB.i)("Mesh", "bY")), (nB = vB.prototype).simplify ?? (nB.simplify = (0, PB.i)("Mesh", "simplify")), (dB = vB.prototype).thinInstanceAdd ?? (dB.thinInstanceAdd = (0, PB.i)("Mesh", "thinInstanceAdd")), (IB = vB.prototype).thinInstanceAddSelf ?? (IB.thinInstanceAddSelf = (0, PB.i)("Mesh", "thinInstanceAddSelf")), (NB = vB.prototype).thinInstanceRegisterAttribute ?? (NB.thinInstanceRegisterAttribute = (0, PB.i)("Mesh", "thinInstanceRegisterAttribute")), (uB = vB.prototype).thinInstanceSetMatrixAt ?? (uB.thinInstanceSetMatrixAt = (0, PB.i)("Mesh", "thinInstanceSetMatrixAt")), (UB = vB.prototype).thinInstanceSetAttributeAt ?? (UB.thinInstanceSetAttributeAt = (0, PB.i)("Mesh", "thinInstanceSetAttributeAt")), (aB = vB.prototype).i5 ?? (aB.i5 = (0, PB.i)("Mesh", "i5")), (pB = vB.prototype).thinInstanceGetWorldMatrices ?? (pB.thinInstanceGetWorldMatrices = (0, PB.i)("Mesh", "thinInstanceGetWorldMatrices")), (rB = vB.prototype).v_ ?? (rB.v_ = (0, PB.i)("Mesh", "v_")), (sB = vB.prototype).thinInstancePartialBufferUpdate ?? (sB.thinInstancePartialBufferUpdate = (0, PB.i)("Mesh", "thinInstancePartialBufferUpdate")), (JB = vB.prototype).thinInstanceRefreshBoundingInfo ?? (JB.thinInstanceRefreshBoundingInfo = (0, PB.i)("Mesh", "thinInstanceRefreshBoundingInfo")), (mB = vB.prototype).getEmittedParticleSystems ?? (mB.getEmittedParticleSystems = (0, PB.i)("Mesh", "getEmittedParticleSystems")), (yB = vB.prototype).getHierarchyEmittedParticleSystems ?? (yB.getHierarchyEmittedParticleSystems = (0, PB.i)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(vB.prototype, "edgesShareWithInstances") || Object.defineProperty(vB.prototype, "edgesShareWithInstances", (0, PB.f)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(vB.prototype, "tjB") || Object.defineProperty(vB.prototype, "tjB", (0, PB.f)("Mesh", "tjB")), Object.getOwnPropertyDescriptor(vB.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(vB.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, PB.f)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(vB.prototype, "F_") || Object.defineProperty(vB.prototype, "F_", (0, PB.f)("Mesh", "F_"))
  },
  40519: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => JB
    });
    var QB = zB(40066),
      nB = zB(37171),
      dB = zB(40211),
      IB = zB(39965),
      NB = zB(37379),
      uB = zB(38783),
      UB = zB(40068),
      aB = zB(40512),
      pB = zB(40113),
      rB = zB(40388);
    class sB {}
    let JB = (() => {
      var BB;
      let jB, zB, JB, mB, yB = [];
      return BB = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, aB.h)(this._applyToCoroutine.bind(this)), this.uniqueId = BB._UniqueIdGenerator, BB._UniqueIdGenerator++
        }
        set(BB, jB) {
          switch (BB.length || uB.c.Warn(`Setting vertex data kind '${jB}' with an empty array`), jB) {
            case dB.l.PositionKind:
              this.positions = BB;
              break;
            case dB.l.NormalKind:
              this.normals = BB;
              break;
            case dB.l.TangentKind:
              this.tangents = BB;
              break;
            case dB.l.UVKind:
              this.uvs = BB;
              break;
            case dB.l.UV2Kind:
              this.uvs2 = BB;
              break;
            case dB.l.UV3Kind:
              this.uvs3 = BB;
              break;
            case dB.l.UV4Kind:
              this.uvs4 = BB;
              break;
            case dB.l.UV5Kind:
              this.uvs5 = BB;
              break;
            case dB.l.UV6Kind:
              this.uvs6 = BB;
              break;
            case dB.l.ColorKind:
              this.colors = BB;
              break;
            case dB.l.MatricesIndicesKind:
              this.matricesIndices = BB;
              break;
            case dB.l.MatricesWeightsKind:
              this.matricesWeights = BB;
              break;
            case dB.l.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = BB;
              break;
            case dB.l.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = BB
          }
        }
        applyToMesh(BB, jB) {
          return this._applyTo(BB, jB, !1), this
        }
        applyToGeometry(BB, jB) {
          return this._applyTo(BB, jB, !1), this
        }
        updateMesh(BB) {
          return this._update(BB), this
        }
        updateGeometry(BB) {
          return this._update(BB), this
        }* _applyToCoroutine(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zB = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (BB.setVerticesData(dB.l.PositionKind, this.positions, jB), zB && (yield)), this.normals && (BB.setVerticesData(dB.l.NormalKind, this.normals, jB), zB && (yield)), this.tangents && (BB.setVerticesData(dB.l.TangentKind, this.tangents, jB), zB && (yield)), this.uvs && (BB.setVerticesData(dB.l.UVKind, this.uvs, jB), zB && (yield)), this.uvs2 && (BB.setVerticesData(dB.l.UV2Kind, this.uvs2, jB), zB && (yield)), this.uvs3 && (BB.setVerticesData(dB.l.UV3Kind, this.uvs3, jB), zB && (yield)), this.uvs4 && (BB.setVerticesData(dB.l.UV4Kind, this.uvs4, jB), zB && (yield)), this.uvs5 && (BB.setVerticesData(dB.l.UV5Kind, this.uvs5, jB), zB && (yield)), this.uvs6 && (BB.setVerticesData(dB.l.UV6Kind, this.uvs6, jB), zB && (yield)), this.colors) {
            const QB = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            BB.setVerticesData(dB.l.ColorKind, this.colors, jB, QB), this.hasVertexAlpha && void 0 !== BB.hasVertexAlpha && (BB.hasVertexAlpha = !0), zB && (yield)
          }
          if (this.matricesIndices && (BB.setVerticesData(dB.l.MatricesIndicesKind, this.matricesIndices, jB), zB && (yield)), this.matricesWeights && (BB.setVerticesData(dB.l.MatricesWeightsKind, this.matricesWeights, jB), zB && (yield)), this.matricesIndicesExtra && (BB.setVerticesData(dB.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, jB), zB && (yield)), this.matricesWeightsExtra && (BB.setVerticesData(dB.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, jB), zB && (yield)), this.indices ? (BB.setIndices(this.indices, null, jB), zB && (yield)) : BB.setIndices([], null), BB.cL && this.materialInfos && this.materialInfos.length > 1) {
            const jB = BB;
            jB.cL = [];
            for (const BB of this.materialInfos) new rB.d(BB.materialIndex, BB.verticesStart, BB.verticesCount, BB.indexStart, BB.indexCount, jB)
          }
          return this
        }
        _update(BB, jB, zB) {
          return this.positions && BB.updateVerticesData(dB.l.PositionKind, this.positions, jB, zB), this.normals && BB.updateVerticesData(dB.l.NormalKind, this.normals, jB, zB), this.tangents && BB.updateVerticesData(dB.l.TangentKind, this.tangents, jB, zB), this.uvs && BB.updateVerticesData(dB.l.UVKind, this.uvs, jB, zB), this.uvs2 && BB.updateVerticesData(dB.l.UV2Kind, this.uvs2, jB, zB), this.uvs3 && BB.updateVerticesData(dB.l.UV3Kind, this.uvs3, jB, zB), this.uvs4 && BB.updateVerticesData(dB.l.UV4Kind, this.uvs4, jB, zB), this.uvs5 && BB.updateVerticesData(dB.l.UV5Kind, this.uvs5, jB, zB), this.uvs6 && BB.updateVerticesData(dB.l.UV6Kind, this.uvs6, jB, zB), this.colors && BB.updateVerticesData(dB.l.ColorKind, this.colors, jB, zB), this.matricesIndices && BB.updateVerticesData(dB.l.MatricesIndicesKind, this.matricesIndices, jB, zB), this.matricesWeights && BB.updateVerticesData(dB.l.MatricesWeightsKind, this.matricesWeights, jB, zB), this.matricesIndicesExtra && BB.updateVerticesData(dB.l.MatricesIndicesExtraKind, this.matricesIndicesExtra, jB, zB), this.matricesWeightsExtra && BB.updateVerticesData(dB.l.MatricesWeightsExtraKind, this.matricesWeightsExtra, jB, zB), this.indices && BB.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const dB = nB.h.KJ[0],
            IB = nB.h.KJ[1];
          for (let NB = zB; NB < zB + QB; NB += 3) nB.m.FromArrayToRef(BB, NB, dB), nB.m.TransformCoordinatesToRef(dB, jB, IB), BB[NB] = IB.x, BB[NB + 1] = IB.y, BB[NB + 2] = IB.z
        }
        static _TransformVector3Normals(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const dB = nB.h.KJ[0],
            IB = nB.h.KJ[1];
          for (let NB = zB; NB < zB + QB; NB += 3) nB.m.FromArrayToRef(BB, NB, dB), nB.m.TransformNormalToRef(dB, jB, IB), BB[NB] = IB.x, BB[NB + 1] = IB.y, BB[NB + 2] = IB.z
        }
        static _TransformVector4Normals(BB, jB) {
          let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const dB = nB.h.Vector4[0],
            IB = nB.h.Vector4[1];
          for (let NB = zB; NB < zB + QB; NB += 4) nB.n.FromArrayToRef(BB, NB, dB), nB.n.TransformNormalToRef(dB, jB, IB), BB[NB] = IB.x, BB[NB + 1] = IB.y, BB[NB + 2] = IB.z, BB[NB + 3] = IB.w
        }
        static _FlipFaces(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length;
          for (let QB = jB; QB < jB + zB; QB += 3) {
            const jB = BB[QB + 1];
            BB[QB + 1] = BB[QB + 2], BB[QB + 2] = jB
          }
        }
        transform(jB) {
          const zB = jB.determinant() < 0;
          return this.positions && BB._TransformVector3Coordinates(this.positions, jB), this.normals && BB._TransformVector3Normals(this.normals, jB), this.tangents && BB._TransformVector4Normals(this.tangents, jB), zB && this.indices && BB._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const jB = [];
          for (const zB of this.materialInfos) {
            const QB = new BB;
            if (this.positions && (QB.positions = this.positions.slice(3 * zB.verticesStart, 3 * (zB.verticesCount + zB.verticesStart))), this.normals && (QB.normals = this.normals.slice(3 * zB.verticesStart, 3 * (zB.verticesCount + zB.verticesStart))), this.tangents && (QB.tangents = this.tangents.slice(4 * zB.verticesStart, 4 * (zB.verticesCount + zB.verticesStart))), this.colors && (QB.colors = this.colors.slice(4 * zB.verticesStart, 4 * (zB.verticesCount + zB.verticesStart))), this.uvs && (QB.uvs = this.uvs.slice(2 * zB.verticesStart, 2 * (zB.verticesCount + zB.verticesStart))), this.uvs2 && (QB.uvs2 = this.uvs2.slice(2 * zB.verticesStart, 2 * (zB.verticesCount + zB.verticesStart))), this.uvs3 && (QB.uvs3 = this.uvs3.slice(2 * zB.verticesStart, 2 * (zB.verticesCount + zB.verticesStart))), this.uvs4 && (QB.uvs4 = this.uvs4.slice(2 * zB.verticesStart, 2 * (zB.verticesCount + zB.verticesStart))), this.uvs5 && (QB.uvs5 = this.uvs5.slice(2 * zB.verticesStart, 2 * (zB.verticesCount + zB.verticesStart))), this.uvs6 && (QB.uvs6 = this.uvs6.slice(2 * zB.verticesStart, 2 * (zB.verticesCount + zB.verticesStart))), this.matricesIndices && (QB.matricesIndices = this.matricesIndices.slice(4 * zB.verticesStart, 4 * (zB.verticesCount + zB.verticesStart))), this.matricesIndicesExtra && (QB.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * zB.verticesStart, 4 * (zB.verticesCount + zB.verticesStart))), this.matricesWeights && (QB.matricesWeights = this.matricesWeights.slice(4 * zB.verticesStart, 4 * (zB.verticesCount + zB.verticesStart))), this.matricesWeightsExtra && (QB.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * zB.verticesStart, 4 * (zB.verticesCount + zB.verticesStart))), this.indices) {
              QB.indices = [];
              for (let BB = zB.indexStart; BB < zB.indexStart + zB.indexCount; BB++) QB.indices.push(this.indices[BB] - zB.verticesStart)
            }
            const nB = new sB;
            nB.indexStart = 0, nB.indexCount = QB.indices ? QB.indices.length : 0, nB.materialIndex = zB.materialIndex, nB.verticesStart = 0, nB.verticesCount = (QB.positions ? QB.positions.length : 0) / 3, QB.materialInfos = [nB], jB.push(QB)
          }
          return jB
        }
        merge(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const dB = Array.isArray(BB) ? BB.map((BB => ({
            vertexData: BB
          }))) : [{
            vertexData: BB
          }];
          return (0, aB.m)(this._mergeCoroutine(void 0, dB, jB, !1, zB, QB, nB))
        }* _mergeCoroutine(jB, zB) {
          let QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            nB = arguments.length > 3 ? arguments[3] : void 0,
            IB = arguments.length > 4 ? arguments[4] : void 0,
            NB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            uB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let UB = zB.map((BB => BB.vertexData)),
            aB = this;
          if (uB)
            for (const BB of UB) BB && (BB._validate(), !this.normals && BB.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && BB.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && BB.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && BB.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && BB.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && BB.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && BB.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && BB.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && BB.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && BB.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && BB.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && BB.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && BB.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const BB of UB)
            if (BB)
              if (uB) this.normals && !BB.normals && (BB.normals = new Float32Array(BB.positions.length)), this.tangents && !BB.tangents && (BB.tangents = new Float32Array(BB.positions.length / 3 * 4)), this.uvs && !BB.uvs && (BB.uvs = new Float32Array(BB.positions.length / 3 * 2)), this.uvs2 && !BB.uvs2 && (BB.uvs2 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs3 && !BB.uvs3 && (BB.uvs3 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs4 && !BB.uvs4 && (BB.uvs4 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs5 && !BB.uvs5 && (BB.uvs5 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs6 && !BB.uvs6 && (BB.uvs6 = new Float32Array(BB.positions.length / 3 * 2)), this.colors && !BB.colors && (BB.colors = new Float32Array(BB.positions.length / 3 * 4), BB.colors.fill(1)), this.matricesIndices && !BB.matricesIndices && (BB.matricesIndices = new Float32Array(BB.positions.length / 3 * 4)), this.matricesWeights && !BB.matricesWeights && (BB.matricesWeights = new Float32Array(BB.positions.length / 3 * 4)), this.matricesIndicesExtra && !BB.matricesIndicesExtra && (BB.matricesIndicesExtra = new Float32Array(BB.positions.length / 3 * 4)), this.matricesWeightsExtra && !BB.matricesWeightsExtra && (BB.matricesWeightsExtra = new Float32Array(BB.positions.length / 3 * 4));
              else if (BB._validate(), !this.normals !== !BB.normals || !this.tangents !== !BB.tangents || !this.uvs !== !BB.uvs || !this.uvs2 !== !BB.uvs2 || !this.uvs3 !== !BB.uvs3 || !this.uvs4 !== !BB.uvs4 || !this.uvs5 !== !BB.uvs5 || !this.uvs6 !== !BB.uvs6 || !this.colors !== !BB.colors || !this.matricesIndices !== !BB.matricesIndices || !this.matricesWeights !== !BB.matricesWeights || !this.matricesIndicesExtra !== !BB.matricesIndicesExtra || !this.matricesWeightsExtra !== !BB.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (NB) {
            let BB, QB = 0,
              nB = 0;
            const dB = [];
            let IB = null;
            const NB = [];
            for (const zB of this.splitBasedOnMaterialID()) NB.push({
              vertexData: zB,
              transform: jB
            });
            for (const jB of zB)
              if (jB.vertexData)
                for (const BB of jB.vertexData.splitBasedOnMaterialID()) NB.push({
                  vertexData: BB,
                  transform: jB.transform
                });
            NB.sort(((BB, jB) => {
              const zB = BB.vertexData.materialInfos ? BB.vertexData.materialInfos[0].materialIndex : 0,
                QB = jB.vertexData.materialInfos ? jB.vertexData.materialInfos[0].materialIndex : 0;
              return zB > QB ? 1 : zB === QB ? 0 : -1
            }));
            for (const jB of NB) {
              const zB = jB.vertexData;
              if (BB = zB.materialInfos ? zB.materialInfos[0].materialIndex : 0, IB && IB.materialIndex === BB) IB.indexCount += zB.indices.length, IB.verticesCount += zB.positions.length / 3;
              else {
                const jB = new sB;
                jB.materialIndex = BB, jB.indexStart = QB, jB.indexCount = zB.indices.length, jB.verticesStart = nB, jB.verticesCount = zB.positions.length / 3, dB.push(jB), IB = jB
              }
              QB += zB.indices.length, nB += zB.positions.length / 3
            }
            const uB = NB.splice(0, 1)[0];
            aB = uB.vertexData, jB = uB.transform, UB = NB.map((BB => BB.vertexData)), zB = NB, this.materialInfos = dB
          }
          const pB = UB.reduce(((BB, jB) => BB + (jB.indices?.length ?? 0)), aB.indices?.length ?? 0);
          let rB = IB || UB.some((BB => BB.indices === aB.indices)) ? aB.indices?.slice() : aB.indices;
          if (pB > 0) {
            let dB = rB?.length ?? 0;
            if (rB || (rB = new Array(pB)), rB.length !== pB) {
              if (Array.isArray(rB)) rB.length = pB;
              else {
                const BB = QB || rB instanceof Uint32Array ? new Uint32Array(pB) : new Uint16Array(pB);
                BB.set(rB), rB = BB
              }
              jB && jB.determinant() < 0 && BB._FlipFaces(rB, 0, dB)
            }
            let IB = aB.positions ? aB.positions.length / 3 : 0;
            for (const {
                vertexData: jB,
                transform: QB
              }
              of zB)
              if (jB.indices) {
                for (let BB = 0; BB < jB.indices.length; BB++) rB[dB + BB] = jB.indices[BB] + IB;
                QB && QB.determinant() < 0 && BB._FlipFaces(rB, dB, jB.indices.length), IB += jB.positions.length / 3, dB += jB.indices.length, nB && (yield)
              }
          }
          return this.indices = rB, this.positions = BB._MergeElement(dB.l.PositionKind, aB.positions, jB, zB.map((BB => [BB.vertexData.positions, BB.transform]))), nB && (yield), aB.normals && (this.normals = BB._MergeElement(dB.l.NormalKind, aB.normals, jB, zB.map((BB => [BB.vertexData.normals, BB.transform]))), nB && (yield)), aB.tangents && (this.tangents = BB._MergeElement(dB.l.TangentKind, aB.tangents, jB, zB.map((BB => [BB.vertexData.tangents, BB.transform]))), nB && (yield)), aB.uvs && (this.uvs = BB._MergeElement(dB.l.UVKind, aB.uvs, jB, zB.map((BB => [BB.vertexData.uvs, BB.transform]))), nB && (yield)), aB.uvs2 && (this.uvs2 = BB._MergeElement(dB.l.UV2Kind, aB.uvs2, jB, zB.map((BB => [BB.vertexData.uvs2, BB.transform]))), nB && (yield)), aB.uvs3 && (this.uvs3 = BB._MergeElement(dB.l.UV3Kind, aB.uvs3, jB, zB.map((BB => [BB.vertexData.uvs3, BB.transform]))), nB && (yield)), aB.uvs4 && (this.uvs4 = BB._MergeElement(dB.l.UV4Kind, aB.uvs4, jB, zB.map((BB => [BB.vertexData.uvs4, BB.transform]))), nB && (yield)), aB.uvs5 && (this.uvs5 = BB._MergeElement(dB.l.UV5Kind, aB.uvs5, jB, zB.map((BB => [BB.vertexData.uvs5, BB.transform]))), nB && (yield)), aB.uvs6 && (this.uvs6 = BB._MergeElement(dB.l.UV6Kind, aB.uvs6, jB, zB.map((BB => [BB.vertexData.uvs6, BB.transform]))), nB && (yield)), aB.colors && (this.colors = BB._MergeElement(dB.l.ColorKind, aB.colors, jB, zB.map((BB => [BB.vertexData.colors, BB.transform]))), (void 0 !== aB.hasVertexAlpha || zB.some((BB => void 0 !== BB.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = aB.hasVertexAlpha || zB.some((BB => BB.vertexData.hasVertexAlpha))), nB && (yield)), aB.matricesIndices && (this.matricesIndices = BB._MergeElement(dB.l.MatricesIndicesKind, aB.matricesIndices, jB, zB.map((BB => [BB.vertexData.matricesIndices, BB.transform]))), nB && (yield)), aB.matricesWeights && (this.matricesWeights = BB._MergeElement(dB.l.MatricesWeightsKind, aB.matricesWeights, jB, zB.map((BB => [BB.vertexData.matricesWeights, BB.transform]))), nB && (yield)), aB.matricesIndicesExtra && (this.matricesIndicesExtra = BB._MergeElement(dB.l.MatricesIndicesExtraKind, aB.matricesIndicesExtra, jB, zB.map((BB => [BB.vertexData.matricesIndicesExtra, BB.transform]))), nB && (yield)), aB.matricesWeightsExtra && (this.matricesWeightsExtra = BB._MergeElement(dB.l.MatricesWeightsExtraKind, aB.matricesWeightsExtra, jB, zB.map((BB => [BB.vertexData.matricesWeightsExtra, BB.transform])))), this
        }
        static _MergeElement(jB, zB, QB, nB) {
          const IB = nB.filter((BB => null !== BB[0] && void 0 !== BB[0]));
          if (!zB && 0 == IB.length) return zB;
          if (!zB) return this._MergeElement(jB, IB[0][0], IB[0][1], IB.slice(1));
          const NB = IB.reduce(((BB, jB) => BB + jB[0].length), zB.length),
            uB = jB === dB.l.PositionKind ? BB._TransformVector3Coordinates : jB === dB.l.NormalKind ? BB._TransformVector3Normals : jB === dB.l.TangentKind ? BB._TransformVector4Normals : () => {};
          if (zB instanceof Float32Array) {
            const BB = new Float32Array(NB);
            BB.set(zB), QB && uB(BB, QB, 0, zB.length);
            let jB = zB.length;
            for (const [zB, QB] of IB) BB.set(zB, jB), QB && uB(BB, QB, jB, zB.length), jB += zB.length;
            return BB
          } {
            const BB = new Array(NB);
            for (let QB = 0; QB < zB.length; QB++) BB[QB] = zB[QB];
            QB && uB(BB, QB, 0, zB.length);
            let jB = zB.length;
            for (const [zB, QB] of IB) {
              for (let QB = 0; QB < zB.length; QB++) BB[jB + QB] = zB[QB];
              QB && uB(BB, QB, jB, zB.length), jB += zB.length
            }
            return BB
          }
        }
        _validate() {
          if (!this.positions) throw new pB.i("Positions are required", pB.e.MeshInvalidPositionsError);
          const BB = (BB, jB) => {
              const zB = (0, dB.i)(BB);
              if (jB.length % zB !== 0) throw new Error("The " + BB + "s array count must be a multiple of " + zB);
              return jB.length / zB
            },
            jB = BB(dB.l.PositionKind, this.positions),
            zB = (zB, QB) => {
              const nB = BB(zB, QB);
              if (nB !== jB) throw new Error("The " + zB + "s element count (" + nB + ") does not match the positions count (" + jB + ")")
            };
          this.normals && zB(dB.l.NormalKind, this.normals), this.tangents && zB(dB.l.TangentKind, this.tangents), this.uvs && zB(dB.l.UVKind, this.uvs), this.uvs2 && zB(dB.l.UV2Kind, this.uvs2), this.uvs3 && zB(dB.l.UV3Kind, this.uvs3), this.uvs4 && zB(dB.l.UV4Kind, this.uvs4), this.uvs5 && zB(dB.l.UV5Kind, this.uvs5), this.uvs6 && zB(dB.l.UV6Kind, this.uvs6), this.colors && zB(dB.l.ColorKind, this.colors), this.matricesIndices && zB(dB.l.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && zB(dB.l.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && zB(dB.l.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && zB(dB.l.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const jB = this.serialize();
          return BB.Parse(jB)
        }
        serialize() {
          const BB = {};
          if (this.positions && (BB.positions = Array.from(this.positions)), this.normals && (BB.normals = Array.from(this.normals)), this.tangents && (BB.tangents = Array.from(this.tangents)), this.uvs && (BB.uvs = Array.from(this.uvs)), this.uvs2 && (BB.uvs2 = Array.from(this.uvs2)), this.uvs3 && (BB.uvs3 = Array.from(this.uvs3)), this.uvs4 && (BB.uvs4 = Array.from(this.uvs4)), this.uvs5 && (BB.uvs5 = Array.from(this.uvs5)), this.uvs6 && (BB.uvs6 = Array.from(this.uvs6)), this.colors && (BB.colors = Array.from(this.colors), BB.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (BB.matricesIndices = Array.from(this.matricesIndices), BB.matricesIndicesExpanded = !0), this.matricesWeights && (BB.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (BB.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), BB.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (BB.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), BB.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            BB.materialInfos = [];
            for (const jB of this.materialInfos) {
              const zB = {
                indexStart: jB.indexStart,
                indexCount: jB.indexCount,
                materialIndex: jB.materialIndex,
                verticesStart: jB.verticesStart,
                verticesCount: jB.verticesCount
              };
              BB.materialInfos.push(zB)
            }
          }
          return BB
        }
        static ExtractFromMesh(jB, zB, QB) {
          return BB._ExtractFrom(jB, zB, QB)
        }
        static ExtractFromGeometry(jB, zB, QB) {
          return BB._ExtractFrom(jB, zB, QB)
        }
        static _ExtractFrom(jB, zB, QB) {
          const nB = new BB;
          if (jB.isVerticesDataPresent(dB.l.PositionKind) && (nB.positions = jB.getVerticesData(dB.l.PositionKind, zB, QB)), jB.isVerticesDataPresent(dB.l.NormalKind) && (nB.normals = jB.getVerticesData(dB.l.NormalKind, zB, QB)), jB.isVerticesDataPresent(dB.l.TangentKind) && (nB.tangents = jB.getVerticesData(dB.l.TangentKind, zB, QB)), jB.isVerticesDataPresent(dB.l.UVKind) && (nB.uvs = jB.getVerticesData(dB.l.UVKind, zB, QB)), jB.isVerticesDataPresent(dB.l.UV2Kind) && (nB.uvs2 = jB.getVerticesData(dB.l.UV2Kind, zB, QB)), jB.isVerticesDataPresent(dB.l.UV3Kind) && (nB.uvs3 = jB.getVerticesData(dB.l.UV3Kind, zB, QB)), jB.isVerticesDataPresent(dB.l.UV4Kind) && (nB.uvs4 = jB.getVerticesData(dB.l.UV4Kind, zB, QB)), jB.isVerticesDataPresent(dB.l.UV5Kind) && (nB.uvs5 = jB.getVerticesData(dB.l.UV5Kind, zB, QB)), jB.isVerticesDataPresent(dB.l.UV6Kind) && (nB.uvs6 = jB.getVerticesData(dB.l.UV6Kind, zB, QB)), jB.isVerticesDataPresent(dB.l.ColorKind)) {
            const BB = jB.geometry || jB,
              IB = BB.getVertexBuffer(dB.l.ColorKind),
              NB = BB.getVerticesData(dB.l.ColorKind, zB, QB);
            if (3 === IB.getSize()) {
              const BB = new Float32Array(4 * NB.length / 3);
              for (let jB = 0, zB = 0; jB < NB.length; jB += 3, zB += 4) BB[zB] = NB[jB], BB[zB + 1] = NB[jB + 1], BB[zB + 2] = NB[jB + 2], BB[zB + 3] = 1;
              nB.colors = BB
            } else {
              if (4 !== IB.getSize()) throw new Error(`Unexpected number of color components: ${IB.getSize()}`);
              nB.colors = NB
            }
          }
          return jB.isVerticesDataPresent(dB.l.MatricesIndicesKind) && (nB.matricesIndices = jB.getVerticesData(dB.l.MatricesIndicesKind, zB, QB)), jB.isVerticesDataPresent(dB.l.MatricesWeightsKind) && (nB.matricesWeights = jB.getVerticesData(dB.l.MatricesWeightsKind, zB, QB)), jB.isVerticesDataPresent(dB.l.MatricesIndicesExtraKind) && (nB.matricesIndicesExtra = jB.getVerticesData(dB.l.MatricesIndicesExtraKind, zB, QB)), jB.isVerticesDataPresent(dB.l.MatricesWeightsExtraKind) && (nB.matricesWeightsExtra = jB.getVerticesData(dB.l.MatricesWeightsExtraKind, zB, QB)), nB.indices = jB.dQB(zB, QB), nB
        }
        static CreateRibbon(BB) {
          throw (0, IB.k)("ribbonBuilder")
        }
        static CreateBox(BB) {
          throw (0, IB.k)("boxBuilder")
        }
        static CreateTiledBox(BB) {
          throw (0, IB.k)("tiledBoxBuilder")
        }
        static CreateTiledPlane(BB) {
          throw (0, IB.k)("tiledPlaneBuilder")
        }
        static CreateSphere(BB) {
          throw (0, IB.k)("sphereBuilder")
        }
        static CreateCylinder(BB) {
          throw (0, IB.k)("cylinderBuilder")
        }
        static CreateTorus(BB) {
          throw (0, IB.k)("torusBuilder")
        }
        static CreateLineSystem(BB) {
          throw (0, IB.k)("linesBuilder")
        }
        static CreateDashedLines(BB) {
          throw (0, IB.k)("linesBuilder")
        }
        static CreateGround(BB) {
          throw (0, IB.k)("groundBuilder")
        }
        static CreateTiledGround(BB) {
          throw (0, IB.k)("groundBuilder")
        }
        static CreateGroundFromHeightMap(BB) {
          throw (0, IB.k)("groundBuilder")
        }
        static CreatePlane(BB) {
          throw (0, IB.k)("planeBuilder")
        }
        static CreateDisc(BB) {
          throw (0, IB.k)("discBuilder")
        }
        static CreatePolygon(BB, jB, zB, QB, nB, dB, NB) {
          throw (0, IB.k)("polygonBuilder")
        }
        static CreateIcoSphere(BB) {
          throw (0, IB.k)("icoSphereBuilder")
        }
        static CreatePolyhedron(BB) {
          throw (0, IB.k)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || nB.m.Up();
          throw (0, IB.k)("capsuleBuilder")
        }
        static CreateTorusKnot(BB) {
          throw (0, IB.k)("torusKnotBuilder")
        }
        static ComputeNormals(BB, jB, zB, QB) {
          let dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB, kB, GB, LB, gB, tB, SB, MB, EB, iB = !1,
            qB = !1,
            fB = !1,
            oB = !1,
            HB = 1,
            DB = 0,
            FB = null;
          QB && (iB = !!QB.facetNormals, qB = !!QB.facetPositions, fB = !!QB.facetPartitioning, HB = !0 === QB.useRightHandedSystem ? -1 : 1, DB = QB.ratio || 0, oB = !!QB.depthSort, FB = QB.distanceTo, oB && void 0 === FB && (FB = nB.m.Zero()));
          let YB = 0,
            VB = 0,
            hB = 0,
            XB = 0;
          for (fB && QB && QB.bbSize && (YB = QB.subDiv.X * DB / QB.bbSize.x, VB = QB.subDiv.Y * DB / QB.bbSize.y, hB = QB.subDiv.Z * DB / QB.bbSize.z, XB = QB.subDiv.max * QB.subDiv.max, QB.facetPartitioning.length = 0), dB = 0; dB < BB.length; dB++) zB[dB] = 0;
          const ZB = jB.length / 3 | 0;
          for (dB = 0; dB < ZB; dB++) {
            if (yB = 3 * jB[3 * dB], kB = yB + 1, GB = yB + 2, LB = 3 * jB[3 * dB + 1], gB = LB + 1, tB = LB + 2, SB = 3 * jB[3 * dB + 2], MB = SB + 1, EB = SB + 2, IB = BB[yB] - BB[LB], NB = BB[kB] - BB[gB], uB = BB[GB] - BB[tB], UB = BB[SB] - BB[LB], aB = BB[MB] - BB[gB], pB = BB[EB] - BB[tB], rB = HB * (NB * pB - uB * aB), sB = HB * (uB * UB - IB * pB), JB = HB * (IB * aB - NB * UB), mB = Math.sqrt(rB * rB + sB * sB + JB * JB), mB = 0 === mB ? 1 : mB, rB /= mB, sB /= mB, JB /= mB, iB && QB && (QB.facetNormals[dB].x = rB, QB.facetNormals[dB].y = sB, QB.facetNormals[dB].z = JB), qB && QB && (QB.facetPositions[dB].x = (BB[yB] + BB[LB] + BB[SB]) / 3, QB.facetPositions[dB].y = (BB[kB] + BB[gB] + BB[MB]) / 3, QB.facetPositions[dB].z = (BB[GB] + BB[tB] + BB[EB]) / 3), fB && QB) {
              const jB = Math.floor((QB.facetPositions[dB].x - QB.bInfo.minimum.x * DB) * YB),
                zB = Math.floor((QB.facetPositions[dB].y - QB.bInfo.minimum.y * DB) * VB),
                nB = Math.floor((QB.facetPositions[dB].z - QB.bInfo.minimum.z * DB) * hB),
                IB = Math.floor((BB[yB] - QB.bInfo.minimum.x * DB) * YB),
                NB = Math.floor((BB[kB] - QB.bInfo.minimum.y * DB) * VB),
                uB = Math.floor((BB[GB] - QB.bInfo.minimum.z * DB) * hB),
                UB = Math.floor((BB[LB] - QB.bInfo.minimum.x * DB) * YB),
                aB = Math.floor((BB[gB] - QB.bInfo.minimum.y * DB) * VB),
                pB = Math.floor((BB[tB] - QB.bInfo.minimum.z * DB) * hB),
                rB = Math.floor((BB[SB] - QB.bInfo.minimum.x * DB) * YB),
                sB = Math.floor((BB[MB] - QB.bInfo.minimum.y * DB) * VB),
                JB = Math.floor((BB[EB] - QB.bInfo.minimum.z * DB) * hB),
                mB = IB + QB.subDiv.max * NB + XB * uB,
                iB = UB + QB.subDiv.max * aB + XB * pB,
                qB = rB + QB.subDiv.max * sB + XB * JB,
                fB = jB + QB.subDiv.max * zB + XB * nB;
              QB.facetPartitioning[fB] = QB.facetPartitioning[fB] ? QB.facetPartitioning[fB] : [], QB.facetPartitioning[mB] = QB.facetPartitioning[mB] ? QB.facetPartitioning[mB] : [], QB.facetPartitioning[iB] = QB.facetPartitioning[iB] ? QB.facetPartitioning[iB] : [], QB.facetPartitioning[qB] = QB.facetPartitioning[qB] ? QB.facetPartitioning[qB] : [], QB.facetPartitioning[mB].push(dB), iB != mB && QB.facetPartitioning[iB].push(dB), qB != iB && qB != mB && QB.facetPartitioning[qB].push(dB), fB != mB && fB != iB && fB != qB && QB.facetPartitioning[fB].push(dB)
            }
            if (oB && QB && QB.facetPositions) {
              const BB = QB.depthSortedFacets[dB];
              BB.ind = 3 * dB, BB.sqDistance = nB.m.DistanceSquared(QB.facetPositions[dB], FB)
            }
            zB[yB] += rB, zB[kB] += sB, zB[GB] += JB, zB[LB] += rB, zB[gB] += sB, zB[tB] += JB, zB[SB] += rB, zB[MB] += sB, zB[EB] += JB
          }
          for (dB = 0; dB < zB.length / 3; dB++) rB = zB[3 * dB], sB = zB[3 * dB + 1], JB = zB[3 * dB + 2], mB = Math.sqrt(rB * rB + sB * sB + JB * JB), mB = 0 === mB ? 1 : mB, rB /= mB, sB /= mB, JB /= mB, zB[3 * dB] = rB, zB[3 * dB + 1] = sB, zB[3 * dB + 2] = JB
        }
        static _ComputeSides(jB, zB, QB, dB, IB, NB, uB) {
          const UB = QB.length,
            aB = dB.length;
          let pB, rB;
          switch (jB = jB || BB.DEFAULTSIDE) {
            case BB.FRONTSIDE:
              break;
            case BB.BACKSIDE:
              for (pB = 0; pB < UB; pB += 3) {
                const BB = QB[pB];
                QB[pB] = QB[pB + 2], QB[pB + 2] = BB
              }
              for (rB = 0; rB < aB; rB++) dB[rB] = -dB[rB];
              break;
            case BB.DOUBLESIDE: {
              const BB = zB.length,
                jB = BB / 3;
              for (let QB = 0; QB < BB; QB++) zB[BB + QB] = zB[QB];
              for (pB = 0; pB < UB; pB += 3) QB[pB + UB] = QB[pB + 2] + jB, QB[pB + 1 + UB] = QB[pB + 1] + jB, QB[pB + 2 + UB] = QB[pB] + jB;
              for (rB = 0; rB < aB; rB++) dB[aB + rB] = -dB[rB];
              const sB = IB.length;
              let JB;
              for (JB = 0; JB < sB; JB++) IB[JB + sB] = IB[JB];
              for (NB = NB || new nB.n(0, 0, 1, 1), uB = uB || new nB.n(0, 0, 1, 1), JB = 0, pB = 0; pB < sB / 2; pB++) IB[JB] = NB.x + (NB.z - NB.x) * IB[JB], IB[JB + 1] = NB.y + (NB.w - NB.y) * IB[JB + 1], IB[JB + sB] = uB.x + (uB.z - uB.x) * IB[JB + sB], IB[JB + sB + 1] = uB.y + (uB.w - uB.y) * IB[JB + sB + 1], JB += 2;
              break
            }
          }
        }
        static Parse(jB) {
          const zB = new BB,
            QB = jB.positions;
          QB && zB.set(QB, dB.l.PositionKind);
          const nB = jB.normals;
          nB && zB.set(nB, dB.l.NormalKind);
          const IB = jB.tangents;
          IB && zB.set(IB, dB.l.TangentKind);
          const uB = jB.uvs;
          uB && zB.set(uB, dB.l.UVKind);
          const UB = jB.uvs2;
          UB && zB.set(UB, dB.l.UV2Kind);
          const aB = jB.uvs3;
          aB && zB.set(aB, dB.l.UV3Kind);
          const pB = jB.uvs4;
          pB && zB.set(pB, dB.l.UV4Kind);
          const rB = jB.uvs5;
          rB && zB.set(rB, dB.l.UV5Kind);
          const JB = jB.uvs6;
          JB && zB.set(JB, dB.l.UV6Kind);
          const mB = jB.colors;
          mB && (zB.set(NB.g.CheckColors4(mB, QB.length / 3), dB.l.ColorKind), void 0 !== jB.hasVertexAlpha && (zB.hasVertexAlpha = jB.hasVertexAlpha));
          const yB = jB.matricesIndices;
          yB && zB.set(yB, dB.l.MatricesIndicesKind);
          const kB = jB.matricesWeights;
          kB && zB.set(kB, dB.l.MatricesWeightsKind);
          const GB = jB.indices;
          GB && (zB.indices = GB);
          const LB = jB.materialInfos;
          if (LB) {
            zB.materialInfos = [];
            for (const BB of LB) {
              const jB = new sB;
              jB.indexCount = BB.indexCount, jB.indexStart = BB.indexStart, jB.verticesCount = BB.verticesCount, jB.verticesStart = BB.verticesStart, jB.materialIndex = BB.materialIndex, zB.materialInfos.push(jB)
            }
          }
          return zB
        }
        static ImportVertexData(jB, zB) {
          const QB = BB.Parse(jB);
          zB.setAllVerticesData(QB, jB.updatable)
        }
      }, (() => {
        const nB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        jB = [UB.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], zB = [UB.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], JB = [UB.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], mB = [UB.f.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, QB.e)(BB, null, jB, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector3Coordinates" in BB,
            get: BB => BB._TransformVector3Coordinates
          },
          metadata: nB
        }, null, yB), (0, QB.e)(BB, null, zB, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector3Normals" in BB,
            get: BB => BB._TransformVector3Normals
          },
          metadata: nB
        }, null, yB), (0, QB.e)(BB, null, JB, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector4Normals" in BB,
            get: BB => BB._TransformVector4Normals
          },
          metadata: nB
        }, null, yB), (0, QB.e)(BB, null, mB, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: BB => "_FlipFaces" in BB,
            get: BB => BB._FlipFaces
          },
          metadata: nB
        }, null, yB), nB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: nB
        })
      })(), BB.FRONTSIDE = ((0, QB.g)(BB, yB), 0), BB.BACKSIDE = 1, BB.DOUBLESIDE = 2, BB.DEFAULTSIDE = 0, BB._UniqueIdGenerator = 0, BB
    })()
  },
  40584: (BB, jB, zB) => {
    var QB = zB(37171),
      nB = zB(38783),
      dB = zB(40404),
      IB = zB(40504),
      NB = zB(40211);
    const uB = "bakedVertexAnimationSettingsInstanced";

    function UB(BB) {
      const jB = BB.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return jB instanceof Float32Array || jB instanceof Uint16Array
    }

    function aB(BB, jB, zB, QB) {
      zB.S_(Number.POSITIVE_INFINITY), QB.S_(Number.NEGATIVE_INFINITY);
      for (let nB = 0; nB < 3 * jB; nB += 3) {
        const jB = BB[nB],
          dB = BB[nB + 1],
          IB = BB[nB + 2];
        jB < zB.x && (zB.x = jB), dB < zB.y && (zB.y = dB), IB < zB.z && (zB.z = IB), jB > QB.x && (QB.x = jB), dB > QB.y && (QB.y = dB), IB > QB.z && (QB.z = IB)
      }
    }

    function pB(BB, jB, zB) {
      zB && (BB.x -= BB.x * zB.x + zB.y, BB.y -= BB.y * zB.x + zB.y, BB.z -= BB.z * zB.x + zB.y, jB.x += jB.x * zB.x + zB.y, jB.y += jB.y * zB.x + zB.y, jB.z += jB.z * zB.x + zB.y)
    }

    function rB(BB, jB, zB, nB, dB) {
      const IB = QB.h.KJ[7],
        NB = QB.h.KJ[8];
      for (let uB = 0; uB < 2; ++uB)
        for (let UB = 0; UB < 2; ++UB)
          for (let aB = 0; aB < 2; ++aB) IB.set(uB ? jB.x : BB.x, UB ? jB.y : BB.y, aB ? jB.z : BB.z), QB.m.TransformCoordinatesToRef(IB, zB, NB), nB.minimizeInPlace(NB), dB.maximizeInPlace(NB)
    }

    function sB(BB, jB, zB, nB, dB) {
      const IB = QB.h.KJ[7];
      for (let NB = 0; NB < 3 * jB; NB += 3) QB.m.TransformCoordinatesFromFloatsToRef(BB[NB], BB[NB + 1], BB[NB + 2], zB, IB), nB.minimizeInPlace(IB), dB.maximizeInPlace(IB)
    }
    let JB = !1;
    JB || (JB = !0, IB.b.prototype.thinInstanceAdd = function(BB) {
      let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.aY().wJ().getCaps().instancedArrays) return nB.c.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(BB) ? BB.length : 1);
      const zB = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(BB))
        for (let QB = 0; QB < BB.length; ++QB) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB[QB], QB === BB.length - 1 && jB);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB, jB);
      return zB
    }, IB.b.prototype.thinInstanceAddSelf = function() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(QB.c.IdentityReadOnly, BB)
    }, IB.b.prototype.thinInstanceRegisterAttribute = function(BB, jB) {
      BB === NB.l.ColorKind && (BB = NB.l.ColorInstanceKind), this.removeVerticesData(BB), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[BB] = jB, this._userThinInstanceBuffersStorage.sizes[BB] = jB * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[BB] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[BB]), this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new NB.l(this.wJ(), this._userThinInstanceBuffersStorage.data[BB], BB, !0, !1, jB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB])
    }, IB.b.prototype.thinInstanceSetMatrixAt = function(BB, jB) {
      let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || BB >= this._thinInstanceDataStorage.instancesCount) return !1;
      const QB = this._thinInstanceDataStorage.matrixData;
      return jB.copyToArray(QB, 16 * BB), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[BB] = jB), zB && (this.v_("matrix"), this.cJ || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, IB.b.prototype.thinInstanceSetAttributeAt = function(BB, jB, zB) {
      let QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return BB === NB.l.ColorKind && (BB = NB.l.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[BB] || jB >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(BB, 0), this._userThinInstanceBuffersStorage.data[BB].set(zB, jB * this._userThinInstanceBuffersStorage.strides[BB]), QB && this.v_(BB), !0)
    }, Object.defineProperty(IB.b.prototype, "F_", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(BB) {
        const jB = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        BB <= (jB ? jB.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = BB)
      },
      enumerable: !0,
      configurable: !0
    }), IB.b.prototype._thinInstanceCreateMatrixBuffer = function(BB, jB) {
      let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const QB = new NB.e(this.wJ(), jB, !zB, 16, !1, !0);
      for (let nB = 0; nB < 4; nB++) this.setVerticesBuffer(QB.createVertexBuffer(BB + nB, 4 * nB, 4));
      return QB
    }, IB.b.prototype.i5 = function(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (zB = zB || 16, "matrix" === BB) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = jB ? jB.length : 32 * zB, this._thinInstanceDataStorage.matrixData = jB, this._thinInstanceDataStorage.worldMatrices = null, null !== jB ? (this._thinInstanceDataStorage.instancesCount = jB.length / zB, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", jB, QB), this.cJ || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.cJ || this.refreshBoundingInfo());
      else if ("previousMatrix" === BB) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = jB, null !== jB && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", jB, QB));
      else if ("splatIndex" === BB && jB) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = jB.length / zB, this._userThinInstanceBuffersStorage.data[BB] = jB, this._userThinInstanceBuffersStorage.strides[BB] = zB, this._userThinInstanceBuffersStorage.sizes[BB] = jB.length;
        const QB = new NB.e(this.wJ(), jB, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = QB;
        for (let jB = 0; jB < 4; jB++) this.setVerticesBuffer(QB.createVertexBuffer(BB + jB, 4 * jB, 4))
      } else BB === NB.l.ColorKind && (BB = NB.l.ColorInstanceKind), null === jB ? this._userThinInstanceBuffersStorage?.data[BB] && (this.removeVerticesData(BB), delete this._userThinInstanceBuffersStorage.data[BB], delete this._userThinInstanceBuffersStorage.strides[BB], delete this._userThinInstanceBuffersStorage.sizes[BB], delete this._userThinInstanceBuffersStorage.vertexBuffers[BB]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[BB] = jB, this._userThinInstanceBuffersStorage.strides[BB] = zB, this._userThinInstanceBuffersStorage.sizes[BB] = jB.length, this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new NB.l(this.wJ(), jB, BB, !QB, !1, zB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
    }, IB.b.prototype.v_ = function(BB) {
      "matrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === BB ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[BB], 0, this._thinInstanceDataStorage.instancesCount) : (BB === NB.l.ColorKind && (BB = NB.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[BB].isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._userThinInstanceBuffersStorage.vertexBuffers[BB].updateDirectly(this._userThinInstanceBuffersStorage.data[BB], 0)))
    }, IB.b.prototype.thinInstancePartialBufferUpdate = function(BB, jB, zB) {
      if ("matrix" === BB) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof jB ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * zB * Float32Array.BYTES_PER_ELEMENT, 16 * jB), 16 * zB) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(jB, zB));
      else if (BB === NB.l.ColorKind && (BB = NB.l.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB]) {
        const QB = this._userThinInstanceBuffersStorage.vertexBuffers[BB];
        if ("number" === typeof jB) {
          const QB = new Float32Array(this._userThinInstanceBuffersStorage.data[BB].buffer, this._userThinInstanceBuffersStorage.data[BB].byteOffset + zB * this._userThinInstanceBuffersStorage.strides[BB] * Float32Array.BYTES_PER_ELEMENT, jB * this._userThinInstanceBuffersStorage.strides[BB]);
          this._userThinInstanceBuffersStorage.vertexBuffers[BB].updateDirectly(QB, zB * this._userThinInstanceBuffersStorage.strides[BB])
        } else QB.updateDirectly(jB, zB)
      }
    }, IB.b.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const BB = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let jB = 0; jB < this._thinInstanceDataStorage.instancesCount; ++jB) this._thinInstanceDataStorage.worldMatrices[jB] = QB.c.FromArray(BB, 16 * jB)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, IB.b.prototype.thinInstanceRefreshBoundingInfo = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        nB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const IB = this._thinInstanceDataStorage.boundingVectors;
      if (BB || !this.rawBoundingInfo) {
        if (IB.length = 0, nB && function(BB, jB, zB) {
            const nB = BB._userThinInstanceBuffersStorage,
              IB = nB?.data[uB],
              JB = nB?.strides[uB];
            if (!IB || !JB || JB < 4 || !UB(BB)) return !1;
            const mB = BB._thinInstanceDataStorage.matrixData;
            if (!mB) return !1;
            const yB = {},
              kB = QB.h.Vector4[0],
              GB = QB.h.KJ[1],
              LB = QB.h.KJ[2],
              gB = QB.h.KJ[3],
              tB = QB.h.KJ[4],
              SB = QB.h.KJ[5],
              MB = QB.h.KJ[6],
              EB = QB.h.Matrix[2],
              iB = BB.geometry ? BB.geometry.boundingBias : null,
              qB = BB.getTotalVertices();
            GB.S_(Number.POSITIVE_INFINITY), LB.S_(Number.NEGATIVE_INFINITY), gB.S_(Number.POSITIVE_INFINITY), tB.S_(Number.NEGATIVE_INFINITY);
            for (let dB = 0; dB < BB._thinInstanceDataStorage.instancesCount; ++dB) {
              const jB = dB * JB;
              kB.set(IB[jB], IB[jB + 1], IB[jB + 2], IB[jB + 3]);
              const nB = BB._getData({
                applyMorph: zB,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: kB,
                updatePositionsArray: !1,
                cache: yB
              }, null, NB.l.PositionKind);
              if (!nB) return !1;
              aB(nB, qB, SB, MB), pB(SB, MB, iB), GB.minimizeInPlace(SB), LB.maximizeInPlace(MB), QB.c.FromArrayToRef(mB, 16 * dB, EB), iB ? rB(SB, MB, EB, gB, tB) : sB(nB, qB, EB, gB, tB)
            }
            return !(!isFinite(GB.x) || !isFinite(gB.x)) && (BB.rV().reConstruct(gB, tB), BB.rawBoundingInfo = new dB.c(GB, LB), function(BB, jB) {
              BB.length = 0;
              for (let zB = 0; zB < jB.boundingBox.vectors.length; ++zB) BB.push(jB.boundingBox.vectors[zB].clone())
            }(jB, BB.rawBoundingInfo), BB._updateBoundingInfo(), !0)
          }(this, IB, zB)) return;
        nB && this.bakedVertexAnimationManager?.isEnabled && UB(this) ? this.refreshBoundingInfo({
          applySkeleton: jB,
          applyMorph: zB,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(jB, zB);
        const BB = this.rV();
        this.rawBoundingInfo = new dB.c(BB.minimum, BB.maximum)
      }
      const JB = this.rV(),
        mB = this._thinInstanceDataStorage.matrixData;
      if (0 === IB.length)
        for (let QB = 0; QB < JB.boundingBox.vectors.length; ++QB) IB.push(JB.boundingBox.vectors[QB].clone());
      QB.h.KJ[0].S_(Number.POSITIVE_INFINITY), QB.h.KJ[1].S_(Number.NEGATIVE_INFINITY);
      for (let dB = 0; dB < this._thinInstanceDataStorage.instancesCount; ++dB) {
        QB.c.FromArrayToRef(mB, 16 * dB, QB.h.Matrix[0]);
        for (let BB = 0; BB < IB.length; ++BB) QB.m.TransformCoordinatesToRef(IB[BB], QB.h.Matrix[0], QB.h.KJ[2]), QB.h.KJ[0].minimizeInPlace(QB.h.KJ[2]), QB.h.KJ[1].maximizeInPlace(QB.h.KJ[2])
      }
      JB.reConstruct(QB.h.KJ[0], QB.h.KJ[1]), this._updateBoundingInfo()
    }, IB.b.prototype._thinInstanceRecreateBuffer = function(BB) {
      let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === BB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, jB)) : "previousMatrix" === BB ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, jB)) : (BB === NB.l.ColorKind && (BB = NB.l.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[BB]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new NB.l(this.wJ(), this._userThinInstanceBuffersStorage.data[BB], BB, !jB, !1, this._userThinInstanceBuffersStorage.strides[BB], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
    }, IB.b.prototype._thinInstanceUpdateBufferSize = function(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      BB === NB.l.ColorKind && (BB = NB.l.ColorInstanceKind);
      const zB = "matrix" === BB;
      if (!zB && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[BB])) return;
      const QB = zB ? 16 : this._userThinInstanceBuffersStorage.strides[BB],
        nB = zB ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[BB];
      let dB = zB ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[BB];
      const IB = (this._thinInstanceDataStorage.instancesCount + jB) * QB;
      let uB = nB;
      for (; uB < IB;) uB *= 2;
      if (!dB || nB != uB) {
        if (dB) {
          const BB = new Float32Array(uB);
          BB.set(dB, 0), dB = BB
        } else dB = new Float32Array(uB);
        zB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", dB, !1), this._thinInstanceDataStorage.matrixData = dB, this._thinInstanceDataStorage.matrixBufferSize = uB, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", dB, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[BB]?.dispose(), this._userThinInstanceBuffersStorage.data[BB] = dB, this._userThinInstanceBuffersStorage.sizes[BB] = uB, this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new NB.l(this.wJ(), dB, BB, !0, !1, QB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
      }
    }, IB.b.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, IB.b.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40546: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => GB,
      f: () => mB
    });
    var QB, nB, dB, IB, NB = zB(40066),
      uB = zB(40068),
      UB = zB(40086),
      aB = zB(37202),
      pB = zB(37171),
      rB = zB(40306),
      sB = zB(37222),
      JB = zB(39965);
    let mB = (() => {
      var BB;
      let jB, zB, QB, nB, dB, IB, sB, JB, mB, yB = rB.c,
        kB = [],
        GB = [],
        LB = [],
        gB = [],
        tB = [],
        SB = [],
        MB = [],
        EB = [],
        iB = [],
        qB = [],
        fB = [],
        oB = [],
        HB = [],
        DB = [],
        FB = [],
        YB = [],
        VB = [],
        hB = [];
      return BB = class extends yB {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(jB) {
          this._billboardMode !== jB && (this._billboardMode = jB, this._cache.useBillboardPosition = 0 !== (this._billboardMode & BB.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(BB) {
          this._infiniteDistance !== BB && (this._infiniteDistance = BB)
        }
        constructor(jB) {
          let zB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(jB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new pB.m(0, 0, 1), this._up = new pB.m(0, 1, 0), this._right = new pB.m(1, 0, 0), this._position = (0, NB.g)(this, kB, pB.m.Zero()), this._rotation = ((0, NB.g)(this, GB), (0, NB.g)(this, LB, pB.m.Zero())), this._rotationQuaternion = ((0, NB.g)(this, gB), (0, NB.g)(this, tB, null)), this._scaling = ((0, NB.g)(this, SB), (0, NB.g)(this, MB, pB.m.One())), this._transformToBoneReferal = ((0, NB.g)(this, EB), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, NB.g)(this, iB, BB.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, NB.g)(this, qB), (0, NB.g)(this, fB, 1)), this._infiniteDistance = ((0, NB.g)(this, oB), (0, NB.g)(this, HB, !1)), this.ignoreNonUniformScaling = ((0, NB.g)(this, DB), (0, NB.g)(this, FB, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, NB.g)(this, YB), (0, NB.g)(this, VB, !1)), this._poseMatrix = ((0, NB.g)(this, hB), null), this._localMatrix = pB.c.Zero(), this._usePivotMatrix = !1, this._absolutePosition = pB.m.Zero(), this._absoluteScaling = pB.m.Zero(), this._absoluteRotationQuaternion = pB.d.Identity(), this._pivotMatrix = pB.c.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new aB.c, this._nonUniformScaling = !1, zB && this.aY().addTransformNode(this)
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
        get pp() {
          return this._scaling
        }
        set pp(BB) {
          this._scaling = BB, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(BB) {
          this._rotationQuaternion = BB, BB && this._rotation.S_(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return pB.m.TransformNormalFromFloatsToRef(0, 0, this.aY().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return pB.m.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return pB.m.TransformNormalFromFloatsToRef(this.aY().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(BB) {
          return this._poseMatrix ? (this._poseMatrix.jH(BB), this) : (this._poseMatrix = BB.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = pB.c.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const jB = this._cache;
          return this._billboardMode === jB.billboardMode && this._billboardMode === BB.BILLBOARDMODE_NONE && (!jB.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.jH(BB), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = jB, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = pB.c.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            jB = arguments.length > 1 ? arguments[1] : void 0,
            zB = arguments.length > 2 ? arguments[2] : void 0;
          const QB = this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0);
          QB && zB && zB(this, QB);
          for (const nB of this.getChildTransformNodes(!0)) nB.instantiateHierarchy(QB, jB, zB);
          return QB
        }
        kY() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.S_(0), this._rotationQuaternion = this._rotationQuaternion || pB.d.Identity(), BB.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = BB, this._absolutePosition.U3(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get XIB() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(BB) {
          if (!BB) return this;
          let jB, zB, QB;
          if (void 0 === BB.x) {
            if (arguments.length < 3) return this;
            jB = arguments[0], zB = arguments[1], QB = arguments[2]
          } else jB = BB.x, zB = BB.y, QB = BB.z;
          if (this.parent) {
            const BB = pB.h.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(BB), pB.m.TransformCoordinatesFromFloatsToRef(jB, zB, QB, BB, this.position)
          } else this.position.x = jB, this.position.y = zB, this.position.z = QB;
          return this._absolutePosition.jH(BB), this
        }
        setPositionWithLocalVector(BB) {
          return this.computeWorldMatrix(), this.position = pB.m.TransformNormal(BB, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const BB = pB.h.Matrix[0];
          return this._localMatrix.invertToRef(BB), pB.m.TransformNormal(this.position, BB)
        }
        locallyTranslate(BB) {
          return this.computeWorldMatrix(!0), this.position = pB.m.TransformCoordinates(BB, this._localMatrix), this
        }
        lookAt(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            QB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            dB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const IB = BB._LookAtVectorCache,
            NB = 0 === dB ? this.position : this.getAbsolutePosition();
          if (jB.subtractToRef(NB, IB), this.setDirection(IB, zB, QB, nB), 1 === dB && this.parent)
            if (this.rotationQuaternion) {
              const BB = pB.h.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(BB);
              const jB = pB.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(jB), jB.invert(), BB.multiplyToRef(jB, BB), this.rotationQuaternion.fromRotationMatrix(BB)
            } else {
              const BB = pB.h.Quaternion[0];
              pB.d.FromEulerVectorToRef(this.rotation, BB);
              const jB = pB.h.Matrix[0];
              BB.toRotationMatrix(jB);
              const zB = pB.h.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(zB), zB.invert(), jB.multiplyToRef(zB, jB), BB.fromRotationMatrix(jB), BB.toEulerAnglesToRef(this.rotation)
            } return this
        }
        nC(BB) {
          const jB = pB.m.Zero();
          return this.getDirectionToRef(BB, jB), jB
        }
        getDirectionToRef(BB, jB) {
          return pB.m.TransformNormalToRef(BB, this.getWorldMatrix(), jB), this
        }
        setDirection(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const nB = -Math.atan2(BB.z, BB.x) + Math.PI / 2,
            dB = Math.sqrt(BB.x * BB.x + BB.z * BB.z),
            IB = -Math.atan2(BB.y, dB);
          return this.rotationQuaternion ? pB.d.RotationYawPitchRollToRef(nB + jB, IB + zB, QB, this.rotationQuaternion) : (this.rotation.x = IB + zB, this.rotation.y = nB + jB, this.rotation.z = QB), this
        }
        setPivotPoint(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.aY().getRenderId() && this.computeWorldMatrix(!0);
          const zB = this.getWorldMatrix();
          if (1 == jB) {
            const jB = pB.h.Matrix[0];
            zB.invertToRef(jB), BB = pB.m.TransformCoordinates(BB, jB)
          }
          return this.setPivotMatrix(pB.c.Translation(-BB.x, -BB.y, -BB.z), !0)
        }
        getPivotPoint() {
          const BB = pB.m.Zero();
          return this.getPivotPointToRef(BB), BB
        }
        getPivotPointToRef(BB) {
          return BB.x = -this._pivotMatrix.m[12], BB.y = -this._pivotMatrix.m[13], BB.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const BB = pB.m.Zero();
          return this.getAbsolutePivotPointToRef(BB), BB
        }
        getAbsolutePivotPointToRef(BB) {
          return this.getPivotPointToRef(BB), pB.m.TransformCoordinatesToRef(BB, this.getWorldMatrix(), BB), this
        }
        DjB(BB) {
          if (this._isDirty) return this;
          if (this._children)
            for (const jB of this._children) jB.DjB(BB);
          return super.DjB(BB)
        }
        setParent(jB) {
          let zB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            QB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!jB && !this.parent) return this;
          const nB = pB.h.Quaternion[0],
            dB = pB.h.KJ[0],
            IB = pB.h.KJ[1],
            NB = pB.h.Matrix[1];
          pB.c.IdentityToRef(NB);
          const uB = pB.h.Matrix[0];
          this.computeWorldMatrix(!0);
          let UB = this.rotationQuaternion;
          return UB || (UB = BB._TmpRotation, pB.d.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, UB)), pB.c.ComposeToRef(this.pp, UB, this.position, uB), this.parent && uB.multiplyToRef(this.parent.computeWorldMatrix(!0), uB), jB && (jB.computeWorldMatrix(!0).invertToRef(NB), uB.multiplyToRef(NB, uB)), uB.decompose(IB, nB, dB, zB ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.jH(nB) : nB.toEulerAnglesToRef(this.rotation), this.pp.jH(IB), this.position.jH(dB), this.parent = jB, QB && this.setPivotMatrix(pB.c.Identity()), this
        }
        addChild(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return BB.setParent(this, jB), this
        }
        removeChild(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return BB.parent !== this || BB.setParent(null, jB), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(BB) {
          return this._nonUniformScaling !== BB && (this._nonUniformScaling = BB, !0)
        }
        attachToBone(BB, jB) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = jB, this.parent = BB, BB.getSkeleton().prepare(!0), BB.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = BB ? this._currentParentWhenAttachingToBone : null, this) : (BB && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(jB, zB, QB) {
          let nB;
          if (jB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.S_(0)), QB && 0 !== QB) {
            if (this.parent) {
              const BB = this.parent.getWorldMatrix(),
                QB = pB.h.Matrix[0];
              BB.invertToRef(QB), jB = pB.m.TransformNormal(jB, QB), BB.determinant() < 0 && (zB *= -1)
            }
            nB = pB.d.RotationAxisToRef(jB, zB, BB._RotationAxisCache), nB.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else nB = pB.d.RotationAxisToRef(jB, zB, BB._RotationAxisCache), this.rotationQuaternion.multiplyToRef(nB, this.rotationQuaternion);
          return this
        }
        rotateAround(BB, jB, zB) {
          jB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = pB.d.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.S_(0));
          const QB = pB.h.KJ[0],
            nB = pB.h.KJ[1],
            dB = pB.h.KJ[2],
            IB = pB.h.Quaternion[0],
            NB = pB.h.Matrix[0],
            uB = pB.h.Matrix[1],
            UB = pB.h.Matrix[2],
            aB = pB.h.Matrix[3];
          return BB.subtractToRef(this.position, QB), pB.c.TranslationToRef(QB.x, QB.y, QB.z, NB), pB.c.TranslationToRef(-QB.x, -QB.y, -QB.z, uB), pB.c.RotationAxisToRef(jB, zB, UB), uB.multiplyToRef(UB, aB), aB.multiplyToRef(NB, aB), aB.decompose(nB, IB, dB), this.position.addInPlace(dB), IB.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(BB, jB, zB) {
          const QB = BB.scale(jB);
          if (zB && 0 !== zB) this.setAbsolutePosition(this.getAbsolutePosition().add(QB));
          else {
            const BB = this.getPositionExpressedInLocalSpace().add(QB);
            this.setPositionWithLocalVector(BB)
          }
          return this
        }
        addRotation(BB, jB, zB) {
          let QB;
          this.rotationQuaternion ? QB = this.rotationQuaternion : (QB = pB.h.Quaternion[1], pB.d.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, QB));
          const nB = pB.h.Quaternion[0];
          return pB.d.RotationYawPitchRollToRef(jB, BB, zB, nB), QB.multiplyInPlace(nB), this.rotationQuaternion || QB.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== BB.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let jB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const QB = this.aY().getRenderId();
          if (!this._isDirty && !jB && (this._currentRenderId === QB || this.isSynchronized())) return this._currentRenderId = QB, this._worldMatrix;
          zB = zB || this.aY().activeCamera, this._updateCache();
          const nB = this._cache;
          nB.pivotMatrixUpdated = !1, nB.billboardMode = this.billboardMode, nB.infiniteDistance = this.infiniteDistance, nB.parent = this._parentNode, this._currentRenderId = QB, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const dB = this._getEffectiveParent(),
            IB = BB._TmpScaling;
          let NB, uB = this._position;
          if (this._infiniteDistance && !this.parent && zB) {
            const jB = zB.getWorldMatrix().m;
            uB = BB._TmpTranslation, uB.U3(this._position.x + jB[12], this._position.y + jB[13], this._position.z + jB[14])
          }
          if (IB.U3(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, NB = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(pB.d.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.U3(0, 0, 0))
            }
          } else NB = BB._TmpRotation, pB.d.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, NB);
          if (this._usePivotMatrix) {
            const BB = pB.h.Matrix[1];
            pB.c.ScalingToRef(IB.x, IB.y, IB.z, BB);
            const jB = pB.h.Matrix[0];
            NB.toRotationMatrix(jB), this._pivotMatrix.multiplyToRef(BB, pB.h.Matrix[4]), pB.h.Matrix[4].multiplyToRef(jB, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(uB.x, uB.y, uB.z)
          } else pB.c.ComposeToRef(IB, NB, uB, this._localMatrix);
          if (dB && dB.getWorldMatrix) {
            if (jB && dB.computeWorldMatrix(jB), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const BB = this.parent;
                BB.getSkeleton().prepare(), BB.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), pB.h.Matrix[7])
              } else pB.h.Matrix[7].jH(dB.getWorldMatrix());
              const jB = pB.h.KJ[5],
                zB = pB.h.KJ[6],
                QB = pB.h.Quaternion[0];
              pB.h.Matrix[7].decompose(zB, QB, jB), pB.c.ScalingToRef(zB.x, zB.y, zB.z, pB.h.Matrix[7]), pB.h.Matrix[7].setTranslation(jB), BB.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(QB, jB), this._localMatrix.setTranslation(jB)), this._localMatrix.multiplyToRef(pB.h.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const BB = this.parent;
              BB.getSkeleton().prepare(), this._localMatrix.multiplyToRef(BB.getFinalMatrix(), pB.h.Matrix[6]), pB.h.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(dB.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.jH(this._localMatrix);
          if (zB && this.billboardMode)
            if (nB.useBillboardPosition) {
              const jB = pB.h.KJ[0];
              this._worldMatrix.getTranslationToRef(jB);
              const QB = zB.globalPosition;
              this._worldMatrix.invertToRef(pB.h.Matrix[1]);
              const nB = pB.h.KJ[1];
              pB.m.TransformCoordinatesToRef(QB, pB.h.Matrix[1], nB), nB.normalize();
              const dB = -Math.atan2(nB.z, nB.x) + Math.PI / 2,
                IB = Math.sqrt(nB.x * nB.x + nB.z * nB.z),
                NB = -Math.atan2(nB.y, IB);
              if (pB.d.RotationYawPitchRollToRef(dB, NB, 0, pB.h.Quaternion[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
                const jB = pB.h.KJ[1];
                pB.h.Quaternion[0].toEulerAnglesToRef(jB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (jB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (jB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMODE_Z && (jB.z = 0), pB.c.RotationYawPitchRollToRef(jB.y, jB.x, jB.z, pB.h.Matrix[0])
              } else pB.c.FromQuaternionToRef(pB.h.Quaternion[0], pB.h.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pB.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pB.h.KJ[0])
            } else {
              const jB = pB.h.KJ[0];
              this._worldMatrix.getTranslationToRef(jB), pB.h.Matrix[1].jH(zB.getViewMatrix());
              const QB = this.aY().useRightHandedSystem;
              if (QB && pB.h.Matrix[1].multiplyToRef(BB._TmpRHRestore, pB.h.Matrix[1]), pB.h.Matrix[1].setTranslationFromFloats(0, 0, 0), pB.h.Matrix[1].invertToRef(pB.h.Matrix[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
                pB.h.Matrix[0].decompose(void 0, pB.h.Quaternion[0], void 0);
                const jB = pB.h.KJ[1];
                pB.h.Quaternion[0].toEulerAnglesToRef(jB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (jB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (jB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMODE_Z && (jB.z = 0), QB && (jB.y += Math.PI), pB.c.RotationYawPitchRollToRef(jB.y, jB.x, jB.z, pB.h.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(pB.h.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(pB.h.KJ[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : dB && dB._nonUniformScaling ? this._updateNonUniformScalingState(dB._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.U3(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = pB.c.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), BB) {
            const BB = this.getChildren();
            for (let jB = 0; jB < BB.length; ++jB) {
              const zB = BB[jB];
              if (zB) {
                zB.computeWorldMatrix();
                const BB = pB.h.Matrix[0];
                zB._localMatrix.multiplyToRef(this._localMatrix, BB);
                const jB = pB.h.Quaternion[0];
                BB.decompose(zB.pp, jB, zB.position), zB.rotationQuaternion ? zB.rotationQuaternion.jH(jB) : jB.toEulerAnglesToRef(zB.rotation)
              }
            }
          }
          this.pp.U3(1, 1, 1), this.position.U3(0, 0, 0), this.rotation.U3(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = pB.d.Identity()), this._worldMatrix = pB.c.Identity()
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
          return BB || (BB = this.aY().activeCamera), pB.m.TransformCoordinates(this.getAbsolutePosition(), BB.getViewMatrix())
        }
        getDistanceToCamera() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB || (BB = this.aY().activeCamera), this.getAbsolutePosition().subtract(BB.globalPosition).length()
        }
        clone(jB, zB, QB) {
          const nB = UB.b.Clone((() => new BB(jB, this.aY())), this);
          if (nB.name = jB, nB.id = jB, zB && (nB.parent = zB), !QB) {
            const BB = this.getDescendants(!0);
            for (let zB = 0; zB < BB.length; zB++) {
              const QB = BB[zB];
              QB.clone && QB.clone(jB + "." + QB.name, nB)
            }
          }
          return nB
        }
        serialize(BB) {
          const jB = UB.b.Serialize(this, BB);
          return jB.type = this.getClassName(), jB.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(jB), jB.localMatrix = this.getPivotMatrix().nQB(), jB.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (jB.kY = !0), UB.b.AppendSerializedAnimations(this, jB), jB.gy = this.serializeAnimationRanges(), jB
        }
        getChildTransformNodes(jB, zB) {
          const QB = [];
          return this._getDescendants(QB, jB, (jB => (!zB || zB(jB)) && jB instanceof BB)), QB
        }
        dispose(BB) {
          let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.aY().stopAnimation(this), this.aY().removeTransformNode(this), this._parentContainer) {
            const BB = this._parentContainer.transformNodes.indexOf(this);
            BB > -1 && this._parentContainer.transformNodes.splice(BB, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), BB) {
            const BB = this.getChildTransformNodes(!0);
            for (const jB of BB) jB.parent = null, jB.computeWorldMatrix(!0)
          }
          super.dispose(BB, jB)
        }
        normalizeToUnitCube() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            zB = arguments.length > 2 ? arguments[2] : void 0,
            QB = null,
            nB = null;
          jB && (this.rotationQuaternion ? (nB = this.rotationQuaternion.clone(), this.rotationQuaternion.U3(0, 0, 0, 1)) : this.rotation && (QB = this.rotation.clone(), this.rotation.U3(0, 0, 0)));
          const dB = this.getHierarchyBoundingVectors(BB, zB),
            IB = dB.max.subtract(dB.min),
            NB = Math.max(IB.x, IB.y, IB.z);
          if (0 === NB) return this;
          const uB = 1 / NB;
          return this.pp.scaleInPlace(uB), jB && (this.rotationQuaternion && nB ? this.rotationQuaternion.jH(nB) : this.rotation && QB && this.rotation.jH(QB)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const UB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
        jB = [(0, uB.x)("position")], zB = [(0, uB.x)("rotation")], QB = [(0, uB.t)("rotationQuaternion")], nB = [(0, uB.x)("pp")], dB = [(0, uB.A)("billboardMode")], IB = [(0, uB.A)()], sB = [(0, uB.A)("infiniteDistance")], JB = [(0, uB.A)()], mB = [(0, uB.A)()], (0, NB.e)(null, null, jB, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: BB => "_position" in BB,
            get: BB => BB._position,
            set: (BB, jB) => {
              BB._position = jB
            }
          },
          metadata: UB
        }, kB, GB), (0, NB.e)(null, null, zB, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_rotation" in BB,
            get: BB => BB._rotation,
            set: (BB, jB) => {
              BB._rotation = jB
            }
          },
          metadata: UB
        }, LB, gB), (0, NB.e)(null, null, QB, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: BB => "_rotationQuaternion" in BB,
            get: BB => BB._rotationQuaternion,
            set: (BB, jB) => {
              BB._rotationQuaternion = jB
            }
          },
          metadata: UB
        }, tB, SB), (0, NB.e)(null, null, nB, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "_scaling" in BB,
            get: BB => BB._scaling,
            set: (BB, jB) => {
              BB._scaling = jB
            }
          },
          metadata: UB
        }, MB, EB), (0, NB.e)(null, null, dB, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_billboardMode" in BB,
            get: BB => BB._billboardMode,
            set: (BB, jB) => {
              BB._billboardMode = jB
            }
          },
          metadata: UB
        }, iB, qB), (0, NB.e)(null, null, IB, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: BB => "scalingDeterminant" in BB,
            get: BB => BB.scalingDeterminant,
            set: (BB, jB) => {
              BB.scalingDeterminant = jB
            }
          },
          metadata: UB
        }, fB, oB), (0, NB.e)(null, null, sB, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "_infiniteDistance" in BB,
            get: BB => BB._infiniteDistance,
            set: (BB, jB) => {
              BB._infiniteDistance = jB
            }
          },
          metadata: UB
        }, HB, DB), (0, NB.e)(null, null, JB, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "ignoreNonUniformScaling" in BB,
            get: BB => BB.ignoreNonUniformScaling,
            set: (BB, jB) => {
              BB.ignoreNonUniformScaling = jB
            }
          },
          metadata: UB
        }, FB, YB), (0, NB.e)(null, null, mB, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: BB => "reIntegrateRotationIntoRotationQuaternion" in BB,
            get: BB => BB.reIntegrateRotationIntoRotationQuaternion,
            set: (BB, jB) => {
              BB.reIntegrateRotationIntoRotationQuaternion = jB
            }
          },
          metadata: UB
        }, VB, hB), UB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: UB
        })
      })(), BB.BILLBOARDMODE_NONE = 0, BB.BILLBOARDMODE_X = 1, BB.BILLBOARDMODE_Y = 2, BB.BILLBOARDMODE_Z = 4, BB.BILLBOARDMODE_ALL = 7, BB.BILLBOARDMODE_USE_POSITION = 128, BB.BillboardUseParentOrientation = !1, BB._TmpRotation = pB.d.Zero(), BB._TmpScaling = pB.m.Zero(), BB._TmpTranslation = pB.m.Zero(), BB._TmpRHRestore = pB.c.Scaling(1, 1, -1), BB._LookAtVectorCache = new pB.m(0, 0, 0), BB._RotationAxisCache = new pB.d, BB
    })();

    function yB(BB, jB, zB) {
      const QB = UB.b.Parse((() => new mB(BB.name, jB)), BB, jB, zB);
      if (BB.localMatrix ? QB.setPreTransformMatrix(pB.c.FromArray(BB.localMatrix)) : BB.pivotMatrix && QB.setPivotMatrix(pB.c.FromArray(BB.pivotMatrix)), QB.mH(BB.isEnabled), QB._waitingParsedUniqueId = BB.uniqueId, void 0 !== BB.parentId && (QB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (QB._waitingParentInstanceIndex = BB.parentInstanceIndex), BB.kY && (QB._waitingFreezeWorldMatrix = BB.kY), BB.animations) {
        for (let jB = 0; jB < BB.animations.length; jB++) {
          const zB = BB.animations[jB],
            nB = (0, sB.b)("BABYLON.Animation");
          nB && QB.animations.push(nB.Parse(zB))
        }
        rB.c.ParseAnimationRanges(QB, BB, jB)
      }
      return BB.autoAnimate && jB.beginAnimation(QB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), QB
    }
    let kB = !1;

    function GB() {
      kB || (kB = !0, mB.Parse = yB)
    }(QB = mB.prototype).pT ?? (QB.pT = (0, JB.i)("TransformNode", "pT")), (nB = mB.prototype).applyImpulse ?? (nB.applyImpulse = (0, JB.i)("TransformNode", "applyImpulse")), (dB = mB.prototype).applyAngularImpulse ?? (dB.applyAngularImpulse = (0, JB.i)("TransformNode", "applyAngularImpulse")), (IB = mB.prototype).applyTorque ?? (IB.applyTorque = (0, JB.i)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(mB.prototype, "physicsBody") || Object.defineProperty(mB.prototype, "physicsBody", (0, JB.f)("TransformNode", "physicsBody"))
  },
  40512: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      try {
        const QB = BB.next();
        QB.done ? jB(QB) : QB.value ? QB.value.then((() => {
          QB.value = void 0, jB(QB)
        }), zB) : jB(QB)
      } catch (QB) {
        zB(QB)
      }
    }

    function nB() {
      let BB, jB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (zB, nB, dB) => {
        const IB = performance.now();
        void 0 === BB || IB - BB > jB ? (BB = IB, setTimeout((() => {
          QB(zB, nB, dB)
        }), 0)) : QB(zB, nB, dB)
      }
    }

    function dB(BB, jB, zB, QB, nB) {
      const dB = () => {
        let IB;
        const NB = BB => {
          BB.done ? zB(BB.value) : void 0 === IB ? IB = !0 : dB()
        };
        do {
          IB = void 0, nB && nB.aborted ? QB(new Error("Aborted")) : jB(BB, NB, QB), void 0 === IB && (IB = !1)
        } while (IB)
      };
      dB()
    }

    function IB(BB, jB) {
      let zB;
      return dB(BB, QB, (BB => zB = BB), (BB => {
        throw BB
      }), jB), zB
    }
    async function NB(BB, jB, zB) {
      return await new Promise(((QB, nB) => {
        dB(BB, jB, QB, nB, zB)
      }))
    }

    function uB(BB, jB) {
      return function() {
        return IB(BB(...arguments), jB)
      }
    }
    zB.d(jB, {
      d: () => nB,
      h: () => uB,
      l: () => NB,
      m: () => IB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);
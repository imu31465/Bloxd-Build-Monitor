export const id = 255;
export const ids = [255];
export const modules = {
  40269: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => qB,
      e: () => WB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(40163),
      GB = ZB(37153),
      vB = ZB(37120),
      kB = ZB(40272),
      cB = ZB(38718),
      nB = ZB(37170),
      hB = ZB(39931),
      zB = ZB(38151),
      FB = ZB(37819),
      NB = ZB(40021),
      gB = ZB(40085);
    let qB = (() => {
      var BB;
      let IB, ZB, nB, qB, yB, UB, WB, dB, CB, QB, sB, wB, OB, YB, iB, pB, aB, HB, MB = kB.e,
        jB = [],
        PB = [],
        RB = [],
        rB = [],
        mB = [],
        XB = [],
        LB = [],
        eB = [],
        uB = [],
        fB = [],
        lB = [],
        AB = [],
        tB = [],
        bB = [],
        xB = [],
        EB = [],
        DB = [],
        KB = [],
        VB = [],
        SB = [],
        BI = [],
        II = [],
        ZI = [],
        TI = [],
        JI = [];
      return BB = class extends MB {
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
          let IB, ZB;
          if (this.mode === BB.PERSPECTIVE_CAMERA) this.fovMode === BB.FOVMODE_VERTICAL_FIXED ? (ZB = 2 * this.minZ * Math.tan(this.fov / 2), IB = this.PN().getAspectRatio(this) * ZB) : (IB = 2 * this.minZ * Math.tan(this.fov / 2), ZB = IB / this.PN().getAspectRatio(this));
          else {
            const BB = this.PN().getRenderWidth() / 2,
              TB = this.PN().getRenderHeight() / 2;
            IB = (this.orthoRight ?? BB) - (this.orthoLeft ?? -BB), ZB = (this.orthoTop ?? TB) - (this.orthoBottom ?? -TB)
          }
          return IB * ZB
        }
        set orthoLeft(BB) {
          this._orthoLeft = BB;
          for (const IB of this._rigCameras) IB.orthoLeft = BB
        }
        get orthoLeft() {
          return this._orthoLeft
        }
        set orthoRight(BB) {
          this._orthoRight = BB;
          for (const IB of this._rigCameras) IB.orthoRight = BB
        }
        get orthoRight() {
          return this._orthoRight
        }
        set orthoBottom(BB) {
          this._orthoBottom = BB;
          for (const IB of this._rigCameras) IB.orthoBottom = BB
        }
        get orthoBottom() {
          return this._orthoBottom
        }
        set orthoTop(BB) {
          this._orthoTop = BB;
          for (const IB of this._rigCameras) IB.orthoTop = BB
        }
        get orthoTop() {
          return this._orthoTop
        }
        setFocalLength(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36;
          this.fov = 2 * Math.atan(IB / (2 * BB))
        }
        get inertia() {
          return this._baseInertia
        }
        set inertia(BB) {
          this._baseInertia = BB
        }
        set mode(BB) {
          this._mode = BB;
          for (const IB of this._rigCameras) IB.mode = BB
        }
        get mode() {
          return this._mode
        }
        get hasMoved() {
          return this._hasMoved
        }
        constructor(IB, ZB, JB) {
          let kB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          (0, NB.b)(), super(IB, JB, !1), this.inputs = (0, TB.l)(this, jB), this._position = (0, TB.l)(this, PB, vB.s.Zero()), this._upVector = ((0, TB.l)(this, RB), (0, TB.l)(this, rB, vB.s.Up())), this.oblique = ((0, TB.l)(this, mB), null), this._orthoLeft = null, this._orthoRight = null, this._orthoBottom = null, this._orthoTop = null, this.fov = (0, TB.l)(this, XB, .8), this.projectionPlaneTilt = ((0, TB.l)(this, LB), (0, TB.l)(this, eB, 0)), this.minZ = ((0, TB.l)(this, uB), (0, TB.l)(this, fB, 1)), this.maxZ = ((0, TB.l)(this, lB), (0, TB.l)(this, AB, 1e4)), this._baseInertia = ((0, TB.l)(this, tB), .9), this._mode = BB.PERSPECTIVE_CAMERA, this.isIntermediate = !1, this.viewport = new zB.c(0, 0, 1, 1), this.layerMask = (0, TB.l)(this, bB, 268435455), this.fovMode = ((0, TB.l)(this, xB), (0, TB.l)(this, EB, BB.FOVMODE_VERTICAL_FIXED)), this.cameraRigMode = ((0, TB.l)(this, DB), (0, TB.l)(this, KB, BB.RIG_MODE_NONE)), this.interaxialDistance = ((0, TB.l)(this, VB), (0, TB.l)(this, SB, void 0)), this.isStereoscopicSideBySide = ((0, TB.l)(this, BI), (0, TB.l)(this, II, void 0)), this.ignoreCameraMaxZ = ((0, TB.l)(this, ZI), (0, TB.l)(this, TI, !1)), this.customRenderTargets = ((0, TB.l)(this, JI), []), this.outputRenderTarget = null, this.onViewMatrixChangedObservable = new GB.b, this.onProjectionMatrixChangedObservable = new GB.b, this.onAfterCheckInputsObservable = new GB.b, this.onRestoreStateObservable = new GB.b, this.isRigCamera = !1, this._hasMoved = !1, this._rigCameras = new Array, this._skipRendering = !1, this._projectionMatrix = new vB.b, this._postProcesses = new Array, this._activeMeshes = new oB.g(256), this._globalPosition = vB.s.Zero(), this._computedViewMatrix = vB.b.Identity(), this._doNotComputeProjectionMatrix = !1, this._transformMatrix = vB.b.Zero(), this._refreshFrustumPlanes = !0, this._absoluteRotation = vB.f.Identity(), this._isCamera = !0, this._isLeftCamera = !1, this._isRightCamera = !1, this.layerMask = this.JR().defaultCameraLayerMask, this.JR().addCamera(this), kB && !this.JR().activeCamera && (this.JR().activeCamera = this), this.position = ZB, this.renderPassId = this.JR().PN().createRenderPassId(`Camera ${IB}`)
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
          return "rq"
        }
        toString(BB) {
          let IB = "Name: " + this.name;
          if (IB += ", type: " + this.getClassName(), this.animations)
            for (let ZB = 0; ZB < this.animations.length; ZB++) IB += ", animation[0]: " + this.animations[ZB].toString(BB);
          return IB
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
            for (const IB of this._postProcesses)
              if (IB && !IB.isReady()) return !1;
          return super.isReady(BB)
        }
        _initCache() {
          super._initCache(), this._cache.position = new vB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.upVector = new vB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.mode = void 0, this._cache.minZ = void 0, this._cache.maxZ = void 0, this._cache.fov = void 0, this._cache.fovMode = void 0, this._cache.aspectRatio = void 0, this._cache.orthoLeft = void 0, this._cache.orthoRight = void 0, this._cache.orthoBottom = void 0, this._cache.orthoTop = void 0, this._cache.obliqueAngle = void 0, this._cache.obliqueLength = void 0, this._cache.obliqueOffset = void 0, this._cache.renderWidth = void 0, this._cache.renderHeight = void 0
        }
        _updateCache(BB) {
          BB || super._updateCache(), this._cache.position.TY(this.position), this._cache.upVector.TY(this.upVector)
        }
        _isSynchronized() {
          return this._isSynchronizedViewMatrix() && this._isSynchronizedProjectionMatrix()
        }
        _isSynchronizedViewMatrix() {
          return !!super._isSynchronized() && (this._cache.position.equals(this.position) && this._cache.upVector.equals(this.upVector) && this.isSynchronizedWithParent())
        }
        _isSynchronizedProjectionMatrix() {
          const IB = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          let ZB = this._cache.mode === this.mode && this._cache.minZ === this.minZ && this._cache.maxZ === IB;
          if (!ZB) return !1;
          const TB = this.PN();
          return this.mode === BB.PERSPECTIVE_CAMERA ? ZB = this._cache.fov === this.fov && this._cache.fovMode === this.fovMode && this._cache.aspectRatio === TB.getAspectRatio(this) && this._cache.projectionPlaneTilt === this.projectionPlaneTilt : (ZB = this._cache.orthoLeft === this.orthoLeft && this._cache.orthoRight === this.orthoRight && this._cache.orthoBottom === this.orthoBottom && this._cache.orthoTop === this.orthoTop && this._cache.renderWidth === TB.getRenderWidth() && this._cache.renderHeight === TB.getRenderHeight(), this.oblique && (ZB = ZB && this._cache.obliqueAngle === this.oblique.angle && this._cache.obliqueLength === this.oblique.length && this._cache.obliqueOffset === this.oblique.offset)), ZB
        }
        attachControl(BB, IB) {}
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
          for (let IB = 0, ZB = this._rigCameras.length; IB < ZB; IB++) {
            const BB = this._rigCameras[IB],
              ZB = BB._rigPostProcess;
            if (ZB) {
              "pass" === ZB.getEffectName() && (BB.isIntermediate = 0 === this._postProcesses.length), BB._postProcesses = this._postProcesses.slice(0).concat(ZB), ZB.markTextureDirty()
            } else BB._postProcesses = this._postProcesses.slice(0)
          }
        }
        attachPostProcess(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          return !BB.isReusable() && this._postProcesses.indexOf(BB) > -1 ? (cB.d.Error("You're trying to reuse a post process not defined as reusable."), 0) : (null == IB || IB < 0 ? this._postProcesses.push(BB) : null === this._postProcesses[IB] ? this._postProcesses[IB] = BB : this._postProcesses.splice(IB, 0, BB), this._cascadePostProcessesToRigCams(), this._scene.prePassRenderer && this._scene.prePassRenderer.GZB(), this._postProcesses.indexOf(BB))
        }
        detachPostProcess(BB) {
          const IB = this._postProcesses.indexOf(BB); - 1 !== IB && (this._postProcesses[IB] = null), this._scene.prePassRenderer && this._scene.prePassRenderer.GZB(), this._cascadePostProcessesToRigCams()
        }
        getWorldMatrix() {
          return this._isSynchronizedViewMatrix() || this.getViewMatrix(), this._worldMatrix
        }
        _getViewMatrix() {
          return vB.b.Identity()
        }
        getViewMatrix(BB) {
          return !BB && this._isSynchronizedViewMatrix() || (this._hasMoved = !0, this.updateCache(), this._computedViewMatrix = this._getViewMatrix(), this._currentRenderId = this.JR().getRenderId(), this._childUpdateId++, this._refreshFrustumPlanes = !0, this._cameraRigParams && this._cameraRigParams.vrPreViewMatrix && this._computedViewMatrix.multiplyToRef(this._cameraRigParams.vrPreViewMatrix, this._computedViewMatrix), this.parent && this.parent.onViewMatrixChangedObservable && this.parent.onViewMatrixChangedObservable.notifyObservers(this.parent), this.onViewMatrixChangedObservable.notifyObservers(this), this._computedViewMatrix.invertToRef(this._worldMatrix), this._worldMatrix.getTranslationToRef(this._globalPosition)), this._computedViewMatrix
        }
        freezeProjectionMatrix(BB) {
          this._doNotComputeProjectionMatrix = !0, void 0 !== BB && (this._projectionMatrix = BB)
        }
        unfreezeProjectionMatrix() {
          this._doNotComputeProjectionMatrix = !1
        }
        getProjectionMatrix(IB) {
          if (this._doNotComputeProjectionMatrix || !IB && this._isSynchronizedProjectionMatrix()) return this._projectionMatrix;
          const ZB = this.ignoreCameraMaxZ ? 0 : this.maxZ;
          this._cache.mode = this.mode, this._cache.minZ = this.minZ, this._cache.maxZ = ZB, this._refreshFrustumPlanes = !0;
          const TB = this.PN(),
            JB = this.JR(),
            oB = TB.iTB;
          if (this.mode === BB.PERSPECTIVE_CAMERA) {
            let IB;
            this._cache.fov = this.fov, this._cache.fovMode = this.fovMode, this._cache.aspectRatio = TB.getAspectRatio(this), this._cache.projectionPlaneTilt = this.projectionPlaneTilt, this.minZ <= 0 && (this.minZ = .1), IB = JB.useRightHandedSystem ? vB.b.PerspectiveFovRHToRef : vB.b.PerspectiveFovLHToRef, IB(this.fov, TB.getAspectRatio(this), oB ? ZB : this.minZ, oB ? this.minZ : ZB, this._projectionMatrix, this.fovMode === BB.FOVMODE_VERTICAL_FIXED, TB.isNDCHalfZRange, this.projectionPlaneTilt, oB)
          } else {
            const BB = TB.getRenderWidth() / 2,
              IB = TB.getRenderHeight() / 2;
            JB.useRightHandedSystem ? this.oblique ? vB.b.ObliqueOffCenterRHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -IB, this.orthoTop ?? IB, oB ? ZB : this.minZ, oB ? this.minZ : ZB, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, TB.isNDCHalfZRange) : vB.b.OrthoOffCenterRHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -IB, this.orthoTop ?? IB, oB ? ZB : this.minZ, oB ? this.minZ : ZB, this._projectionMatrix, TB.isNDCHalfZRange) : this.oblique ? vB.b.ObliqueOffCenterLHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -IB, this.orthoTop ?? IB, oB ? ZB : this.minZ, oB ? this.minZ : ZB, this.oblique.length, this.oblique.angle, this._computeObliqueDistance(this.oblique.offset), this._projectionMatrix, TB.isNDCHalfZRange) : vB.b.OrthoOffCenterLHToRef(this.orthoLeft ?? -BB, this.orthoRight ?? BB, this.orthoBottom ?? -IB, this.orthoTop ?? IB, oB ? ZB : this.minZ, oB ? this.minZ : ZB, this._projectionMatrix, TB.isNDCHalfZRange), this._cache.orthoLeft = this.orthoLeft, this._cache.orthoRight = this.orthoRight, this._cache.orthoBottom = this.orthoBottom, this._cache.orthoTop = this.orthoTop, this._cache.obliqueAngle = this.oblique?.angle, this._cache.obliqueLength = this.oblique?.length, this._cache.obliqueOffset = this.oblique?.offset, this._cache.renderWidth = TB.getRenderWidth(), this._cache.renderHeight = TB.getRenderHeight()
          }
          return this.onProjectionMatrixChangedObservable.notifyObservers(this), this._projectionMatrix
        }
        getTransformationMatrix() {
          return this._computedViewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix), this._transformMatrix
        }
        _computeObliqueDistance(BB) {
          return (this.radius || (this.target ? vB.s.Distance(this.position, this.target) : this.position.length())) + BB
        }
        _updateFrustumPlanes() {
          this._refreshFrustumPlanes && (this.getTransformationMatrix(), this._frustumPlanes ? FB.d.GetPlanesToRef(this._transformMatrix, this._frustumPlanes) : this._frustumPlanes = FB.d.GetPlanes(this._transformMatrix), this._refreshFrustumPlanes = !1)
        }
        isInFrustum(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._updateFrustumPlanes(), IB && this.rigCameras.length > 0) {
            let IB = !1;
            for (const ZB of this.rigCameras) ZB._updateFrustumPlanes(), IB = IB || BB.isInFrustum(ZB._frustumPlanes);
            return IB
          }
          return BB.isInFrustum(this._frustumPlanes)
        }
        isCompletelyInFrustum(BB) {
          return this._updateFrustumPlanes(), BB.isCompletelyInFrustum(this._frustumPlanes)
        }
        getForwardRay() {
          throw (0, hB.m)("Ray")
        }
        getForwardRayToRef(BB) {
          throw (0, hB.m)("Ray")
        }
        dispose(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          for (this.onViewMatrixChangedObservable.clear(), this.onProjectionMatrixChangedObservable.clear(), this.onAfterCheckInputsObservable.clear(), this.onRestoreStateObservable.clear(), this.inputs && this.inputs.clear(), this.JR().stopAnimation(this), this.JR().removeCamera(this); this._rigCameras.length > 0;) {
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
              const IB = this._postProcesses[BB];
              IB && IB.dispose(this)
            }
          }
          let TB = this.customRenderTargets.length;
          for (; --TB >= 0;) this.customRenderTargets[TB].dispose();
          this.customRenderTargets.length = 0, this._activeMeshes.dispose(), this.JR().PN().releaseRenderPassId(this.renderPassId), super.dispose(IB, ZB)
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
        setCameraRigMode(IB, ZB) {
          if (this.cameraRigMode !== IB) {
            for (; this._rigCameras.length > 0;) {
              const BB = this._rigCameras.pop();
              BB && BB.dispose()
            }
            if (this.cameraRigMode = IB, this._cameraRigParams = {}, this._cameraRigParams.interaxialDistance = ZB.interaxialDistance || .0637, this._cameraRigParams.stereoHalfAngle = this._cameraRigParams.interaxialDistance / .0637 * (Math.PI / 180), this.cameraRigMode !== BB.RIG_MODE_NONE) {
              const BB = this.createRigCamera(this.name + "_L", 0);
              BB && (BB._isLeftCamera = !0);
              const IB = this.createRigCamera(this.name + "_R", 1);
              IB && (IB._isRightCamera = !0), BB && IB && (this._rigCameras.push(BB), this._rigCameras.push(IB))
            }
            this._setRigMode(ZB), this._cascadePostProcessesToRigCams(), this.update()
          }
        }
        _setRigMode(BB) {}
        _getVRProjectionMatrix() {
          return vB.b.PerspectiveFovLHToRef(this._cameraRigParams.vrMetrics.aspectRatioFov, this._cameraRigParams.vrMetrics.aspectRatio, this.minZ, this.ignoreCameraMaxZ ? 0 : this.maxZ, this._cameraRigParams.vrWorkMatrix, !0, this.PN().isNDCHalfZRange), this._cameraRigParams.vrWorkMatrix.multiplyToRef(this._cameraRigParams.vrHMatrix, this._projectionMatrix), this._projectionMatrix
        }
        setCameraRigParameter(BB, IB) {
          this._cameraRigParams || (this._cameraRigParams = {}), this._cameraRigParams[BB] = IB, "interaxialDistance" === BB && (this._cameraRigParams.stereoHalfAngle = IB / .0637 * (Math.PI / 180))
        }
        createRigCamera(BB, IB) {
          return null
        }
        _updateRigCameras() {
          for (let BB = 0; BB < this._rigCameras.length; BB++) this._rigCameras[BB].minZ = this.minZ, this._rigCameras[BB].maxZ = this.ignoreCameraMaxZ ? 0 : this.maxZ, this._rigCameras[BB].fov = this.fov, this._rigCameras[BB].upVector.TY(this.upVector);
          this.cameraRigMode === BB.RIG_MODE_STEREOSCOPIC_ANAGLYPH && (this._rigCameras[0].viewport = this._rigCameras[1].viewport = this.viewport)
        }
        _setupInputs() {}
        serialize() {
          const BB = gB.b.Serialize(this);
          return BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), this.parent && this.parent._serializeAsParent(BB), this.inputs && this.inputs.serialize(BB), gB.b.AppendSerializedAnimations(this, BB), BB.vq = this.serializeAnimationRanges(), BB.isEnabled = this.isEnabled(), BB
        }
        clone(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const TB = gB.b.Clone(BB.GetConstructorFromName(this.getClassName(), IB, this.JR(), this.interaxialDistance, this.isStereoscopicSideBySide), this);
          return TB.name = IB, TB.parent = ZB, this.onClonedObservable.notifyObservers(TB), TB
        }
        XV(BB) {
          const IB = vB.s.Zero();
          return this.getDirectionToRef(BB, IB), IB
        }
        get absoluteRotation() {
          return this.getWorldMatrix().decompose(void 0, this._absoluteRotation), this._absoluteRotation
        }
        getDirectionToRef(BB, IB) {
          vB.s.TransformNormalToRef(BB, this.getWorldMatrix(), IB)
        }
        static GetConstructorFromName(IB, ZB, TB) {
          let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            oB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const GB = kB.e.Construct(IB, ZB, TB, {
            interaxial_distance: JB,
            isStereoscopicSideBySide: oB
          });
          return GB || (() => BB._CreateDefaultParsedCamera(ZB, TB))
        }
        computeWorldMatrix() {
          return this.getWorldMatrix()
        }
        _calculateHandednessMultiplier() {
          let BB = this.JR().useRightHandedSystem ? -1 : 1;
          return this.parent && this.parent._getWorldMatrixDeterminant() < 0 && (BB *= -1), BB
        }
      }, (() => {
        const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(MB[Symbol.metadata] ?? null) : void 0;
        IB = [(0, JB.A)("position")], ZB = [(0, JB.A)("upVector")], nB = [(0, JB.C)()], qB = [(0, JB.C)()], yB = [(0, JB.C)()], UB = [(0, JB.C)()], WB = [(0, JB.C)()], dB = [(0, JB.C)()], CB = [(0, JB.C)()], QB = [(0, JB.C)()], sB = [(0, JB.C)()], wB = [(0, JB.C)()], OB = [(0, JB.C)()], YB = [(0, JB.C)()], iB = [(0, JB.C)()], pB = [(0, JB.C)()], aB = [(0, JB.C)()], HB = [(0, JB.C)()], (0, TB.j)(BB, null, nB, {
          kind: "getter",
          name: "orthoLeft",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoLeft" in BB,
            get: BB => BB.orthoLeft
          },
          metadata: oB
        }, null, jB), (0, TB.j)(BB, null, qB, {
          kind: "getter",
          name: "orthoRight",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoRight" in BB,
            get: BB => BB.orthoRight
          },
          metadata: oB
        }, null, jB), (0, TB.j)(BB, null, yB, {
          kind: "getter",
          name: "orthoBottom",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoBottom" in BB,
            get: BB => BB.orthoBottom
          },
          metadata: oB
        }, null, jB), (0, TB.j)(BB, null, UB, {
          kind: "getter",
          name: "orthoTop",
          static: !1,
          private: !1,
          access: {
            has: BB => "orthoTop" in BB,
            get: BB => BB.orthoTop
          },
          metadata: oB
        }, null, jB), (0, TB.j)(BB, null, sB, {
          kind: "getter",
          name: "inertia",
          static: !1,
          private: !1,
          access: {
            has: BB => "inertia" in BB,
            get: BB => BB.inertia
          },
          metadata: oB
        }, null, jB), (0, TB.j)(BB, null, wB, {
          kind: "getter",
          name: "mode",
          static: !1,
          private: !1,
          access: {
            has: BB => "mode" in BB,
            get: BB => BB.mode
          },
          metadata: oB
        }, null, jB), (0, TB.j)(null, null, IB, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: BB => "_position" in BB,
            get: BB => BB._position,
            set: (BB, IB) => {
              BB._position = IB
            }
          },
          metadata: oB
        }, PB, RB), (0, TB.j)(null, null, ZB, {
          kind: "field",
          name: "_upVector",
          static: !1,
          private: !1,
          access: {
            has: BB => "_upVector" in BB,
            get: BB => BB._upVector,
            set: (BB, IB) => {
              BB._upVector = IB
            }
          },
          metadata: oB
        }, rB, mB), (0, TB.j)(null, null, WB, {
          kind: "field",
          name: "fov",
          static: !1,
          private: !1,
          access: {
            has: BB => "fov" in BB,
            get: BB => BB.fov,
            set: (BB, IB) => {
              BB.fov = IB
            }
          },
          metadata: oB
        }, XB, LB), (0, TB.j)(null, null, dB, {
          kind: "field",
          name: "projectionPlaneTilt",
          static: !1,
          private: !1,
          access: {
            has: BB => "projectionPlaneTilt" in BB,
            get: BB => BB.projectionPlaneTilt,
            set: (BB, IB) => {
              BB.projectionPlaneTilt = IB
            }
          },
          metadata: oB
        }, eB, uB), (0, TB.j)(null, null, CB, {
          kind: "field",
          name: "minZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "minZ" in BB,
            get: BB => BB.minZ,
            set: (BB, IB) => {
              BB.minZ = IB
            }
          },
          metadata: oB
        }, fB, lB), (0, TB.j)(null, null, QB, {
          kind: "field",
          name: "maxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "maxZ" in BB,
            get: BB => BB.maxZ,
            set: (BB, IB) => {
              BB.maxZ = IB
            }
          },
          metadata: oB
        }, AB, tB), (0, TB.j)(null, null, OB, {
          kind: "field",
          name: "layerMask",
          static: !1,
          private: !1,
          access: {
            has: BB => "layerMask" in BB,
            get: BB => BB.layerMask,
            set: (BB, IB) => {
              BB.layerMask = IB
            }
          },
          metadata: oB
        }, bB, xB), (0, TB.j)(null, null, YB, {
          kind: "field",
          name: "fovMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "fovMode" in BB,
            get: BB => BB.fovMode,
            set: (BB, IB) => {
              BB.fovMode = IB
            }
          },
          metadata: oB
        }, EB, DB), (0, TB.j)(null, null, iB, {
          kind: "field",
          name: "cameraRigMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "cameraRigMode" in BB,
            get: BB => BB.cameraRigMode,
            set: (BB, IB) => {
              BB.cameraRigMode = IB
            }
          },
          metadata: oB
        }, KB, VB), (0, TB.j)(null, null, pB, {
          kind: "field",
          name: "interaxialDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "interaxialDistance" in BB,
            get: BB => BB.interaxialDistance,
            set: (BB, IB) => {
              BB.interaxialDistance = IB
            }
          },
          metadata: oB
        }, SB, BI), (0, TB.j)(null, null, aB, {
          kind: "field",
          name: "isStereoscopicSideBySide",
          static: !1,
          private: !1,
          access: {
            has: BB => "isStereoscopicSideBySide" in BB,
            get: BB => BB.isStereoscopicSideBySide,
            set: (BB, IB) => {
              BB.isStereoscopicSideBySide = IB
            }
          },
          metadata: oB
        }, II, ZI), (0, TB.j)(null, null, HB, {
          kind: "field",
          name: "ignoreCameraMaxZ",
          static: !1,
          private: !1,
          access: {
            has: BB => "ignoreCameraMaxZ" in BB,
            get: BB => BB.ignoreCameraMaxZ,
            set: (BB, IB) => {
              BB.ignoreCameraMaxZ = IB
            }
          },
          metadata: oB
        }, TI, JI), oB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: oB
        })
      })(), BB._CreateDefaultParsedCamera = (BB, IB) => {
        throw (0, hB.m)("UniversalCamera")
      }, BB.PERSPECTIVE_CAMERA = 0, BB.ORTHOGRAPHIC_CAMERA = 1, BB.FOVMODE_VERTICAL_FIXED = 0, BB.FOVMODE_HORIZONTAL_FIXED = 1, BB.RIG_MODE_NONE = 0, BB.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, BB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, BB.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, BB.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, BB.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, BB.RIG_MODE_VR = 20, BB.RIG_MODE_CUSTOM = 22, BB.ForceAttachControlToAlwaysPreventDefault = !1, BB
    })();

    function yB(BB, IB) {
      const ZB = BB.type,
        TB = qB.GetConstructorFromName(ZB, BB.name, IB, BB.interaxial_distance, BB.isStereoscopicSideBySide),
        JB = gB.b.Parse(TB, BB, IB);
      if (void 0 !== BB.parentId && (JB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (JB._waitingParentInstanceIndex = BB.parentInstanceIndex), JB.inputs && (JB.inputs.parse(BB), JB._setupInputs()), BB.upVector && (JB.upVector = vB.s.FromArray(BB.upVector)), JB.setPosition && (JB.position.cBB(0, 0, 0), JB.setPosition(vB.s.FromArray(BB.position))), BB.target && JB.setTarget && JB.setTarget(vB.s.FromArray(BB.target)), BB.cameraRigMode) {
        const IB = BB.interaxial_distance ? {
          interaxialDistance: BB.interaxial_distance
        } : {};
        JB.setCameraRigMode(BB.cameraRigMode, IB)
      }
      if (BB.animations) {
        for (let IB = 0; IB < BB.animations.length; IB++) {
          const ZB = BB.animations[IB],
            TB = (0, nB.e)("BABYLON.Animation");
          TB && JB.animations.push(TB.Parse(ZB))
        }
        kB.e.ParseAnimationRanges(JB, BB, IB)
      }
      return BB.autoAnimate && IB.beginAnimation(JB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), void 0 !== BB.isEnabled && JB.qY(BB.isEnabled), JB
    }
    let UB = !1;

    function WB() {
      UB || (UB = !0, qB.Parse = yB)
    }
  },
  40281: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(37120);
    class JB {
      constructor(BB, IB, ZB) {
        this._cameraPosition = IB, this._behavior = ZB, this.activeInput = !1, this.speed = 1, this.KD = 1, this.panSpeed = 1, this.rotationXSpeed = 1, this.rotationYSpeed = 1, this._zoomSpeedMultiplier = 1, this._panSpeedMultiplier = 1, this.zoomInertia = .9, this.panInertia = .9, this.rotationInertia = .9, this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels = new TB.s, this.rotationAccumulatedPixels = new TB.s, this.zoomDeltaCurrentFrame = 0, this.panDeltaCurrentFrame = TB.s.Zero(), this.rotationDeltaCurrentFrame = TB.s.Zero(), this._zoomVelocity = 0, this._panVelocity = new TB.s, this.referenceFrameRate = 60, this._rotationVelocity = new TB.s, this._prevFrameTimeMs = 0, this._scene = BB
      }
      computeCurrentFrameDeltas() {
        const BB = this._scene.PN().getDeltaTime(),
          IB = this._getEffectiveDeltaMs(BB);
        if (0 === this._zoomVelocity && 0 === this.zoomAccumulatedPixels && 0 === this._panVelocity.x && 0 === this._panVelocity.y && 0 === this._panVelocity.z && 0 === this.panAccumulatedPixels.x && 0 === this.panAccumulatedPixels.y && 0 === this.panAccumulatedPixels.z && 0 === this._rotationVelocity.x && 0 === this._rotationVelocity.y && 0 === this._rotationVelocity.z && 0 === this.rotationAccumulatedPixels.x && 0 === this.rotationAccumulatedPixels.y && 0 === this.rotationAccumulatedPixels.z && !this.activeInput) return this.panDeltaCurrentFrame.K9(0), this.rotationDeltaCurrentFrame.K9(0), this.zoomDeltaCurrentFrame = 0, void(BB > 0 && (this._prevFrameTimeMs = BB));
        this.panDeltaCurrentFrame.K9(0), this.rotationDeltaCurrentFrame.K9(0), this.zoomDeltaCurrentFrame = 0;
        (this.panAccumulatedPixels.lengthSquared() > 0 || this.rotationAccumulatedPixels.lengthSquared() > 0 || 0 !== this.zoomAccumulatedPixels) && this._behavior?.isInterpolating && this._behavior.stopAllAnimations(), this._panVelocity.cBB(this._calculateCurrentVelocity(this._panVelocity.x, this.panAccumulatedPixels.x, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.y, this.panAccumulatedPixels.y, this.panInertia), this._calculateCurrentVelocity(this._panVelocity.z, this.panAccumulatedPixels.z, this.panInertia)), this._panVelocity.scaleToRef(this.speed * this.panSpeed * this._panSpeedMultiplier * IB, this.panDeltaCurrentFrame), this._rotationVelocity.cBB(this._calculateCurrentVelocity(this._rotationVelocity.x, this.rotationAccumulatedPixels.x, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.y, this.rotationAccumulatedPixels.y, this.rotationInertia), this._calculateCurrentVelocity(this._rotationVelocity.z, this.rotationAccumulatedPixels.z, this.rotationInertia)), this.rotationDeltaCurrentFrame.cBB(this._rotationVelocity.x * this.speed * this.rotationXSpeed * IB, this._rotationVelocity.y * this.speed * this.rotationYSpeed * IB, 0), this._zoomVelocity = this._calculateCurrentVelocity(this._zoomVelocity, this.zoomAccumulatedPixels, this.zoomInertia), this.zoomDeltaCurrentFrame = this._zoomVelocity * (this.speed * this.KD * this._zoomSpeedMultiplier) * IB, BB > 0 && (this._prevFrameTimeMs = BB), this.zoomAccumulatedPixels = 0, this.panAccumulatedPixels.K9(0), this.rotationAccumulatedPixels.K9(0), this.activeInput = !1
      }
      resetRotationVelocity() {
        this._rotationVelocity.K9(0), this.rotationAccumulatedPixels.K9(0)
      }
      resetPanVelocity() {
        this._panVelocity.K9(0), this.panAccumulatedPixels.K9(0)
      }
      resetZoomVelocity() {
        this._zoomVelocity = 0, this.zoomAccumulatedPixels = 0
      }
      get isInterpolating() {
        return !!this._behavior?.isInterpolating
      }
      getFrameIndependentDecay(BB) {
        const IB = this._scene.PN().getDeltaTime(),
          ZB = this._getEffectiveDeltaMs(IB),
          TB = 1e3 / this.referenceFrameRate;
        return Math.pow(BB, ZB / TB)
      }
      getFrameIndependentInputScale(BB) {
        const IB = 1 - BB;
        if (IB <= 0) return 1;
        return (1 - this.getFrameIndependentDecay(BB)) / IB
      }
      _getEffectiveDeltaMs(BB) {
        return BB > 0 ? BB : this._prevFrameTimeMs > 0 ? this._prevFrameTimeMs : 1e3 / this.referenceFrameRate
      }
      _calculateCurrentVelocity(BB, IB, ZB) {
        let TB = BB;
        const JB = this._scene.PN().getDeltaTime(),
          oB = this._getEffectiveDeltaMs(JB);
        if (0 === oB) return TB;
        const GB = this.getFrameIndependentDecay(ZB);
        if (TB *= GB, 0 !== IB || this.activeInput) {
          const BB = 1 - ZB;
          TB += IB / oB * (BB > 0 ? (1 - GB) / BB : 1)
        } else Math.abs(TB) < 1e-6 && (TB = 0);
        return TB
      }
    }
  },
  40284: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      constructor(BB, IB) {
        this.inputMap = [], this.handlers = BB, this._createDefaultEntries = IB, this.resetInputMap()
      }
      resolveInteraction(BB, IB) {
        for (const ZB of this.inputMap)
          if (ZB.source === BB && this._entryMatches(ZB, IB)) return ZB;
        return null
      }
      resetInputMap() {
        this.inputMap = this._createDefaultEntries?.() ?? []
      }
      getEntry(BB, IB, ZB) {
        const TB = this.inputMap;
        for (let JB = 0; JB < TB.length; JB++) {
          const oB = TB[JB];
          if (oB.source === BB && oB.interaction === IB && this._entryConditionsMatch(oB, ZB)) return oB
        }
      }
      getEntries(BB, IB, ZB) {
        const TB = [],
          JB = this.inputMap;
        for (let oB = 0; oB < JB.length; oB++) {
          const GB = JB[oB];
          GB.source === BB && GB.interaction === IB && this._entryConditionsMatch(GB, ZB) && TB.push(GB)
        }
        return TB
      }
      addEntry(BB) {
        const IB = this._entrySpecificity(BB);
        let ZB = this.inputMap.length;
        for (let TB = 0; TB < this.inputMap.length; TB++)
          if (this._entrySpecificity(this.inputMap[TB]) < IB) {
            ZB = TB;
            break
          } this.inputMap.splice(ZB, 0, BB)
      }
      setInteraction(BB, IB, ZB) {
        const TB = this.resolveInteraction(BB, IB);
        return TB && this._entryCoversAllConditionsOf(TB, IB) ? (TB.interaction = ZB, !0) : (this.addEntry({
          source: BB,
          ...IB ?? {},
          interaction: ZB
        }), !0)
      }
      _entryCoversAllConditionsOf(BB, IB) {
        if (!IB) return !0;
        const ZB = BB;
        for (const TB of Object.keys(IB)) {
          const BB = IB[TB];
          if (void 0 !== BB)
            if ("modifiers" === TB) {
              const IB = ZB.modifiers ?? {};
              for (const ZB of Object.keys(BB))
                if (void 0 !== BB[ZB] && void 0 === IB[ZB]) return !1
            } else if (void 0 === ZB[TB]) return !1
        }
        return !0
      }
      setInteractions(BB, IB, ZB) {
        let TB = 0;
        const JB = this.inputMap;
        for (let oB = 0; oB < JB.length; oB++) {
          const GB = JB[oB];
          GB.source === BB && this._entryMatches(GB, IB) && (GB.interaction = ZB, TB++)
        }
        return TB
      }
      _entryMatches(BB, IB) {
        switch (BB.source) {
          case "pointer":
            return (void 0 === BB.button || BB.button === IB?.button) && this._matchModifiers(BB.modifiers, IB?.modifiers);
          case "wheel":
            return this._matchModifiers(BB.modifiers, IB?.modifiers);
          case "touch":
            return void 0 === BB.touchCount || BB.touchCount === IB?.touchCount;
          case "keyboard":
            return (void 0 === BB.key || (Array.isArray(BB.key) ? -1 !== BB.key.indexOf(IB?.key ?? -1) : BB.key === IB?.key)) && this._matchModifiers(BB.modifiers, IB?.modifiers)
        }
      }
      _entryConditionsMatch(BB, IB) {
        if (!IB) return !0;
        switch (BB.source) {
          case "pointer":
            return (!("button" in IB) || BB.button === IB.button) && (!("modifiers" in IB) || this._entryModifiersMatch(BB.modifiers, IB.modifiers));
          case "wheel":
            return !("modifiers" in IB) || this._entryModifiersMatch(BB.modifiers, IB.modifiers);
          case "touch":
            return !("touchCount" in IB) || BB.touchCount === IB.touchCount;
          case "keyboard":
            if ("key" in IB) {
              if (void 0 === BB.key) return void 0 === IB.key;
              if (void 0 === IB.key || (Array.isArray(BB.key) ? -1 === BB.key.indexOf(IB.key) : BB.key !== IB.key)) return !1
            }
            return !("modifiers" in IB) || this._entryModifiersMatch(BB.modifiers, IB.modifiers)
        }
      }
      _entrySpecificity(BB) {
        let IB = 0;
        return "button" in BB && void 0 !== BB.button && IB++, "key" in BB && void 0 !== BB.key && IB++, "touchCount" in BB && void 0 !== BB.touchCount && IB++, "modifiers" in BB && BB.modifiers && IB++, IB
      }
      _matchModifiers(BB, IB) {
        return !BB || (void 0 === BB.ctrl || BB.ctrl === (IB?.ctrl ?? !1)) && ((void 0 === BB.shift || BB.shift === (IB?.shift ?? !1)) && (void 0 === BB.alt || BB.alt === (IB?.alt ?? !1)))
      }
      _entryModifiersMatch(BB, IB) {
        if (!IB) return !BB;
        return void 0 !== IB.ctrl || void 0 !== IB.shift || void 0 !== IB.alt ? (void 0 === IB.ctrl || BB?.ctrl === IB.ctrl) && ((void 0 === IB.shift || BB?.shift === IB.shift) && (void 0 === IB.alt || BB?.alt === IB.alt)) : !BB || void 0 === BB.ctrl && void 0 === BB.shift && void 0 === BB.alt
      }
    }
  },
  40261: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => yB,
      d: () => gB
    });
    var TB = ZB(40061),
      JB = ZB(40065),
      oB = ZB(40269),
      GB = ZB(37120),
      vB = ZB(37129),
      kB = ZB(40277),
      cB = ZB(40272),
      nB = ZB(40281),
      hB = ZB(40284);
    class zB extends nB.e {
      constructor(BB, IB, ZB) {
        super(BB, IB, ZB), this.input = new hB.d({
          translate: (BB, IB, ZB) => {
            this.panAccumulatedPixels.x += BB, this.panAccumulatedPixels.y += IB, this.panAccumulatedPixels.z += ZB
          },
          rotate: (BB, IB) => {
            this.rotationAccumulatedPixels.x += BB, this.rotationAccumulatedPixels.y += IB
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
    const FB = GB.b.Zero(),
      NB = GB.f.Identity();
    let gB = (() => {
        var BB;
        let IB, ZB, cB, nB, hB = oB.c,
          gB = [],
          qB = [],
          yB = [],
          UB = [],
          WB = [],
          dB = [],
          CB = [],
          QB = [];
        return BB = class extends hB {
          get inertia() {
            return this._targetInertia
          }
          set inertia(BB) {
            this._targetInertia = BB, this.movement && (this.movement.panInertia = BB, this.movement.rotationInertia = BB)
          }
          constructor(BB, IB, ZB) {
            super(BB, IB, ZB, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]), this.cameraDirection = new GB.s(0, 0, 0), this.cameraRotation = new GB.p(0, 0), this._targetInertia = .9, this.updateUpVectorFromRotation = (0, TB.l)(this, gB, !1), this.rotation = ((0, TB.l)(this, qB), (0, TB.l)(this, yB, void 0)), this.rotationQuaternion = (0, TB.l)(this, UB), this.speed = (0, TB.l)(this, WB, 2), this.noRotationConstraint = ((0, TB.l)(this, dB), !1), this.invertRotation = !1, this.inverseRotationSpeed = .2, this._panningEpsilon = vB.d, this._rotationEpsilon = vB.d, this.lockedTarget = (0, TB.l)(this, CB, null), this._currentTarget = ((0, TB.l)(this, QB), GB.s.Zero()), this._initialFocalDistance = 1, this._viewMatrix = GB.b.Zero(), this._cameraTransformMatrix = GB.b.Zero(), this._cameraRotationMatrix = GB.b.Zero(), this._transformedReferencePoint = GB.s.Zero(), this._deferredPositionUpdate = new GB.s, this._deferredRotationQuaternionUpdate = new GB.f, this._deferredRotationUpdate = new GB.s, this._deferredUpdated = !1, this._deferOnly = !1, this._cachedRotationZ = 0, this._cachedQuaternionRotationZ = 0, this._referencePoint = GB.s.Forward(this.JR().useRightHandedSystem), this.rotation = new GB.s(0, this.JR().useRightHandedSystem ? Math.PI : 0, 0), this.movement = new zB(this.JR(), this.position), this.movement.panInertia = this.inertia, this.movement.rotationInertia = this.inertia
          }
          getFrontPosition(BB) {
            this.getWorldMatrix();
            const IB = GB.m.rN[0],
              ZB = GB.m.rN[1];
            return ZB.set(0, 0, this._scene.useRightHandedSystem ? -1 : 1), this.getDirectionToRef(ZB, IB), IB.scaleInPlace(BB), this.globalPosition.add(IB)
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
            return !!super._restoreStateValues() && (this.position = this._storedPosition.clone(), this.rotation = this._storedRotation.clone(), this.rotationQuaternion && this._storedRotationQuaternion && (this.rotationQuaternion = this._storedRotationQuaternion.clone()), this.cameraDirection.cBB(0, 0, 0), this.cameraRotation.cBB(0, 0), !0)
          }
          _initCache() {
            super._initCache(), this._cache.lockedTarget = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotation = new GB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this._cache.rotationQuaternion = new GB.f(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
          }
          _updateCache(BB) {
            BB || super._updateCache();
            const IB = this._getLockedTargetPosition();
            IB ? this._cache.lockedTarget ? this._cache.lockedTarget.TY(IB) : this._cache.lockedTarget = IB.clone() : this._cache.lockedTarget = null, this._cache.rotation.TY(this.rotation), this.rotationQuaternion && this._cache.rotationQuaternion.TY(this.rotationQuaternion)
          }
          _isSynchronizedViewMatrix() {
            if (!super._isSynchronizedViewMatrix()) return !1;
            const BB = this._getLockedTargetPosition();
            return (this._cache.lockedTarget ? this._cache.lockedTarget.equals(BB) : !BB) && (this.rotationQuaternion ? this.rotationQuaternion.equals(this._cache.rotationQuaternion) : this._cache.rotation.equals(this.rotation))
          }
          _computeLocalCameraSpeed() {
            const BB = this.PN();
            return this.speed * Math.sqrt(BB.getDeltaTime() / (100 * BB.getFps()))
          }
          setTarget(BB) {
            this.upVector.normalize(), this._initialFocalDistance = BB.subtract(this.position).length(), this.position.z === BB.z && (this.position.z += vB.d), this._referencePoint.normalize().scaleInPlace(this._initialFocalDistance), this.JR().useRightHandedSystem ? GB.b.LookAtRHToRef(this.position, BB, GB.s.UpReadOnly, FB) : GB.b.LookAtLHToRef(this.position, BB, GB.s.UpReadOnly, FB), FB.invert();
            const IB = this.rotationQuaternion || NB;
            GB.f.FromRotationMatrixToRef(FB, IB), IB.toEulerAnglesToRef(this.rotation), this.rotation.z = 0
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
            if (this.parent) return this.parent.getWorldMatrix().invertToRef(GB.m.Matrix[0]), GB.s.TransformNormalToRef(this.cameraDirection, GB.m.Matrix[0], GB.m.rN[0]), this._deferredPositionUpdate.addInPlace(GB.m.rN[0]), void(this._deferOnly ? this._deferredUpdated = !0 : this.position.TY(this._deferredPositionUpdate));
            this._deferredPositionUpdate.addInPlace(this.cameraDirection), this._deferOnly ? this._deferredUpdated = !0 : this.position.TY(this._deferredPositionUpdate)
          }
          _checkInputs() {
            const BB = this.movement,
              IB = 0 !== this.cameraDirection.x || 0 !== this.cameraDirection.y || 0 !== this.cameraDirection.z;
            BB.panAccumulatedPixels.addInPlace(this.cameraDirection), BB.rotationAccumulatedPixels.x += this.cameraRotation.x, BB.rotationAccumulatedPixels.y += this.cameraRotation.y, BB.computeCurrentFrameDeltas(), this.cameraDirection.TY(BB.panDeltaCurrentFrame), this.cameraRotation.set(BB.rotationDeltaCurrentFrame.x, BB.rotationDeltaCurrentFrame.y);
            const ZB = this.speed * this._panningEpsilon;
            !IB && Math.abs(this.cameraDirection.x) < ZB && Math.abs(this.cameraDirection.y) < ZB && Math.abs(this.cameraDirection.z) < ZB && (this.cameraDirection.K9(0), BB.resetPanVelocity());
            const TB = this.invertRotation ? -this.inverseRotationSpeed : 1,
              JB = this._decideIfNeedsToMove(),
              oB = !(!this.cameraRotation.x && !this.cameraRotation.y);
            if (this._deferredUpdated = !1, this._deferredRotationUpdate.TY(this.rotation), this._deferredPositionUpdate.TY(this.position), this.rotationQuaternion && this._deferredRotationQuaternionUpdate.TY(this.rotationQuaternion), JB && this._updatePosition(), oB) {
              if (this.rotationQuaternion && this.rotationQuaternion.toEulerAnglesToRef(this._deferredRotationUpdate), this._deferredRotationUpdate.x += this.cameraRotation.x * TB, this._deferredRotationUpdate.y += this.cameraRotation.y * TB, !this.noRotationConstraint) {
                const BB = 1.570796;
                this._deferredRotationUpdate.x > BB && (this._deferredRotationUpdate.x = BB), this._deferredRotationUpdate.x < -BB && (this._deferredRotationUpdate.x = -BB)
              }
              if (this._deferOnly ? this._deferredUpdated = !0 : this.rotation.TY(this._deferredRotationUpdate), this.rotationQuaternion) {
                this._deferredRotationUpdate.lengthSquared() && (GB.f.RotationYawPitchRollToRef(this._deferredRotationUpdate.y, this._deferredRotationUpdate.x, this._deferredRotationUpdate.z, this._deferredRotationQuaternionUpdate), this._deferOnly ? this._deferredUpdated = !0 : this.rotationQuaternion.TY(this._deferredRotationQuaternionUpdate))
              }
            }
            this.cameraDirection.K9(0), this.cameraRotation.set(0, 0), super._checkInputs()
          }
          _updateCameraRotationMatrix() {
            this.rotationQuaternion ? this.rotationQuaternion.toRotationMatrix(this._cameraRotationMatrix) : GB.b.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, this._cameraRotationMatrix)
          }
          _rotateUpVectorWithCameraRotationMatrix() {
            return GB.s.TransformNormalToRef(GB.s.UpReadOnly, this._cameraRotationMatrix, this.upVector), this
          }
          _getViewMatrix() {
            return this.lockedTarget && this.setTarget(this._getLockedTargetPosition()), this._updateCameraRotationMatrix(), this.rotationQuaternion && this._cachedQuaternionRotationZ != this.rotationQuaternion.z ? (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedQuaternionRotationZ = this.rotationQuaternion.z) : this._cachedRotationZ !== this.rotation.z && (this._rotateUpVectorWithCameraRotationMatrix(), this._cachedRotationZ = this.rotation.z), GB.s.TransformCoordinatesToRef(this._referencePoint, this._cameraRotationMatrix, this._transformedReferencePoint), this.position.addToRef(this._transformedReferencePoint, this._currentTarget), this.updateUpVectorFromRotation && (this.rotationQuaternion ? kB.c.Y.rotateByQuaternionToRef(this.rotationQuaternion, this.upVector) : (GB.f.FromEulerVectorToRef(this.rotation, NB), kB.c.Y.rotateByQuaternionToRef(NB, this.upVector))), this._computeViewMatrix(this.position, this._currentTarget, this.upVector), this._viewMatrix
          }
          _computeViewMatrix(BB, IB, ZB) {
            if (this.JR().useRightHandedSystem ? GB.b.LookAtRHToRef(BB, IB, ZB, this._viewMatrix) : GB.b.LookAtLHToRef(BB, IB, ZB, this._viewMatrix), this.parent) {
              const BB = this.parent.getWorldMatrix();
              this._viewMatrix.invert(), this._viewMatrix.multiplyToRef(BB, this._viewMatrix), this._viewMatrix.invert(), this._markSyncedWithParent()
            }
          }
          createRigCamera(IB, ZB) {
            if (this.cameraRigMode !== oB.c.RIG_MODE_NONE) {
              const ZB = new BB(IB, this.position.clone(), this.JR());
              return ZB.isRigCamera = !0, ZB.rigParent = this, this.cameraRigMode === oB.c.RIG_MODE_VR && (this.rotationQuaternion || (this.rotationQuaternion = new GB.f), ZB._cameraRigParams = {}, ZB.rotationQuaternion = new GB.f), ZB.mode = this.mode, ZB.orthoLeft = this.orthoLeft, ZB.orthoRight = this.orthoRight, ZB.orthoTop = this.orthoTop, ZB.orthoBottom = this.orthoBottom, ZB
            }
            return null
          }
          _updateRigCameras() {
            const BB = this._rigCameras[0],
              IB = this._rigCameras[1];
            switch (this.computeWorldMatrix(), this.cameraRigMode) {
              case oB.c.RIG_MODE_STEREOSCOPIC_ANAGLYPH:
              case oB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL:
              case oB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED:
              case oB.c.RIG_MODE_STEREOSCOPIC_OVERUNDER:
              case oB.c.RIG_MODE_STEREOSCOPIC_INTERLACED: {
                const ZB = this.cameraRigMode === oB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? 1 : -1,
                  TB = this.cameraRigMode === oB.c.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED ? -1 : 1;
                this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * ZB, BB), this._getRigCamPositionAndTarget(this._cameraRigParams.stereoHalfAngle * TB, IB);
                break
              }
              case oB.c.RIG_MODE_VR:
                BB.rotationQuaternion && IB.rotationQuaternion && this.rotationQuaternion ? (BB.rotationQuaternion.TY(this.rotationQuaternion), IB.rotationQuaternion.TY(this.rotationQuaternion)) : (BB.rotation.TY(this.rotation), IB.rotation.TY(this.rotation)), BB.position.TY(this.position), IB.position.TY(this.position)
            }
            super._updateRigCameras()
          }
          _getRigCamPositionAndTarget(IB, ZB) {
            this.getTarget().subtractToRef(this.position, BB._TargetFocalPoint), BB._TargetFocalPoint.normalize().scaleInPlace(this._initialFocalDistance);
            const TB = BB._TargetFocalPoint.addInPlace(this.position);
            GB.b.TranslationToRef(-TB.x, -TB.y, -TB.z, BB._TargetTransformMatrix), BB._TargetTransformMatrix.multiplyToRef(GB.b.RotationAxis(ZB.upVector, IB), BB._RigCamTransformMatrix), GB.b.TranslationToRef(TB.x, TB.y, TB.z, BB._TargetTransformMatrix), BB._RigCamTransformMatrix.multiplyToRef(BB._TargetTransformMatrix, BB._RigCamTransformMatrix), GB.s.TransformCoordinatesToRef(this.position, BB._RigCamTransformMatrix, ZB.position), ZB.setTarget(TB)
          }
          getClassName() {
            return "TargetCamera"
          }
        }, (() => {
          const oB = "function" === typeof Symbol && Symbol.metadata ? Object.create(hB[Symbol.metadata] ?? null) : void 0;
          IB = [(0, JB.C)()], ZB = [(0, JB.A)()], cB = [(0, JB.C)()], nB = [(0, JB.q)("lockedTargetId")], (0, TB.j)(null, null, IB, {
            kind: "field",
            name: "updateUpVectorFromRotation",
            static: !1,
            private: !1,
            access: {
              has: BB => "updateUpVectorFromRotation" in BB,
              get: BB => BB.updateUpVectorFromRotation,
              set: (BB, IB) => {
                BB.updateUpVectorFromRotation = IB
              }
            },
            metadata: oB
          }, gB, qB), (0, TB.j)(null, null, ZB, {
            kind: "field",
            name: "rotation",
            static: !1,
            private: !1,
            access: {
              has: BB => "rotation" in BB,
              get: BB => BB.rotation,
              set: (BB, IB) => {
                BB.rotation = IB
              }
            },
            metadata: oB
          }, yB, UB), (0, TB.j)(null, null, cB, {
            kind: "field",
            name: "speed",
            static: !1,
            private: !1,
            access: {
              has: BB => "speed" in BB,
              get: BB => BB.speed,
              set: (BB, IB) => {
                BB.speed = IB
              }
            },
            metadata: oB
          }, WB, dB), (0, TB.j)(null, null, nB, {
            kind: "field",
            name: "lockedTarget",
            static: !1,
            private: !1,
            access: {
              has: BB => "lockedTarget" in BB,
              get: BB => BB.lockedTarget,
              set: (BB, IB) => {
                BB.lockedTarget = IB
              }
            },
            metadata: oB
          }, CB, QB), oB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oB
          })
        })(), BB._RigCamTransformMatrix = new GB.b, BB._TargetTransformMatrix = new GB.b, BB._TargetFocalPoint = new GB.s, BB
      })(),
      qB = !1;

    function yB() {
      qB || (qB = !0, cB.e.AddNodeConstructor("TargetCamera", ((BB, IB) => () => new gB(BB, GB.s.Zero(), IB))))
    }
  },
  40015: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB
    });
    var TB = ZB(39951);
    let JB = !1;

    function oB() {
      JB || (JB = !0, TB.c.prototype.getInputElement = function() {
        return this._renderingCanvas
      }, TB.c.prototype.getRenderingCanvasClientRect = function() {
        return this._renderingCanvas ? this._renderingCanvas.getBoundingClientRect() : null
      }, TB.c.prototype.getInputElementClientRect = function() {
        return this._renderingCanvas ? this.getInputElement().getBoundingClientRect() : null
      }, TB.c.prototype.getAspectRatio = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = BB.viewport;
        return this.getRenderWidth(IB) * ZB.width / (this.getRenderHeight(IB) * ZB.height)
      }, TB.c.prototype.getScreenAspectRatio = function() {
        return this.getRenderWidth(!0) / this.getRenderHeight(!0)
      }, TB.c.prototype._verifyPointerLock = function() {
        this._onPointerLockChange?.()
      })
    }
  },
  40103: (BB, IB, ZB) => {
    var TB = ZB(39951),
      JB = ZB(40110);
    let oB = !1;
    oB || (oB = !0, (0, JB.q)(), TB.c.prototype._loadFileAsync = async function(BB, IB, ZB) {
      return await new Promise(((TB, JB) => {
        this._loadFile(BB, (BB => {
          TB(BB)
        }), void 0, IB, ZB, ((BB, IB) => {
          JB(IB)
        }))
      }))
    })
  },
  40094: (BB, IB, ZB) => {
    (0, ZB(40021).b)()
  },
  40021: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(39951);
    let JB = !1;

    function oB() {
      JB || (JB = !0, TB.c.prototype.getRenderPassNames = function() {
        return this._renderPassNames
      }, TB.c.prototype.getCurrentRenderPassName = function() {
        return this._renderPassNames[this.currentRenderPassId]
      }, TB.c.prototype.createRenderPassId = function(BB) {
        const IB = ++TB.c._RenderPassIdCounter;
        return this._renderPassNames[IB] = BB ?? "NONAME", IB
      }, TB.c.prototype.releaseRenderPassId = function(BB) {
        this._renderPassNames[BB] = void 0;
        for (let IB = 0; IB < this.scenes.length; ++IB) {
          const ZB = this.scenes[IB];
          for (let IB = 0; IB < ZB.meshes.length; ++IB) {
            const TB = ZB.meshes[IB];
            if (TB._releaseRenderPassId(BB), TB.EW)
              for (let IB = 0; IB < TB.EW.length; ++IB) {
                TB.EW[IB]._removeDrawWrapper(BB)
              }
          }
        }
        this._onReleaseRenderPassObservable?.notifyObservers(BB)
      })
    }
  },
  40137: (BB, IB, ZB) => {
    var TB = ZB(40141),
      JB = ZB(39951);
    let oB = !1;
    oB || (oB = !0, JB.c.GetCompatibleTextureLoader = TB.b)
  },
  40023: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => oB
    });
    var TB = ZB(39895);
    let JB = !1;

    function oB() {
      JB || (JB = !0, TB.ThinEngine.prototype.setAlphaMode = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (this._alphaMode[ZB] === BB) {
          if (!IB) {
            const IB = 0 === BB;
            this.depthCullingState.depthMask !== IB && (this.depthCullingState.depthMask = IB)
          }
          return
        }
        const TB = 0 === BB;
        this._alphaState.setAlphaBlend(!TB, ZB), this._alphaState.setAlphaMode(BB, ZB), IB || (this.depthCullingState.depthMask = TB), this._alphaMode[ZB] = BB
      })
    }
  },
  40034: (BB, IB, ZB) => {
    var TB = ZB(39885),
      JB = ZB(38718),
      oB = ZB(39895),
      GB = ZB(40042),
      vB = ZB(40003);
    class kB extends GB.c {
      setDepthStencilTexture(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (super.setDepthStencilTexture(BB, IB), !BB) return;
        const ZB = this._engine,
          TB = this._context,
          JB = BB._hardwareTexture;
        if (JB && BB._autoMSAAManagement && this._MSAAFramebuffer) {
          const IB = ZB._currentFramebuffer;
          ZB._bindUnboundFramebuffer(this._MSAAFramebuffer), TB.framebufferRenderbuffer(TB.FRAMEBUFFER, (0, vB.c)(BB.format) ? TB.DEPTH_STENCIL_ATTACHMENT : TB.DEPTH_ATTACHMENT, TB.RENDERBUFFER, JB.getMSAARenderBuffer()), ZB._bindUnboundFramebuffer(IB)
        }
      }
      constructor(BB, IB, ZB, TB, JB) {
        super(BB, IB, ZB, TB), this._framebuffer = null, this._depthStencilBuffer = null, this._MSAAFramebuffer = null, this._colorTextureArray = null, this._depthStencilTextureArray = null, this._disposeOnlyFramebuffers = !1, this._currentLOD = 0, this._context = JB
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
          IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          oB = arguments.length > 5 ? arguments[5] : void 0;
        if (this._depthStencilBuffer) {
          const BB = this._engine,
            IB = BB._currentFramebuffer,
            ZB = this._context;
          BB._bindUnboundFramebuffer(this._framebuffer), ZB.framebufferRenderbuffer(ZB.FRAMEBUFFER, ZB.DEPTH_STENCIL_ATTACHMENT, ZB.RENDERBUFFER, null), ZB.framebufferRenderbuffer(ZB.FRAMEBUFFER, ZB.DEPTH_ATTACHMENT, ZB.RENDERBUFFER, null), ZB.framebufferRenderbuffer(ZB.FRAMEBUFFER, ZB.STENCIL_ATTACHMENT, ZB.RENDERBUFFER, null), BB._bindUnboundFramebuffer(IB), ZB.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null
        }
        return super.createDepthStencilTexture(BB, IB, ZB, TB, JB, oB)
      }
      shareDepth(BB) {
        super.shareDepth(BB);
        const IB = this._context,
          ZB = this._depthStencilBuffer,
          TB = BB._MSAAFramebuffer || BB._framebuffer,
          JB = this._engine;
        BB._depthStencilBuffer && BB._depthStencilBuffer !== ZB && IB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = ZB;
        const oB = BB._generateStencilBuffer ? IB.DEPTH_STENCIL_ATTACHMENT : IB.DEPTH_ATTACHMENT;
        JB._bindUnboundFramebuffer(TB), IB.framebufferRenderbuffer(IB.FRAMEBUFFER, oB, IB.RENDERBUFFER, ZB), JB._bindUnboundFramebuffer(null)
      }
      _bindTextureRenderTarget(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const JB = BB._hardwareTexture;
        if (!JB) return;
        const oB = this._framebuffer,
          GB = this._engine,
          vB = GB._currentFramebuffer;
        let kB;
        if (GB._bindUnboundFramebuffer(oB), GB.cg > 1) {
          const oB = this._context;
          kB = oB["COLOR_ATTACHMENT" + IB], BB.is2DArray || BB.is3D ? (ZB = ZB ?? this.layerIndices?.[IB] ?? 0, oB.framebufferTextureLayer(oB.FRAMEBUFFER, kB, JB.underlyingResource, TB, ZB)) : BB.isCube ? (ZB = ZB ?? this.faceIndices?.[IB] ?? 0, oB.framebufferTexture2D(oB.FRAMEBUFFER, kB, oB.TEXTURE_CUBE_MAP_POSITIVE_X + ZB, JB.underlyingResource, TB)) : oB.framebufferTexture2D(oB.FRAMEBUFFER, kB, oB.TEXTURE_2D, JB.underlyingResource, TB)
        } else {
          const BB = this._context;
          kB = BB["COLOR_ATTACHMENT" + IB + "_WEBGL"];
          const oB = void 0 !== ZB ? BB.TEXTURE_CUBE_MAP_POSITIVE_X + ZB : BB.TEXTURE_2D;
          BB.framebufferTexture2D(BB.FRAMEBUFFER, kB, oB, JB.underlyingResource, TB)
        }
        if (BB._autoMSAAManagement && this._MSAAFramebuffer) {
          const BB = this._context;
          GB._bindUnboundFramebuffer(this._MSAAFramebuffer), BB.framebufferRenderbuffer(BB.FRAMEBUFFER, kB, BB.RENDERBUFFER, JB.getMSAARenderBuffer())
        }
        GB._bindUnboundFramebuffer(vB)
      }
      setTexture(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super.setTexture(BB, IB, ZB), this._bindTextureRenderTarget(BB, IB)
      }
      setLayerAndFaceIndices(BB, IB) {
        if (super.setLayerAndFaceIndices(BB, IB), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const ZB = this._attachments?.length ?? this.textures.length;
        for (let TB = 0; TB < ZB; TB++) {
          const BB = this.textures[TB];
          BB && (BB.is2DArray || BB.is3D ? this._bindTextureRenderTarget(BB, TB, this.layerIndices[TB]) : BB.isCube ? this._bindTextureRenderTarget(BB, TB, this.faceIndices[TB]) : this._bindTextureRenderTarget(BB, TB))
        }
      }
      setLayerAndFaceIndex() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        if (super.setLayerAndFaceIndex(BB, IB, ZB), !this.textures || !this.layerIndices || !this.faceIndices) return;
        const TB = this.textures[BB];
        TB.is2DArray || TB.is3D ? this._bindTextureRenderTarget(this.textures[BB], BB, this.layerIndices[BB]) : TB.isCube && this._bindTextureRenderTarget(this.textures[BB], BB, this.faceIndices[BB])
      }
      resolveMSAATextures() {
        const BB = this._engine,
          IB = BB._currentFramebuffer;
        BB._bindUnboundFramebuffer(this._MSAAFramebuffer), super.resolveMSAATextures(), BB._bindUnboundFramebuffer(IB)
      }
      dispose() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._disposeOnlyFramebuffers;
        const IB = this._context;
        BB || (this._colorTextureArray && (this._context.deleteTexture(this._colorTextureArray), this._colorTextureArray = null), this._depthStencilTextureArray && (this._context.deleteTexture(this._depthStencilTextureArray), this._depthStencilTextureArray = null)), this._framebuffer && (IB.deleteFramebuffer(this._framebuffer), this._framebuffer = null), this._depthStencilBuffer && (IB.deleteRenderbuffer(this._depthStencilBuffer), this._depthStencilBuffer = null), this._MSAAFramebuffer && (IB.deleteFramebuffer(this._MSAAFramebuffer), this._MSAAFramebuffer = null), super.dispose(BB)
      }
    }
    let cB = !1;
    cB || (cB = !0, oB.ThinEngine.prototype._createHardwareRenderTargetWrapper = function(BB, IB, ZB) {
      const TB = new kB(BB, IB, ZB, this, this._gl);
      return this._renderTargetWrapperCache.push(TB), TB
    }, oB.ThinEngine.prototype.createRenderTargetTexture = function(BB, IB) {
      const ZB = this._createHardwareRenderTargetWrapper(!1, !1, BB);
      let TB, JB, oB = !0,
        GB = !1,
        vB = !1,
        kB = 1;
      void 0 !== IB && "object" === typeof IB && (oB = IB.generateDepthBuffer ?? !0, GB = !!IB.generateStencilBuffer, vB = !!IB.noColorAttachment, TB = IB.colorAttachment, kB = IB.samples ?? 1, JB = IB.label);
      const cB = TB || (vB ? null : this._createInternalTexture(BB, IB, !0, 5)),
        nB = BB.width || BB,
        hB = BB.height || BB,
        zB = this._currentFramebuffer,
        FB = this._gl,
        NB = FB.createFramebuffer();
      if (this._bindUnboundFramebuffer(NB), ZB._depthStencilBuffer = this._setupFramebufferDepthAttachments(GB, oB, nB, hB), !cB || cB.is2DArray || cB.is3D || FB.framebufferTexture2D(FB.FRAMEBUFFER, FB.COLOR_ATTACHMENT0, FB.TEXTURE_2D, cB._hardwareTexture.underlyingResource, 0), this._bindUnboundFramebuffer(zB), ZB.label = JB ?? "RenderTargetWrapper", ZB._framebuffer = NB, ZB._generateDepthBuffer = oB, ZB._generateStencilBuffer = GB, ZB.setTextures(cB), TB) {
        if (ZB._samples = TB.samples, TB.samples > 1) {
          const BB = TB._hardwareTexture.getMSAARenderBuffer(0);
          ZB._MSAAFramebuffer = FB.createFramebuffer(), this._bindUnboundFramebuffer(ZB._MSAAFramebuffer), FB.framebufferRenderbuffer(FB.FRAMEBUFFER, FB.COLOR_ATTACHMENT0, FB.RENDERBUFFER, BB), this._bindUnboundFramebuffer(null)
        }
      } else this.updateRenderTargetTextureSampleCount(ZB, kB);
      return ZB
    }, oB.ThinEngine.prototype._createDepthStencilTexture = function(BB, IB, ZB) {
      const oB = this._gl,
        GB = BB.layers || 0,
        kB = BB.depth || 0;
      let cB = oB.TEXTURE_2D;
      0 !== GB ? cB = oB.TEXTURE_2D_ARRAY : 0 !== kB && (cB = oB.TEXTURE_3D);
      const nB = new TB.b(this, 12);
      if (nB.label = IB.label, !this._caps.depthTextureExtension) return JB.d.Error("Depth texture is not supported by your browser or hardware."), nB;
      const hB = {
        bilinearFiltering: !1,
        comparisonFunction: 0,
        generateStencil: !1,
        ...IB
      };
      if (this._bindTextureDirectly(cB, nB, !0), this._setupDepthStencilTexture(nB, BB, 0 !== hB.comparisonFunction && hB.bilinearFiltering, hB.comparisonFunction, hB.samples), void 0 !== hB.depthTextureFormat) {
        if (15 !== hB.depthTextureFormat && 16 !== hB.depthTextureFormat && 17 !== hB.depthTextureFormat && 13 !== hB.depthTextureFormat && 14 !== hB.depthTextureFormat && 18 !== hB.depthTextureFormat) return JB.d.Error(`Depth texture ${hB.depthTextureFormat} format is not supported.`), nB;
        nB.format = hB.depthTextureFormat
      } else nB.format = hB.generateStencil ? 13 : 16;
      const zB = (0, vB.c)(nB.format),
        FB = this._getWebGLTextureTypeFromDepthTextureFormat(nB.format),
        NB = zB ? oB.DEPTH_STENCIL : oB.DEPTH_COMPONENT,
        gB = this._getInternalFormatFromDepthTextureFormat(nB.format, !0, zB);
      return nB.is2DArray ? oB.texImage3D(cB, 0, gB, nB.width, nB.height, GB, 0, NB, FB, null) : nB.is3D ? oB.texImage3D(cB, 0, gB, nB.width, nB.height, kB, 0, NB, FB, null) : oB.texImage2D(cB, 0, gB, nB.width, nB.height, 0, NB, FB, null), this._bindTextureDirectly(cB, null), this._internalTexturesCache.push(nB), ZB._depthStencilBuffer && (oB.deleteRenderbuffer(ZB._depthStencilBuffer), ZB._depthStencilBuffer = null), this._bindUnboundFramebuffer(ZB._MSAAFramebuffer ?? ZB._framebuffer), ZB._generateStencilBuffer = zB, ZB._depthStencilTextureWithStencil = zB, ZB._depthStencilBuffer = this._setupFramebufferDepthAttachments(ZB._generateStencilBuffer, ZB._generateDepthBuffer, ZB.width, ZB.height, ZB.samples, nB.format), this._bindUnboundFramebuffer(null), nB
    }, oB.ThinEngine.prototype.updateRenderTargetTextureSampleCount = function(BB, IB) {
      if (this.cg < 2 || !BB) return 1;
      if (BB.samples === IB) return IB;
      const ZB = this._gl;
      IB = Math.min(IB, this.getCaps().maxMSAASamples), BB._depthStencilBuffer && (ZB.deleteRenderbuffer(BB._depthStencilBuffer), BB._depthStencilBuffer = null), BB._MSAAFramebuffer && (ZB.deleteFramebuffer(BB._MSAAFramebuffer), BB._MSAAFramebuffer = null);
      const TB = BB.texture?._hardwareTexture;
      if (TB?.releaseMSAARenderBuffers(), BB.texture && IB > 1 && "function" === typeof ZB.renderbufferStorageMultisample) {
        const JB = ZB.createFramebuffer();
        if (!JB) throw new Error("Unable to create multi sampled framebuffer");
        BB._MSAAFramebuffer = JB, this._bindUnboundFramebuffer(BB._MSAAFramebuffer);
        const oB = this._createRenderBuffer(BB.texture.width, BB.texture.height, IB, -1, this._getRGBABufferInternalSizedFormat(BB.texture.type, BB.texture.format, BB.texture._useSRGBBuffer), ZB.COLOR_ATTACHMENT0, !1);
        if (!oB) throw new Error("Unable to create multi sampled framebuffer");
        TB?.addMSAARenderBuffer(oB)
      }
      this._bindUnboundFramebuffer(BB._MSAAFramebuffer ?? BB._framebuffer), BB.texture && (BB.texture.samples = IB), BB._samples = IB;
      const JB = BB._depthStencilTexture ? BB._depthStencilTexture.format : void 0;
      return BB._depthStencilBuffer = this._setupFramebufferDepthAttachments(BB._generateStencilBuffer, BB._generateDepthBuffer, BB.width, BB.height, IB, JB), this._bindUnboundFramebuffer(null), IB
    }, oB.ThinEngine.prototype._setupDepthStencilTexture = function(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
      const oB = IB.width ?? IB,
        GB = IB.height ?? IB,
        vB = IB.layers || 0,
        kB = IB.depth || 0;
      BB.baseWidth = oB, BB.baseHeight = GB, BB.width = oB, BB.height = GB, BB.is2DArray = vB > 0, BB.depth = vB || kB, BB.isReady = !0, BB.samples = JB, BB.generateMipMaps = !1, BB.samplingMode = ZB ? 2 : 1, BB.type = 0, BB._comparisonFunction = TB;
      const cB = this._gl,
        nB = this._getTextureTarget(BB),
        hB = this._getSamplingParameters(BB.samplingMode, !1);
      cB.texParameteri(nB, cB.TEXTURE_MAG_FILTER, hB.mag), cB.texParameteri(nB, cB.TEXTURE_MIN_FILTER, hB.min), cB.texParameteri(nB, cB.TEXTURE_WRAP_S, cB.CLAMP_TO_EDGE), cB.texParameteri(nB, cB.TEXTURE_WRAP_T, cB.CLAMP_TO_EDGE), this.cg > 1 && (0 === TB ? (cB.texParameteri(nB, cB.TEXTURE_COMPARE_FUNC, 515), cB.texParameteri(nB, cB.TEXTURE_COMPARE_MODE, cB.NONE)) : (cB.texParameteri(nB, cB.TEXTURE_COMPARE_FUNC, TB), cB.texParameteri(nB, cB.TEXTURE_COMPARE_MODE, cB.COMPARE_REF_TO_TEXTURE)))
    })
  },
  39872: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB.e
    });
    var TB = ZB(39876);
    (0, ZB(40023).c)();
    var JB = ZB(39895);
    let oB = !1;
    ! function() {
      if (oB) return;
      oB = !0;
      const BB = new WeakMap,
        IB = new WeakMap,
        ZB = new WeakMap,
        TB = new WeakMap;
      JB.ThinEngine.prototype.getAlphaToCoverage = function() {
        return BB.get(this) ?? !1
      }, JB.ThinEngine.prototype.setAlphaToCoverage = function(ZB) {
        (BB.get(this) !== ZB || this._gl && IB.get(this) !== this._gl) && (BB.set(this, ZB), this._gl && (ZB ? this._gl.enable(this._gl.SAMPLE_ALPHA_TO_COVERAGE) : this._gl.disable(this._gl.SAMPLE_ALPHA_TO_COVERAGE), IB.set(this, this._gl)))
      }, Object.defineProperty(JB.ThinEngine.prototype, "currentSampleCount", {
        get: function() {
          return this._currentRenderTarget ? this._currentRenderTarget.samples : this._gl ? (TB.get(this) !== this._gl && (ZB.set(this, this._gl.getContextAttributes()?.antialias ? Math.max(1, this._gl.getParameter(this._gl.SAMPLES)) : 1), TB.set(this, this._gl)), ZB.get(this)) : 1
        },
        enumerable: !1,
        configurable: !0
      })
    }();
    var GB = ZB(39885),
      vB = ZB(38718),
      kB = ZB(39993);
    let cB = !1;
    ! function() {
      function BB(BB, IB, ZB, TB) {
        let JB, oB = 1;
        1 === TB ? JB = new Float32Array(IB * ZB * 4) : 2 === TB ? (JB = new Uint16Array(IB * ZB * 4), oB = 15360) : JB = 7 === TB ? new Uint32Array(IB * ZB * 4) : new Uint8Array(IB * ZB * 4);
        for (let GB = 0; GB < IB; GB++)
          for (let TB = 0; TB < ZB; TB++) {
            const ZB = 3 * (TB * IB + GB),
              vB = 4 * (TB * IB + GB);
            JB[vB + 0] = BB[ZB + 0], JB[vB + 1] = BB[ZB + 1], JB[vB + 2] = BB[ZB + 2], JB[vB + 3] = oB
          }
        return JB
      }

      function IB(BB) {
        return function(IB, ZB, TB, JB, oB, vB, kB, cB) {
          let nB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
            hB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
          const zB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            FB = BB ? 10 : 11,
            NB = new GB.b(this, FB);
          NB.baseWidth = ZB, NB.baseHeight = TB, NB.baseDepth = JB, NB.width = ZB, NB.height = TB, NB.depth = JB, NB.format = oB, NB.type = hB, NB.generateMipMaps = vB, NB.samplingMode = cB, BB ? NB.is3D = !0 : NB.is2DArray = !0, this._doNotHandleContextLost || (NB._bufferView = IB), BB ? this.updateRawTexture3D(NB, IB, oB, kB, nB, hB) : this.updateRawTexture2DArray(NB, IB, oB, kB, nB, hB), this._bindTextureDirectly(zB, NB, !0);
          const gB = this._getSamplingParameters(cB, vB);
          return this._gl.texParameteri(zB, this._gl.TEXTURE_MAG_FILTER, gB.mag), this._gl.texParameteri(zB, this._gl.TEXTURE_MIN_FILTER, gB.min), vB && this._gl.generateMipmap(zB), this._bindTextureDirectly(zB, null), this._internalTexturesCache.push(NB), NB
        }
      }

      function ZB(BB) {
        return function(IB, ZB, TB, JB) {
          let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
            GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          const vB = BB ? this._gl.TEXTURE_3D : this._gl.TEXTURE_2D_ARRAY,
            kB = this._getWebGLTextureType(GB),
            cB = this._getInternalFormat(TB),
            nB = this._getRGBABufferInternalSizedFormat(GB, TB);
          this._bindTextureDirectly(vB, IB, !0), this._unpackFlipY(void 0 === JB || !!JB), this._doNotHandleContextLost || (IB._bufferView = ZB, IB.format = TB, IB.invertY = JB, IB._compression = oB), IB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), oB && ZB ? this._gl.compressedTexImage3D(vB, 0, this.getCaps().s3tc[oB], IB.width, IB.height, IB.depth, 0, ZB) : this._gl.texImage3D(vB, 0, nB, IB.width, IB.height, IB.depth, 0, cB, kB, ZB), IB.generateMipMaps && this._gl.generateMipmap(vB), this._bindTextureDirectly(vB, null), IB.isReady = !0
        }
      }
      cB || (cB = !0, JB.ThinEngine.prototype.updateRawTexture = function(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        if (!BB) return;
        const vB = this._getRGBABufferInternalSizedFormat(oB, ZB, GB),
          kB = this._getInternalFormat(ZB),
          cB = this._getWebGLTextureType(oB);
        this._bindTextureDirectly(this._gl.TEXTURE_2D, BB, !0), this._unpackFlipY(void 0 === TB || !!TB), this._doNotHandleContextLost || (BB._bufferView = IB, BB.format = ZB, BB.type = oB, BB.invertY = TB, BB._compression = JB), BB.width % 4 !== 0 && this._gl.pixelStorei(this._gl.UNPACK_ALIGNMENT, 1), JB && IB ? this._gl.compressedTexImage2D(this._gl.TEXTURE_2D, 0, this.getCaps().s3tc[JB], BB.width, BB.height, 0, IB) : this._gl.texImage2D(this._gl.TEXTURE_2D, 0, vB, BB.width, BB.height, 0, kB, cB, IB), BB.generateMipMaps && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), BB.isReady = !0
      }, JB.ThinEngine.prototype.createRawTexture = function(BB, IB, ZB, TB, JB, oB, vB) {
        let kB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
          cB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          nB = arguments.length > 10 && void 0 !== arguments[10] && arguments[10];
        const hB = new GB.b(this, 3);
        hB.baseWidth = IB, hB.baseHeight = ZB, hB.width = IB, hB.height = ZB, hB.format = TB, hB.generateMipMaps = JB, hB.samplingMode = vB, hB.invertY = oB, hB._compression = kB, hB.type = cB, hB._useSRGBBuffer = this._getUseSRGBBuffer(nB, !JB), this._doNotHandleContextLost || (hB._bufferView = BB), this.updateRawTexture(hB, BB, TB, oB, kB, cB, hB._useSRGBBuffer), this._bindTextureDirectly(this._gl.TEXTURE_2D, hB, !0);
        const zB = this._getSamplingParameters(vB, JB);
        return this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, zB.mag), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, zB.min), JB && this._gl.generateMipmap(this._gl.TEXTURE_2D), this._bindTextureDirectly(this._gl.TEXTURE_2D, null), this._internalTexturesCache.push(hB), hB
      }, JB.ThinEngine.prototype.createRawCubeTexture = function(BB, IB, ZB, TB, JB, oB, cB) {
        let nB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
        const hB = this._gl,
          zB = new GB.b(this, 8);
        zB.isCube = !0, zB.format = ZB, zB.type = TB, this._doNotHandleContextLost || (zB._bufferViewArray = BB);
        const FB = this._getWebGLTextureType(TB);
        let NB = this._getInternalFormat(ZB);
        NB === hB.RGB && (NB = hB.RGBA), FB !== hB.FLOAT || this._caps.textureFloatLinearFiltering ? FB !== this._gl.HALF_FLOAT_OES || this._caps.textureHalfFloatLinearFiltering ? FB !== hB.FLOAT || this._caps.textureFloatRender ? FB !== hB.HALF_FLOAT || this._caps.colorBufferFloat || (JB = !1, vB.d.Warn("Render to half float textures is not supported. Mipmap generation forced to false.")) : (JB = !1, vB.d.Warn("Render to float textures is not supported. Mipmap generation forced to false.")) : (JB = !1, cB = 1, vB.d.Warn("Half float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively.")) : (JB = !1, cB = 1, vB.d.Warn("Float texture filtering is not supported. Mipmap generation and sampling mode are forced to false and TEXTURE_NEAREST_SAMPLINGMODE, respectively."));
        const gB = IB,
          qB = gB;
        zB.width = gB, zB.height = qB, zB.invertY = oB, zB._compression = nB;
        if (!this.needPOTTextures || (0, kB.i)(zB.width) && (0, kB.i)(zB.height) || (JB = !1), BB) this.updateRawCubeTexture(zB, BB, ZB, TB, oB, nB);
        else {
          const BB = this._getRGBABufferInternalSizedFormat(TB),
            IB = 0;
          this._bindTextureDirectly(hB.TEXTURE_CUBE_MAP, zB, !0);
          for (let ZB = 0; ZB < 6; ZB++) nB ? hB.compressedTexImage2D(hB.TEXTURE_CUBE_MAP_POSITIVE_X + ZB, IB, this.getCaps().s3tc[nB], zB.width, zB.height, 0, void 0) : hB.texImage2D(hB.TEXTURE_CUBE_MAP_POSITIVE_X + ZB, IB, BB, zB.width, zB.height, 0, NB, FB, null);
          this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)
        }
        this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, zB, !0), BB && JB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP);
        const yB = this._getSamplingParameters(cB, JB);
        return hB.texParameteri(hB.TEXTURE_CUBE_MAP, hB.TEXTURE_MAG_FILTER, yB.mag), hB.texParameteri(hB.TEXTURE_CUBE_MAP, hB.TEXTURE_MIN_FILTER, yB.min), hB.texParameteri(hB.TEXTURE_CUBE_MAP, hB.TEXTURE_WRAP_S, hB.CLAMP_TO_EDGE), hB.texParameteri(hB.TEXTURE_CUBE_MAP, hB.TEXTURE_WRAP_T, hB.CLAMP_TO_EDGE), this._bindTextureDirectly(hB.TEXTURE_CUBE_MAP, null), zB.generateMipMaps = JB, zB.samplingMode = cB, zB.isReady = !0, zB
      }, JB.ThinEngine.prototype.updateRawCubeTexture = function(IB, ZB, TB, JB, oB) {
        let GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
          vB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0;
        IB._bufferViewArray = ZB, IB.format = TB, IB.type = JB, IB.invertY = oB, IB._compression = GB;
        const cB = this._gl,
          nB = this._getWebGLTextureType(JB);
        let hB = this._getInternalFormat(TB);
        const zB = this._getRGBABufferInternalSizedFormat(JB);
        let FB = !1;
        hB === cB.RGB && (hB = cB.RGBA, FB = !0), this._bindTextureDirectly(cB.TEXTURE_CUBE_MAP, IB, !0), this._unpackFlipY(void 0 === oB || !!oB), IB.width % 4 !== 0 && cB.pixelStorei(cB.UNPACK_ALIGNMENT, 1);
        for (let kB = 0; kB < 6; kB++) {
          let TB = ZB[kB];
          GB ? cB.compressedTexImage2D(cB.TEXTURE_CUBE_MAP_POSITIVE_X + kB, vB, this.getCaps().s3tc[GB], IB.width, IB.height, 0, TB) : (FB && (TB = BB(TB, IB.width, IB.height, JB)), cB.texImage2D(cB.TEXTURE_CUBE_MAP_POSITIVE_X + kB, vB, zB, IB.width, IB.height, 0, hB, nB, TB))
        }(!this.needPOTTextures || (0, kB.i)(IB.width) && (0, kB.i)(IB.height)) && IB.generateMipMaps && 0 === vB && this._gl.generateMipmap(this._gl.TEXTURE_CUBE_MAP), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null), IB.isReady = !0
      }, JB.ThinEngine.prototype.createRawCubeTextureFromUrl = function(IB, ZB, TB, JB, oB, GB, vB, kB) {
        let cB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
          nB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
          hB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 3,
          zB = arguments.length > 11 && void 0 !== arguments[11] && arguments[11];
        const FB = this._gl,
          NB = this.createRawCubeTexture(null, TB, JB, oB, !GB, zB, hB, null);
        ZB?.addPendingData(NB), NB.url = IB, NB.isReady = !1, this._internalTexturesCache.push(NB);
        const gB = (BB, IB) => {
            ZB?.removePendingData(NB), nB && nB(BB ? BB.status + " " + BB.statusText : "Failed to parse texture data", IB)
          },
          qB = async IB => {
            if (!NB._hardwareTexture) return;
            const TB = vB(IB);
            if (!TB) return;
            const GB = TB instanceof Promise ? await TB : TB,
              nB = NB.width;
            if (kB) {
              const IB = this._getWebGLTextureType(oB);
              let ZB = this._getInternalFormat(JB);
              const TB = this._getRGBABufferInternalSizedFormat(oB);
              let vB = !1;
              ZB === FB.RGB && (ZB = FB.RGBA, vB = !0), this._bindTextureDirectly(FB.TEXTURE_CUBE_MAP, NB, !0), this._unpackFlipY(!1);
              const cB = kB(GB);
              for (let JB = 0; JB < cB.length; JB++) {
                const GB = nB >> JB;
                for (let kB = 0; kB < 6; kB++) {
                  let nB = cB[JB][kB];
                  vB && (nB = BB(nB, GB, GB, oB)), FB.texImage2D(kB, JB, TB, GB, GB, 0, ZB, IB, nB)
                }
              }
              this._bindTextureDirectly(FB.TEXTURE_CUBE_MAP, null)
            } else this.updateRawCubeTexture(NB, GB, JB, oB, zB);
            NB.isReady = !0, ZB?.removePendingData(NB), NB.onLoadedObservable.notifyObservers(NB), NB.onLoadedObservable.clear(), cB && cB()
          };
        return this._loadFile(IB, (BB => {
          qB(BB).catch((BB => {
            gB(void 0, BB)
          }))
        }), void 0, ZB?.offlineProvider, !0, gB), NB
      }, JB.ThinEngine.prototype.createRawTexture2DArray = IB(!1), JB.ThinEngine.prototype.createRawTexture3D = IB(!0), JB.ThinEngine.prototype.updateRawTexture2DArray = ZB(!1), JB.ThinEngine.prototype.updateRawTexture3D = ZB(!0))
    }();
    var nB = ZB(39926);
    let hB = !1;
    hB || (hB = !0, JB.ThinEngine.prototype._readTexturePixelsSync = function(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        GB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        vB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        kB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        cB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      const hB = this._gl;
      if (!hB) throw new Error("Engine does not have gl rendering context.");
      if (!this._dummyFramebuffer) {
        const BB = hB.createFramebuffer();
        if (!BB) throw new Error("Unable to create dummy framebuffer");
        this._dummyFramebuffer = BB
      }
      hB.bindFramebuffer(hB.FRAMEBUFFER, this._dummyFramebuffer), TB > -1 && (BB.is2DArray || BB.is3D) ? hB.framebufferTextureLayer(hB.FRAMEBUFFER, hB.COLOR_ATTACHMENT0, BB._hardwareTexture?.underlyingResource, JB, TB) : TB > -1 ? hB.framebufferTexture2D(hB.FRAMEBUFFER, hB.COLOR_ATTACHMENT0, hB.TEXTURE_CUBE_MAP_POSITIVE_X + TB, BB._hardwareTexture?.underlyingResource, JB) : hB.framebufferTexture2D(hB.FRAMEBUFFER, hB.COLOR_ATTACHMENT0, hB.TEXTURE_2D, BB._hardwareTexture?.underlyingResource, JB);
      let zB = void 0 !== BB.type ? this._getWebGLTextureType(BB.type) : hB.UNSIGNED_BYTE;
      return vB ? oB || (oB = (0, nB.n)(BB.type, 4 * IB * ZB)) : zB === hB.UNSIGNED_BYTE ? (oB || (oB = new Uint8Array(4 * IB * ZB)), zB = hB.UNSIGNED_BYTE) : (oB || (oB = new Float32Array(4 * IB * ZB)), zB = hB.FLOAT), GB && this.flushFramebuffer(), hB.readPixels(kB, cB, IB, ZB, hB.RGBA, zB, oB), hB.bindFramebuffer(hB.FRAMEBUFFER, this._currentFramebuffer), oB
    }, JB.ThinEngine.prototype._readTexturePixels = function(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1,
        JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
        oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        GB = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
        vB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
        kB = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
        cB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;
      return Promise.resolve(this._readTexturePixelsSync(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB))
    }), (0, ZB(40025).c)();
    let zB = !1;
    zB || (zB = !0, JB.ThinEngine.prototype._createDepthStencilCubeTexture = function(BB, IB) {
      const ZB = new GB.b(this, 12);
      if (ZB.isCube = !0, 1 === this.cg) return vB.d.Error("Depth cube texture is not supported by WebGL 1."), ZB;
      const TB = {
          bilinearFiltering: !1,
          comparisonFunction: 0,
          generateStencil: !1,
          ...IB
        },
        JB = this._gl;
      this._bindTextureDirectly(JB.TEXTURE_CUBE_MAP, ZB, !0), this._setupDepthStencilTexture(ZB, BB, TB.bilinearFiltering, TB.comparisonFunction);
      for (let oB = 0; oB < 6; oB++) TB.generateStencil ? JB.texImage2D(JB.TEXTURE_CUBE_MAP_POSITIVE_X + oB, 0, JB.DEPTH24_STENCIL8, BB, BB, 0, JB.DEPTH_STENCIL, JB.UNSIGNED_INT_24_8, null) : JB.texImage2D(JB.TEXTURE_CUBE_MAP_POSITIVE_X + oB, 0, JB.DEPTH_COMPONENT24, BB, BB, 0, JB.DEPTH_COMPONENT, JB.UNSIGNED_INT, null);
      return this._bindTextureDirectly(JB.TEXTURE_CUBE_MAP, null), this._internalTexturesCache.push(ZB), ZB
    }, JB.ThinEngine.prototype._setCubeMapTextureParams = function(BB, IB, ZB) {
      const TB = this._gl;
      TB.texParameteri(TB.TEXTURE_CUBE_MAP, TB.TEXTURE_MAG_FILTER, TB.LINEAR), TB.texParameteri(TB.TEXTURE_CUBE_MAP, TB.TEXTURE_MIN_FILTER, IB ? TB.LINEAR_MIPMAP_LINEAR : TB.LINEAR), TB.texParameteri(TB.TEXTURE_CUBE_MAP, TB.TEXTURE_WRAP_S, TB.CLAMP_TO_EDGE), TB.texParameteri(TB.TEXTURE_CUBE_MAP, TB.TEXTURE_WRAP_T, TB.CLAMP_TO_EDGE), BB.samplingMode = IB ? 3 : 2, IB && this.getCaps().textureMaxLevel && void 0 !== ZB && ZB > 0 && (TB.texParameteri(TB.TEXTURE_CUBE_MAP, TB.TEXTURE_MAX_LEVEL, ZB), BB._maxLodLevel = ZB), this._bindTextureDirectly(TB.TEXTURE_CUBE_MAP, null)
    }, JB.ThinEngine.prototype.createCubeTexture = function(BB, IB, ZB, TB) {
      let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        GB = arguments.length > 6 ? arguments[6] : void 0,
        cB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        nB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
        hB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
        zB = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
        FB = arguments.length > 11 && void 0 !== arguments[11] ? arguments[11] : null,
        NB = arguments.length > 13 && void 0 !== arguments[13] && arguments[13],
        gB = arguments.length > 14 && void 0 !== arguments[14] ? arguments[14] : null;
      const qB = this._gl;
      return this.createCubeTextureBase(BB, IB, ZB, !!TB, JB, oB, GB, cB, nB, hB, zB, FB, (BB => this._bindTextureDirectly(qB.TEXTURE_CUBE_MAP, BB, !0)), ((BB, IB) => {
        const ZB = this.needPOTTextures ? (0, kB.f)(IB[0].width, this._caps.maxCubemapTextureSize) : IB[0].width,
          oB = ZB,
          cB = [qB.TEXTURE_CUBE_MAP_POSITIVE_X, qB.TEXTURE_CUBE_MAP_POSITIVE_Y, qB.TEXTURE_CUBE_MAP_POSITIVE_Z, qB.TEXTURE_CUBE_MAP_NEGATIVE_X, qB.TEXTURE_CUBE_MAP_NEGATIVE_Y, qB.TEXTURE_CUBE_MAP_NEGATIVE_Z];
        this._bindTextureDirectly(qB.TEXTURE_CUBE_MAP, BB, !0), this._unpackFlipY(!1);
        const nB = GB ? this._getInternalFormat(GB, BB._useSRGBBuffer) : BB._useSRGBBuffer ? this._glSRGBExtensionValues.SRGB8_ALPHA8 : qB.RGBA;
        let hB = GB ? this._getInternalFormat(GB) : qB.RGBA;
        BB._useSRGBBuffer && 1 === this.cg && (hB = nB);
        for (let TB = 0; TB < cB.length; TB++)
          if (IB[TB].width !== ZB || IB[TB].height !== oB) {
            if (this._prepareWorkingCanvas(), !this._workingCanvas || !this._workingContext) return void vB.d.Warn("Cannot create canvas to resize texture.");
            this._workingCanvas.width = ZB, this._workingCanvas.height = oB, this._workingContext.drawImage(IB[TB], 0, 0, IB[TB].width, IB[TB].height, 0, 0, ZB, oB), qB.texImage2D(cB[TB], 0, nB, hB, qB.UNSIGNED_BYTE, this._workingCanvas)
          } else qB.texImage2D(cB[TB], 0, nB, hB, qB.UNSIGNED_BYTE, IB[TB]);
        TB || qB.generateMipmap(qB.TEXTURE_CUBE_MAP), this._setCubeMapTextureParams(BB, !TB), BB.width = ZB, BB.height = oB, BB.isReady = !0, GB && (BB.format = GB), BB.onLoadedObservable.notifyObservers(BB), BB.onLoadedObservable.clear(), JB && JB()
      }), !!NB, gB)
    }, JB.ThinEngine.prototype.generateMipMapsForCubemap = function(BB) {
      let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (BB.generateMipMaps) {
        const ZB = this._gl;
        this._bindTextureDirectly(ZB.TEXTURE_CUBE_MAP, BB, !0), ZB.generateMipmap(ZB.TEXTURE_CUBE_MAP), IB && this._bindTextureDirectly(ZB.TEXTURE_CUBE_MAP, null)
      }
    });
    ZB(40034);
    let FB = !1;
    FB || (FB = !0, JB.ThinEngine.prototype.setDepthStencilTexture = function(BB, IB, ZB, TB) {
      void 0 !== BB && (IB && (this._boundUniforms[BB] = IB), ZB && ZB.depthStencilTexture ? this._setTexture(BB, ZB, !1, !0, TB) : this._setTexture(BB, null, void 0, void 0, TB))
    });
    let NB = !1;
    NB || (NB = !0, JB.ThinEngine.prototype.createRenderTargetCubeTexture = function(BB, IB) {
      const ZB = this._createHardwareRenderTargetWrapper(!1, !0, BB),
        TB = {
          generateMipMaps: !0,
          generateDepthBuffer: !0,
          generateStencilBuffer: !1,
          type: 0,
          samplingMode: 3,
          format: 5,
          ...IB
        };
      TB.generateStencilBuffer = TB.generateDepthBuffer && TB.generateStencilBuffer, (1 !== TB.type || this._caps.textureFloatLinearFiltering) && (2 !== TB.type || this._caps.textureHalfFloatLinearFiltering) || (TB.samplingMode = 1);
      const JB = this._gl,
        oB = new GB.b(this, 5);
      this._bindTextureDirectly(JB.TEXTURE_CUBE_MAP, oB, !0);
      const kB = this._getSamplingParameters(TB.samplingMode, TB.generateMipMaps);
      1 !== TB.type || this._caps.textureFloat || (TB.type = 0, vB.d.Warn("Float textures are not supported. Cube render target forced to TEXTURETYPE_UNESIGNED_BYTE type")), JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_MAG_FILTER, kB.mag), JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_MIN_FILTER, kB.min), JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_WRAP_S, JB.CLAMP_TO_EDGE), JB.texParameteri(JB.TEXTURE_CUBE_MAP, JB.TEXTURE_WRAP_T, JB.CLAMP_TO_EDGE);
      for (let GB = 0; GB < 6; GB++) JB.texImage2D(JB.TEXTURE_CUBE_MAP_POSITIVE_X + GB, 0, this._getRGBABufferInternalSizedFormat(TB.type, TB.format), BB, BB, 0, this._getInternalFormat(TB.format), this._getWebGLTextureType(TB.type), null);
      const cB = JB.createFramebuffer();
      return this._bindUnboundFramebuffer(cB), ZB._depthStencilBuffer = this._setupFramebufferDepthAttachments(TB.generateStencilBuffer, TB.generateDepthBuffer, BB, BB), TB.generateMipMaps && JB.generateMipmap(JB.TEXTURE_CUBE_MAP), this._bindTextureDirectly(JB.TEXTURE_CUBE_MAP, null), this._bindUnboundFramebuffer(null), ZB._framebuffer = cB, ZB._generateDepthBuffer = TB.generateDepthBuffer, ZB._generateStencilBuffer = TB.generateStencilBuffer, oB.width = BB, oB.height = BB, oB.isReady = !0, oB.isCube = !0, oB.samples = 1, oB.generateMipMaps = TB.generateMipMaps, oB.samplingMode = TB.samplingMode, oB.type = TB.type, oB.format = TB.format, this._internalTexturesCache.push(oB), ZB.setTextures(oB), ZB
    });
    var gB = ZB(40044),
      qB = ZB(40052);
    let yB = !1;
    yB || (yB = !0, JB.ThinEngine.prototype.createPrefilteredCubeTexture = function(BB, IB, TB, JB) {
      let oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
        kB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
        cB = arguments.length > 6 ? arguments[6] : void 0,
        nB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        hB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        zB = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null;
      return this.createCubeTexture(BB, IB, null, !1, (async BB => {
        if (!BB) return void(oB && oB(null));
        const kB = BB.texture;
        if (hB ? BB.info.sphericalPolynomial && (kB._sphericalPolynomial = BB.info.sphericalPolynomial) : kB._sphericalPolynomial = kB._sphericalPolynomial ?? new gB.f, kB._source = 9, this.getCaps().textureLOD) return void(oB && oB(kB));
        const cB = this._gl,
          nB = BB.width;
        if (!nB) return;
        const {
          DDSTools: zB
        } = await ZB.e(311).then((() => ZB(41790))), FB = [];
        for (let ZB = 0; ZB < 3; ZB++) {
          const oB = 1 - ZB / 2,
            hB = JB,
            NB = Math.log2(nB) * TB + JB,
            gB = hB + (NB - hB) * oB,
            yB = Math.round(Math.min(Math.max(gB, 0), NB)),
            UB = new GB.b(this, 2);
          if (UB.type = kB.type, UB.format = kB.format, UB.width = Math.pow(2, Math.max(Math.log2(nB) - yB, 0)), UB.height = UB.width, UB.isCube = !0, UB._cachedWrapU = 0, UB._cachedWrapV = 0, this._bindTextureDirectly(cB.TEXTURE_CUBE_MAP, UB, !0), UB.samplingMode = 2, cB.texParameteri(cB.TEXTURE_CUBE_MAP, cB.TEXTURE_MAG_FILTER, cB.LINEAR), cB.texParameteri(cB.TEXTURE_CUBE_MAP, cB.TEXTURE_MIN_FILTER, cB.LINEAR), cB.texParameteri(cB.TEXTURE_CUBE_MAP, cB.TEXTURE_WRAP_S, cB.CLAMP_TO_EDGE), cB.texParameteri(cB.TEXTURE_CUBE_MAP, cB.TEXTURE_WRAP_T, cB.CLAMP_TO_EDGE), BB.isDDS) {
            const IB = BB.info,
              ZB = BB.data;
            this._unpackFlipY(IB.isCompressed), zB.UploadDDSLevels(this, UB, ZB, IB, !0, 6, yB)
          } else vB.d.Warn("DDS is the only prefiltered cube map supported so far.");
          this._bindTextureDirectly(cB.TEXTURE_CUBE_MAP, null);
          const WB = new qB.e(IB);
          WB._isCube = !0, WB._texture = UB, UB.isReady = !0, FB.push(WB)
        }
        kB._lodTextureHigh = FB[2], kB._lodTextureMid = FB[1], kB._lodTextureLow = FB[0], oB && oB(kB)
      }), kB, cB, nB, hB, TB, JB, null, void 0, !1, zB)
    });
    var UB = ZB(39976);
    let WB = !1;
    WB || (WB = !0, JB.ThinEngine.prototype.createUniformBuffer = function(BB, IB) {
      const ZB = this._gl.createBuffer();
      if (!ZB) throw new Error("Unable to create uniform buffer");
      const TB = new UB.d(ZB);
      return this.bindUniformBuffer(TB), BB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, BB, this._gl.STATIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(BB), this._gl.STATIC_DRAW), this.bindUniformBuffer(null), TB.references = 1, TB
    }, JB.ThinEngine.prototype.createDynamicUniformBuffer = function(BB, IB) {
      const ZB = this._gl.createBuffer();
      if (!ZB) throw new Error("Unable to create dynamic uniform buffer");
      const TB = new UB.d(ZB);
      return this.bindUniformBuffer(TB), BB instanceof Float32Array ? this._gl.bufferData(this._gl.UNIFORM_BUFFER, BB, this._gl.DYNAMIC_DRAW) : this._gl.bufferData(this._gl.UNIFORM_BUFFER, new Float32Array(BB), this._gl.DYNAMIC_DRAW), this.bindUniformBuffer(null), TB.references = 1, TB
    }, JB.ThinEngine.prototype.updateUniformBuffer = function(BB, IB, ZB, TB) {
      this.bindUniformBuffer(BB), void 0 === ZB && (ZB = 0), void 0 === TB ? IB instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ZB, IB) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, ZB, new Float32Array(IB)) : IB instanceof Float32Array ? this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, IB.subarray(ZB, ZB + TB)) : this._gl.bufferSubData(this._gl.UNIFORM_BUFFER, 0, new Float32Array(IB).subarray(ZB, ZB + TB)), this.bindUniformBuffer(null)
    }, JB.ThinEngine.prototype.bindUniformBuffer = function(BB) {
      this._gl.bindBuffer(this._gl.UNIFORM_BUFFER, BB ? BB.underlyingResource : null)
    }, JB.ThinEngine.prototype.bindUniformBufferBase = function(BB, IB, ZB) {
      this._gl.bindBufferBase(this._gl.UNIFORM_BUFFER, IB, BB ? BB.underlyingResource : null)
    }, JB.ThinEngine.prototype.bindUniformBlock = function(BB, IB, ZB) {
      const TB = BB.program,
        JB = this._gl.getUniformBlockIndex(TB, IB);
      4294967295 !== JB && this._gl.uniformBlockBinding(TB, JB, ZB)
    });
    var dB = ZB(39912),
      CB = ZB(39951);
    let QB = !1;
    QB || (QB = !0, CB.c.prototype.displayLoadingUI = function() {
      if (!(0, dB.l)()) return;
      const BB = this.loadingScreen;
      BB && BB.displayLoadingUI()
    }, CB.c.prototype.hideLoadingUI = function() {
      if (!(0, dB.l)()) return;
      const BB = this._loadingScreen;
      BB && BB.hideLoadingUI()
    }, Object.defineProperty(CB.c.prototype, "loadingScreen", {
      get: function() {
        return !this._loadingScreen && this._renderingCanvas && (this._loadingScreen = CB.c.DefaultLoadingScreenFactory(this._renderingCanvas)), this._loadingScreen
      },
      set: function(BB) {
        this._loadingScreen = BB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(CB.c.prototype, "loadingUIText", {
      set: function(BB) {
        this.loadingScreen.loadingUIText = BB
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(CB.c.prototype, "loadingUIBackgroundColor", {
      set: function(BB) {
        this.loadingScreen.loadingUIBackgroundColor = BB
      },
      enumerable: !0,
      configurable: !0
    })), (0, ZB(40015).d)();
    let sB = !1;
    sB || (sB = !0, CB.c.prototype.getInputElement = function() {
      return this._renderingCanvas
    }, CB.c.prototype.getDepthFunction = function() {
      return this._depthCullingState.depthFunc
    }, CB.c.prototype.setDepthFunction = function(BB) {
      this._depthCullingState.depthFunc = BB
    }, CB.c.prototype.setDepthFunctionToGreater = function() {
      this.setDepthFunction(516)
    }, CB.c.prototype.setDepthFunctionToGreaterOrEqual = function() {
      this.setDepthFunction(518)
    }, CB.c.prototype.setDepthFunctionToLess = function() {
      this.setDepthFunction(513)
    }, CB.c.prototype.setDepthFunctionToLessOrEqual = function() {
      this.setDepthFunction(515)
    }, CB.c.prototype.getDepthWrite = function() {
      return this._depthCullingState.depthMask
    }, CB.c.prototype.setDepthWrite = function(BB) {
      this._depthCullingState.depthMask = BB
    }, CB.c.prototype.setAlphaConstants = function(BB, IB, ZB, TB) {
      this._alphaState.setAlphaBlendConstants(BB, IB, ZB, TB)
    }, CB.c.prototype.getAlphaMode = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaMode[BB]
    }, CB.c.prototype.getAlphaEquation = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return this._alphaEquation[BB]
    });
    let wB = !1;
    wB || (wB = !0, CB.c.prototype.getStencilBuffer = function() {
      return this._stencilState.stencilTest
    }, CB.c.prototype.setStencilBuffer = function(BB) {
      this._stencilState.stencilTest = BB
    }, CB.c.prototype.getStencilMask = function() {
      return this._stencilState.stencilMask
    }, CB.c.prototype.setStencilMask = function(BB) {
      this._stencilState.stencilMask = BB
    }, CB.c.prototype.getStencilFunction = function() {
      return this._stencilState.stencilFunc
    }, CB.c.prototype.getStencilBackFunction = function() {
      return this._stencilState.stencilBackFunc
    }, CB.c.prototype.getStencilFunctionReference = function() {
      return this._stencilState.stencilFuncRef
    }, CB.c.prototype.getStencilFunctionMask = function() {
      return this._stencilState.stencilFuncMask
    }, CB.c.prototype.setStencilFunction = function(BB) {
      this._stencilState.stencilFunc = BB
    }, CB.c.prototype.setStencilBackFunction = function(BB) {
      this._stencilState.stencilBackFunc = BB
    }, CB.c.prototype.setStencilFunctionReference = function(BB) {
      this._stencilState.stencilFuncRef = BB
    }, CB.c.prototype.setStencilFunctionMask = function(BB) {
      this._stencilState.stencilFuncMask = BB
    }, CB.c.prototype.getStencilOperationFail = function() {
      return this._stencilState.stencilOpStencilFail
    }, CB.c.prototype.getStencilBackOperationFail = function() {
      return this._stencilState.stencilBackOpStencilFail
    }, CB.c.prototype.getStencilOperationDepthFail = function() {
      return this._stencilState.stencilOpDepthFail
    }, CB.c.prototype.getStencilBackOperationDepthFail = function() {
      return this._stencilState.stencilBackOpDepthFail
    }, CB.c.prototype.getStencilOperationPass = function() {
      return this._stencilState.stencilOpStencilDepthPass
    }, CB.c.prototype.getStencilBackOperationPass = function() {
      return this._stencilState.stencilBackOpStencilDepthPass
    }, CB.c.prototype.setStencilOperationFail = function(BB) {
      this._stencilState.stencilOpStencilFail = BB
    }, CB.c.prototype.setStencilBackOperationFail = function(BB) {
      this._stencilState.stencilBackOpStencilFail = BB
    }, CB.c.prototype.setStencilOperationDepthFail = function(BB) {
      this._stencilState.stencilOpDepthFail = BB
    }, CB.c.prototype.setStencilBackOperationDepthFail = function(BB) {
      this._stencilState.stencilBackOpDepthFail = BB
    }, CB.c.prototype.setStencilOperationPass = function(BB) {
      this._stencilState.stencilOpStencilDepthPass = BB
    }, CB.c.prototype.setStencilBackOperationPass = function(BB) {
      this._stencilState.stencilBackOpStencilDepthPass = BB
    }, CB.c.prototype.cacheStencilState = function() {
      this._cachedStencilBuffer = this.getStencilBuffer(), this._cachedStencilFunction = this.getStencilFunction(), this._cachedStencilMask = this.getStencilMask(), this._cachedStencilOperationPass = this.getStencilOperationPass(), this._cachedStencilOperationFail = this.getStencilOperationFail(), this._cachedStencilOperationDepthFail = this.getStencilOperationDepthFail(), this._cachedStencilReference = this.getStencilFunctionReference()
    }, CB.c.prototype.restoreStencilState = function() {
      this.setStencilFunction(this._cachedStencilFunction), this.setStencilMask(this._cachedStencilMask), this.setStencilBuffer(this._cachedStencilBuffer), this.setStencilOperationPass(this._cachedStencilOperationPass), this.setStencilOperationFail(this._cachedStencilOperationFail), this.setStencilOperationDepthFail(this._cachedStencilOperationDepthFail), this.setStencilFunctionReference(this._cachedStencilReference)
    });
    ZB(40094);
    let OB = !1;
    OB || (OB = !0, CB.c.prototype.createDepthStencilTexture = function(BB, IB, ZB) {
      if (IB.isCube) {
        const ZB = BB.width || BB;
        return this._createDepthStencilCubeTexture(ZB, IB)
      }
      return this._createDepthStencilTexture(BB, IB, ZB)
    });
    ZB(40103), ZB(40137);
    let YB = !1;
    YB || (YB = !0, JB.ThinEngine.prototype.enableScissor = function(BB, IB, ZB, TB) {
      const JB = this._gl;
      JB.enable(JB.SCISSOR_TEST), JB.scissor(BB, IB, ZB, TB)
    }, JB.ThinEngine.prototype.disableScissor = function() {
      const BB = this._gl;
      BB.disable(BB.SCISSOR_TEST)
    })
  },
  39876: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => CB
    });
    var TB = ZB(39885),
      JB = ZB(37147),
      oB = ZB(39895),
      GB = ZB(39959);
    class vB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        this._enabled = !0, this._rollingFrameTime = new kB(BB)
      }
      sampleFrame() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.c.Now;
        if (this._enabled) {
          if (null != this._lastFrameTimeMs) {
            const IB = BB - this._lastFrameTimeMs;
            this._rollingFrameTime.add(IB)
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
    class kB {
      constructor(BB) {
        this._samples = new Array(BB), this.reset()
      }
      add(BB) {
        let IB;
        if (this.isSaturated()) {
          const BB = this._samples[this._pos];
          IB = BB - this.average, this.average -= IB / (this._sampleCount - 1), this._m2 -= IB * (BB - this.average)
        } else this._sampleCount++;
        IB = BB - this.average, this.average += IB / this._sampleCount, this._m2 += IB * (BB - this.average), this.variance = this._m2 / (this._sampleCount - 1), this._samples[this._pos] = BB, this._pos++, this._pos %= this._samples.length
      }
      history(BB) {
        if (BB >= this._sampleCount || BB >= this._samples.length) return 0;
        const IB = this._wrapPosition(this._pos - 1);
        return this._samples[this._wrapPosition(IB - BB)]
      }
      isSaturated() {
        return this._sampleCount >= this._samples.length
      }
      reset() {
        this.average = 0, this.variance = 0, this._sampleCount = 0, this._pos = 0, this._m2 = 0
      }
      _wrapPosition(BB) {
        const IB = this._samples.length;
        return (BB % IB + IB) % IB
      }
    }
    var cB = ZB(39976),
      nB = ZB(38718),
      hB = ZB(39995),
      zB = ZB(39951),
      FB = ZB(39912);

    function NB(BB) {
      const IB = function(BB) {
        if (!(0, FB.g)() || !document.body) return null;
        const IB = document.createElement("span");
        IB.textContent = "Hg", IB.style.font = BB;
        const ZB = document.createElement("div");
        ZB.style.display = "inline-block", ZB.style.width = "1px", ZB.style.height = "0px", ZB.style.verticalAlign = "bottom";
        const TB = document.createElement("div");
        let JB, oB;
        TB.style.whiteSpace = "nowrap", TB.appendChild(IB), TB.appendChild(ZB), document.body.appendChild(TB);
        try {
          oB = ZB.getBoundingClientRect().top - IB.getBoundingClientRect().top, ZB.style.verticalAlign = "baseline", JB = ZB.getBoundingClientRect().top - IB.getBoundingClientRect().top
        } finally {
          document.body.removeChild(TB)
        }
        const GB = {
          ascent: JB,
          height: oB,
          descent: oB - JB
        };
        return gB(GB) ? GB : null
      }(BB);
      if (IB) return IB;
      const ZB = function(BB) {
        let IB = null;
        try {
          "undefined" !== typeof OffscreenCanvas ? IB = new OffscreenCanvas(64, 64) : (0, FB.g)() && "function" === typeof document.createElement && (IB = document.createElement("canvas"), IB.width = 64, IB.height = 64);
          const ZB = IB?.getContext("2d");
          if (!ZB) return null;
          ZB.font = BB;
          const TB = ZB.measureText("Hg"),
            JB = Number(TB.actualBoundingBoxAscent ?? TB.fontBoundingBoxAscent),
            oB = Number(TB.actualBoundingBoxDescent ?? TB.fontBoundingBoxDescent),
            GB = {
              ascent: JB,
              height: JB + oB,
              descent: oB
            };
          return gB(GB) ? GB : null
        } catch {
          return null
        } finally {
          const BB = IB;
          "function" === typeof BB?.dispose && BB.dispose()
        }
      }(BB);
      return ZB || function(BB) {
        const IB = Math.max(1, function(BB) {
            const IB = /(?:^|\s)([0-9]+(?:\.[0-9]+)?)px(?:\/|\s|$)/.exec(String(BB || ""));
            return IB ? Number(IB[1]) : 16
          }(BB)),
          ZB = .8 * IB,
          TB = .2 * IB;
        return {
          ascent: ZB,
          height: ZB + TB,
          descent: TB
        }
      }(BB)
    }

    function gB(BB) {
      return Number.isFinite(BB.ascent) && Number.isFinite(BB.height) && Number.isFinite(BB.descent) && BB.height > 0
    }

    function qB(BB) {
      if (BB.requestPointerLock) {
        const IB = BB.requestPointerLock();
        IB instanceof Promise ? IB.then((() => {
          BB.focus()
        })).catch((() => {})) : BB.focus()
      }
    }
    var yB = ZB(40010),
      UB = ZB(39943),
      WB = ZB(40015),
      dB = ZB(40021);
    class CB extends oB.ThinEngine {
      static get NpmPackage() {
        return zB.c.NpmPackage
      }
      static get Version() {
        return zB.c.Version
      }
      static get Instances() {
        return JB.e.Instances
      }
      static get LastCreatedEngine() {
        return JB.e.LastCreatedEngine
      }
      static get LastCreatedScene() {
        return JB.e.LastCreatedScene
      }
      static DefaultLoadingScreenFactory(BB) {
        return zB.c.DefaultLoadingScreenFactory(BB)
      }
      get _supportsHardwareTextureRescaling() {
        return !!CB._RescalePostProcessFactory
      }
      _measureFps() {
        this._performanceMonitor.sampleFrame(), this._fps = this._performanceMonitor.averageFPS, this._deltaTime = this._performanceMonitor.instantaneousFrameTime || 0
      }
      get performanceMonitor() {
        return this._performanceMonitor
      }
      constructor(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        (0, WB.d)(), (0, dB.b)(), super(BB, IB, ZB, TB), this._performanceMonitor = new vB, this._drawCalls = new yB.c, BB && (this._features.supportRenderPasses = !0)
      }
      _initGLContext() {
        super._initGLContext(), this._rescalePostProcess = null
      }
      _sharedInit(BB) {
        super._sharedInit(BB),
          function(BB, IB, ZB) {
            BB._onCanvasFocus = () => {
              BB.onCanvasFocusObservable.notifyObservers(BB)
            }, BB._onCanvasBlur = () => {
              BB.onCanvasBlurObservable.notifyObservers(BB)
            }, BB._onCanvasContextMenu = IB => {
              BB.disableContextMenu && IB.preventDefault()
            }, IB.addEventListener("focus", BB._onCanvasFocus), IB.addEventListener("blur", BB._onCanvasBlur), IB.addEventListener("contextmenu", BB._onCanvasContextMenu), BB._onBlur = () => {
              BB.disablePerformanceMonitorInBackground && BB.performanceMonitor.disable(), BB._windowIsBackground = !0
            }, BB._onFocus = () => {
              BB.disablePerformanceMonitorInBackground && BB.performanceMonitor.enable(), BB._windowIsBackground = !1
            }, BB._onCanvasPointerOut = ZB => {
              document.elementFromPoint(ZB.clientX, ZB.clientY) !== IB && BB.onCanvasPointerOutObservable.notifyObservers(ZB)
            };
            const TB = BB.getHostWindow();
            TB && "function" === typeof TB.addEventListener && (TB.addEventListener("blur", BB._onBlur), TB.addEventListener("focus", BB._onFocus)), IB.addEventListener("pointerout", BB._onCanvasPointerOut), ZB.doNotHandleTouchAction || function(BB) {
              BB && BB.setAttribute && (BB.setAttribute("touch-action", "none"), BB.style.touchAction = "none", BB.style.webkitTapHighlightColor = "transparent")
            }(IB), !zB.c.audioEngine && ZB.audioEngine && zB.c.AudioEngineFactory && (zB.c.audioEngine = zB.c.AudioEngineFactory(BB.getRenderingCanvas(), BB.getAudioContext(), BB.getAudioDestination())), (0, FB.g)() && (BB._onFullscreenChange = () => {
              BB.isFullscreen = !!document.fullscreenElement, BB.isFullscreen && BB._pointerLockRequested && IB && qB(IB)
            }, document.addEventListener("fullscreenchange", BB._onFullscreenChange, !1), document.addEventListener("webkitfullscreenchange", BB._onFullscreenChange, !1), BB._onPointerLockChange = () => {
              BB.isPointerLock = document.pointerLockElement === IB
            }, document.addEventListener("pointerlockchange", BB._onPointerLockChange, !1), document.addEventListener("webkitpointerlockchange", BB._onPointerLockChange, !1)), BB.enableOfflineSupport = void 0 !== zB.c.OfflineProviderFactory, BB._deterministicLockstep = !!ZB.deterministicLockstep, BB._lockstepMaxSteps = ZB.lockstepMaxSteps || 0, BB._timeStep = ZB.timeStep || 1 / 60
          }(this, BB, this._creationOptions)
      }
      resizeImageBitmap(BB, IB, ZB) {
        return function(BB, IB, ZB, TB) {
          const JB = BB.createCanvas(ZB, TB).getContext("2d");
          if (!JB) throw new Error("Unable to get 2d context for resizeImageBitmap");
          return JB.drawImage(IB, 0, 0), JB.getImageData(0, 0, ZB, TB).data
        }(this, BB, IB, ZB)
      }
      async _createImageBitmapFromSource(BB, IB) {
        return await async function(BB, IB, ZB) {
          return await new Promise(((TB, JB) => {
            const oB = new Image;
            oB.onload = () => {
              oB.decode().then((() => {
                BB.createImageBitmap(oB, ZB).then((BB => {
                  TB(BB)
                }))
              }))
            }, oB.onerror = () => {
              JB(`Error loading image ${oB.src}`)
            }, oB.src = IB
          }))
        }(this, BB, IB)
      }
      switchFullscreen(BB) {
        this.isFullscreen ? this.exitFullscreen() : this.enterFullscreen(BB)
      }
      enterFullscreen(BB) {
        this.isFullscreen || (this._pointerLockRequested = BB, this._renderingCanvas && function(BB) {
          const IB = BB.requestFullscreen || BB.webkitRequestFullscreen;
          IB && IB.call(BB)
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
      setDirectViewport(BB, IB, ZB, TB) {
        const JB = this._cachedViewport;
        return this._cachedViewport = null, this._viewport(BB, IB, ZB, TB), JB
      }
      scissorClear(BB, IB, ZB, TB, JB) {
        this.enableScissor(BB, IB, ZB, TB), this.clear(JB, !0, !0, !0), this.disableScissor()
      }
      getVertexShaderSource(BB) {
        const IB = this._gl.getAttachedShaders(BB);
        return IB ? this._gl.getShaderSource(IB[0]) : null
      }
      getFragmentShaderSource(BB) {
        const IB = this._gl.getAttachedShaders(BB);
        return IB ? this._gl.getShaderSource(IB[1]) : null
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
        return NB(BB)
      }
      enterPointerlock() {
        this._renderingCanvas && qB(this._renderingCanvas)
      }
      exitPointerlock() {
        document.exitPointerLock && document.exitPointerLock()
      }
      dW() {
        this._measureFps(), super.dW()
      }
      _deletePipelineContext(BB) {
        const IB = BB;
        IB && IB.program && IB.transformFeedback && (this.deleteTransformFeedback(IB.transformFeedback), IB.transformFeedback = null), super._deletePipelineContext(BB)
      }
      createShaderProgram(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        JB = JB || this._gl, this.onBeforeShaderCompilationObservable.notifyObservers(this);
        const GB = super.createShaderProgram(BB, IB, ZB, TB, JB, oB);
        return this.onAfterShaderCompilationObservable.notifyObservers(this), GB
      }
      _createShaderProgram(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
        const oB = TB.createProgram();
        if (BB.program = oB, !oB) throw new Error("Unable to create program");
        if (TB.attachShader(oB, IB), TB.attachShader(oB, ZB), this.cg > 1 && JB) {
          const IB = this.createTransformFeedback();
          this.bindTransformFeedback(IB), this.setTranformFeedbackVaryings(oB, JB), BB.transformFeedback = IB
        }
        return TB.linkProgram(oB), this.cg > 1 && JB && this.bindTransformFeedback(null), BB.context = TB, BB.vertexShader = IB, BB.fragmentShader = ZB, BB.isParallelCompiled || this._finalizePipelineContext(BB), oB
      }
      _releaseTexture(BB) {
        super._releaseTexture(BB)
      }
      _releaseRenderTargetWrapper(BB) {
        super._releaseRenderTargetWrapper(BB);
        for (const IB of this.scenes) {
          for (const ZB of IB.postProcesses) ZB._outputTexture === BB && (ZB._outputTexture = null);
          for (const ZB of IB.cameras)
            for (const IB of ZB._postProcesses) IB && IB._outputTexture === BB && (IB._outputTexture = null)
        }
      }
      _rescaleTexture(BB, IB, ZB, TB, JB) {
        this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MAG_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_MIN_FILTER, this._gl.LINEAR), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_S, this._gl.CLAMP_TO_EDGE), this._gl.texParameteri(this._gl.TEXTURE_2D, this._gl.TEXTURE_WRAP_T, this._gl.CLAMP_TO_EDGE);
        const oB = this.createRenderTargetTexture({
          width: IB.width,
          height: IB.height
        }, {
          generateMipMaps: !1,
          type: 0,
          samplingMode: 2,
          generateDepthBuffer: !1,
          generateStencilBuffer: !1
        });
        if (!this._rescalePostProcess && CB._RescalePostProcessFactory && (this._rescalePostProcess = CB._RescalePostProcessFactory(this)), this._rescalePostProcess) {
          this._rescalePostProcess.externalTextureSamplerBinding = !0;
          const GB = () => {
              this._rescalePostProcess.onApply = function(IB) {
                IB._bindTexture("textureSampler", BB)
              };
              let GB = ZB;
              GB || (GB = this.scenes[this.scenes.length - 1]), GB.postProcessManager.directRender([this._rescalePostProcess], oB, !0), this._bindTextureDirectly(this._gl.TEXTURE_2D, IB, !0), this._gl.copyTexImage2D(this._gl.TEXTURE_2D, 0, TB, 0, 0, IB.width, IB.height, 0), this.unBindFramebuffer(oB), oB.dispose(), JB && JB()
            },
            vB = this._rescalePostProcess.getEffect();
          vB ? vB.executeWhenCompiled(GB) : this._rescalePostProcess.onEffectCreatedObservable.addOnce((BB => {
            BB.executeWhenCompiled(GB)
          }))
        }
      }
      wrapWebGLTexture(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
          JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
        const GB = new hB.c(BB, this._gl),
          vB = new TB.b(this, 15, !0);
        return vB._hardwareTexture = GB, vB.baseWidth = JB, vB.baseHeight = oB, vB.width = JB, vB.height = oB, vB.isReady = !0, vB.useMipMaps = IB, this.updateTextureSamplingMode(ZB, vB), vB
      }
      updateWrappedWebGLTexture(BB, IB) {
        if (15 !== BB.source) throw new Error("updateWrappedWebGLTexture: target InternalTexture was not produced by wrapWebGLTexture.");
        for (const TB of this._renderTargetWrapperCache)
          if (TB.textures?.includes(BB)) {
            if (TB.isMulti) throw new Error("updateWrappedWebGLTexture: wrapped texture is part of a multi render-target; not supported. Dispose and re-wrap.");
            if (TB._depthStencilTexture) throw new Error("updateWrappedWebGLTexture: wrapped texture's render-target wrapper has a depth/stencil texture; not supported. Dispose and re-wrap.")
          } BB._hardwareTexture = new hB.c(IB, this._gl), BB.isReady = !0, BB._cachedCoordinatesMode = null, BB._cachedWrapU = null, BB._cachedWrapV = null, BB._cachedWrapR = null, BB._cachedAnisotropicFilteringLevel = null;
        for (const TB in this._boundTexturesCache) this._boundTexturesCache[TB] === BB && (this._boundTexturesCache[TB] = null);
        this.updateTextureSamplingMode(BB.samplingMode, BB);
        const ZB = this._gl;
        for (const TB of this._renderTargetWrapperCache) {
          if (TB.texture !== BB) continue;
          const JB = TB,
            oB = TB.samples,
            GB = oB > 1;
          JB._framebuffer && ZB.deleteFramebuffer(JB._framebuffer), !GB && JB._depthStencilBuffer && (ZB.deleteRenderbuffer(JB._depthStencilBuffer), JB._depthStencilBuffer = null);
          const vB = this._currentFramebuffer,
            kB = ZB.createFramebuffer();
          this._bindUnboundFramebuffer(kB), ZB.framebufferTexture2D(ZB.FRAMEBUFFER, ZB.COLOR_ATTACHMENT0, ZB.TEXTURE_2D, IB, 0), GB || (JB._depthStencilBuffer = this._setupFramebufferDepthAttachments(TB._generateStencilBuffer, TB._generateDepthBuffer, TB.width, TB.height)), this._bindUnboundFramebuffer(vB), JB._framebuffer = kB, GB && (TB._samples = 1, this.updateRenderTargetTextureSampleCount(JB, oB))
        }
      }
      _uploadImageToTexture(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        const JB = this._gl,
          oB = this._getWebGLTextureType(BB.type),
          GB = this._getInternalFormat(BB.format),
          vB = this._getRGBABufferInternalSizedFormat(BB.type, GB),
          kB = BB.isCube ? JB.TEXTURE_CUBE_MAP : JB.TEXTURE_2D;
        this._bindTextureDirectly(kB, BB, !0), this._unpackFlipY(BB.invertY);
        let cB = JB.TEXTURE_2D;
        BB.isCube && (cB = JB.TEXTURE_CUBE_MAP_POSITIVE_X + ZB), JB.texImage2D(cB, TB, vB, GB, oB, IB), this._bindTextureDirectly(kB, null, !0)
      }
      updateTextureComparisonFunction(BB, IB) {
        if (1 === this.cg) return void nB.d.Error("WebGL 1 does not support texture comparison.");
        const ZB = this._gl;
        BB.isCube ? (this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, BB, !0), 0 === IB ? (ZB.texParameteri(ZB.TEXTURE_CUBE_MAP, ZB.TEXTURE_COMPARE_FUNC, 515), ZB.texParameteri(ZB.TEXTURE_CUBE_MAP, ZB.TEXTURE_COMPARE_MODE, ZB.NONE)) : (ZB.texParameteri(ZB.TEXTURE_CUBE_MAP, ZB.TEXTURE_COMPARE_FUNC, IB), ZB.texParameteri(ZB.TEXTURE_CUBE_MAP, ZB.TEXTURE_COMPARE_MODE, ZB.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_CUBE_MAP, null)) : (this._bindTextureDirectly(this._gl.TEXTURE_2D, BB, !0), 0 === IB ? (ZB.texParameteri(ZB.TEXTURE_2D, ZB.TEXTURE_COMPARE_FUNC, 515), ZB.texParameteri(ZB.TEXTURE_2D, ZB.TEXTURE_COMPARE_MODE, ZB.NONE)) : (ZB.texParameteri(ZB.TEXTURE_2D, ZB.TEXTURE_COMPARE_FUNC, IB), ZB.texParameteri(ZB.TEXTURE_2D, ZB.TEXTURE_COMPARE_MODE, ZB.COMPARE_REF_TO_TEXTURE)), this._bindTextureDirectly(this._gl.TEXTURE_2D, null)), BB._comparisonFunction = IB
      }
      createInstancesBuffer(BB) {
        const IB = this._gl.createBuffer();
        if (!IB) throw new Error("Unable to create instance buffer");
        const ZB = new cB.d(IB);
        return ZB.ah = BB, this.bindArrayBuffer(ZB), this._gl.bufferData(this._gl.ARRAY_BUFFER, BB, this._gl.DYNAMIC_DRAW), ZB.references = 1, ZB
      }
      deleteInstancesBuffer(BB) {
        this._gl.deleteBuffer(BB)
      }
      async _clientWaitAsync(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
        const TB = this._gl;
        return await new Promise(((JB, oB) => {
          (0, UB.f)((() => {
            const ZB = TB.clientWaitSync(BB, IB, 0);
            if (ZB == TB.WAIT_FAILED) throw new Error("clientWaitSync failed");
            return ZB != TB.TIMEOUT_EXPIRED
          }), JB, oB, ZB)
        }))
      }
      _readPixelsAsync(BB, IB, ZB, TB, JB, oB, GB) {
        if (this._webGLVersion < 2) throw new Error("_readPixelsAsync only work on WebGL2+");
        const vB = this._gl,
          kB = vB.createBuffer();
        vB.bindBuffer(vB.PIXEL_PACK_BUFFER, kB), vB.bufferData(vB.PIXEL_PACK_BUFFER, GB.byteLength, vB.STREAM_READ), vB.readPixels(BB, IB, ZB, TB, JB, oB, 0), vB.bindBuffer(vB.PIXEL_PACK_BUFFER, null);
        const cB = vB.fenceSync(vB.SYNC_GPU_COMMANDS_COMPLETE, 0);
        return cB ? (vB.flush(), this._clientWaitAsync(cB, 0, 10).then((() => (vB.deleteSync(cB), vB.bindBuffer(vB.PIXEL_PACK_BUFFER, kB), vB.getBufferSubData(vB.PIXEL_PACK_BUFFER, 0, GB), vB.bindBuffer(vB.PIXEL_PACK_BUFFER, null), vB.deleteBuffer(kB), GB)))) : null
      }
      dispose() {
        this.hideLoadingUI?.(), this._rescalePostProcess && this._rescalePostProcess.dispose(),
          function(BB, IB) {
            1 === JB.e.Instances.length && zB.c.audioEngine && (zB.c.audioEngine.dispose(), zB.c.audioEngine = null);
            const ZB = BB.getHostWindow();
            ZB && "function" === typeof ZB.removeEventListener && (ZB.removeEventListener("blur", BB._onBlur), ZB.removeEventListener("focus", BB._onFocus)), IB && (IB.removeEventListener("focus", BB._onCanvasFocus), IB.removeEventListener("blur", BB._onCanvasBlur), IB.removeEventListener("pointerout", BB._onCanvasPointerOut), IB.removeEventListener("contextmenu", BB._onCanvasContextMenu)), (0, FB.g)() && (document.removeEventListener("fullscreenchange", BB._onFullscreenChange), document.removeEventListener("mozfullscreenchange", BB._onFullscreenChange), document.removeEventListener("webkitfullscreenchange", BB._onFullscreenChange), document.removeEventListener("msfullscreenchange", BB._onFullscreenChange), document.removeEventListener("pointerlockchange", BB._onPointerLockChange), document.removeEventListener("mspointerlockchange", BB._onPointerLockChange), document.removeEventListener("mozpointerlockchange", BB._onPointerLockChange), document.removeEventListener("webkitpointerlockchange", BB._onPointerLockChange))
          }(this, this._renderingCanvas), super.dispose()
      }
    }
    CB.ALPHA_DISABLE = 0, CB.ALPHA_ADD = 1, CB.ALPHA_COMBINE = 2, CB.ALPHA_SUBTRACT = 3, CB.ALPHA_MULTIPLY = 4, CB.ALPHA_MAXIMIZED = 5, CB.ALPHA_ONEONE = 6, CB.ALPHA_PREMULTIPLIED = 7, CB.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, CB.ALPHA_INTERPOLATE = 9, CB.ALPHA_SCREENMODE = 10, CB.DELAYLOADSTATE_NONE = 0, CB.DELAYLOADSTATE_LOADED = 1, CB.DELAYLOADSTATE_LOADING = 2, CB.DELAYLOADSTATE_NOTLOADED = 4, CB.NEVER = 512, CB.ALWAYS = 519, CB.LESS = 513, CB.EQUAL = 514, CB.LEQUAL = 515, CB.GREATER = 516, CB.GEQUAL = 518, CB.NOTEQUAL = 517, CB.KEEP = 7680, CB.REPLACE = 7681, CB.INCR = 7682, CB.DECR = 7683, CB.INVERT = 5386, CB.INCR_WRAP = 34055, CB.DECR_WRAP = 34056, CB.TEXTURE_CLAMP_ADDRESSMODE = 0, CB.TEXTURE_WRAP_ADDRESSMODE = 1, CB.TEXTURE_MIRROR_ADDRESSMODE = 2, CB.TEXTUREFORMAT_ALPHA = 0, CB.TEXTUREFORMAT_LUMINANCE = 1, CB.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, CB.TEXTUREFORMAT_RGB = 4, CB.TEXTUREFORMAT_RGBA = 5, CB.TEXTUREFORMAT_RED = 6, CB.TEXTUREFORMAT_R = 6, CB.TEXTUREFORMAT_R16_UNORM = 33322, CB.TEXTUREFORMAT_RG16_UNORM = 33324, CB.TEXTUREFORMAT_RGB16_UNORM = 32852, CB.TEXTUREFORMAT_RGBA16_UNORM = 32859, CB.TEXTUREFORMAT_R16_SNORM = 36760, CB.TEXTUREFORMAT_RG16_SNORM = 36761, CB.TEXTUREFORMAT_RGB16_SNORM = 36762, CB.TEXTUREFORMAT_RGBA16_SNORM = 36763, CB.TEXTUREFORMAT_RG = 7, CB.TEXTUREFORMAT_RED_INTEGER = 8, CB.TEXTUREFORMAT_R_INTEGER = 8, CB.TEXTUREFORMAT_RG_INTEGER = 9, CB.TEXTUREFORMAT_RGB_INTEGER = 10, CB.TEXTUREFORMAT_RGBA_INTEGER = 11, CB.TEXTURETYPE_UNSIGNED_BYTE = 0, CB.TEXTURETYPE_UNSIGNED_INT = 0, CB.TEXTURETYPE_FLOAT = 1, CB.TEXTURETYPE_HALF_FLOAT = 2, CB.TEXTURETYPE_BYTE = 3, CB.TEXTURETYPE_SHORT = 4, CB.TEXTURETYPE_UNSIGNED_SHORT = 5, CB.TEXTURETYPE_INT = 6, CB.TEXTURETYPE_UNSIGNED_INTEGER = 7, CB.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, CB.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, CB.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, CB.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, CB.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, CB.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, CB.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, CB.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, CB.TEXTURE_NEAREST_SAMPLINGMODE = 1, CB.TEXTURE_BILINEAR_SAMPLINGMODE = 2, CB.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, CB.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, CB.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, CB.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, CB.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, CB.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, CB.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, CB.TEXTURE_NEAREST_LINEAR = 7, CB.TEXTURE_NEAREST_NEAREST = 1, CB.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, CB.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, CB.TEXTURE_LINEAR_LINEAR = 2, CB.TEXTURE_LINEAR_NEAREST = 12, CB.TEXTURE_EXPLICIT_MODE = 0, CB.TEXTURE_SPHERICAL_MODE = 1, CB.TEXTURE_PLANAR_MODE = 2, CB.TEXTURE_CUBIC_MODE = 3, CB.TEXTURE_PROJECTION_MODE = 4, CB.TEXTURE_SKYBOX_MODE = 5, CB.TEXTURE_INVCUBIC_MODE = 6, CB.TEXTURE_EQUIRECTANGULAR_MODE = 7, CB.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, CB.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, CB.SCALEMODE_FLOOR = 1, CB.SCALEMODE_NEAREST = 2, CB.SCALEMODE_CEILING = 3
  },
  40042: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(40003);
    class JB {
      get depthStencilTexture() {
        return this._depthStencilTexture
      }
      setDepthStencilTexture(BB) {
        (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this._depthStencilTexture && this._depthStencilTexture.dispose(), this._depthStencilTexture = BB, this._generateDepthBuffer = this._generateStencilBuffer = this._depthStencilTextureWithStencil = !1, BB && (this._generateDepthBuffer = !0, this._generateStencilBuffer = this._depthStencilTextureWithStencil = (0, TB.c)(BB.format))
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
        const IB = this._textures[BB],
          ZB = this._layerIndices?.[BB] ?? 0,
          TB = this._faceIndices?.[BB] ?? 0;
        return IB.isCube ? 6 * ZB + TB : IB.is3D ? 0 : ZB
      }
      get samples() {
        return this._samples
      }
      setSamples(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this.samples === BB && !ZB) return BB;
        const TB = this._isMulti ? this._engine.updateMultipleRenderTargetTextureSampleCount(this, BB, IB) : this._engine.updateRenderTargetTextureSampleCount(this, BB);
        return this._samples = BB, TB
      }
      resolveMSAATextures() {
        this.isMulti ? this._engine.resolveMultiFramebuffer(this) : this._engine.resolveFramebuffer(this)
      }
      generateMipMaps() {
        this._engine._currentRenderTarget === this && (this.isMulti ? this._engine.unBindMultiColorAttachmentFramebuffer(this, !0) : this._engine.unBindFramebuffer(this, !0)), this.isMulti ? this._engine.generateMipMapsMultiFramebuffer(this) : this._engine.generateMipMapsFramebuffer(this)
      }
      constructor(BB, IB, ZB, TB, JB) {
        this._textures = null, this._faceIndices = null, this._layerIndices = null, this._samples = 1, this._attachments = null, this._generateStencilBuffer = !1, this._generateDepthBuffer = !1, this._depthStencilTextureWithStencil = !1, this.disableAutomaticMSAAResolve = !1, this.resolveMSAAColors = !0, this.resolveMSAADepth = !1, this.resolveMSAAStencil = !1, this.depthReadOnly = !1, this.stencilReadOnly = !1, this._isMulti = BB, this._isCube = IB, this._size = ZB, this._engine = TB, this._depthStencilTexture = null, this.label = JB
      }
      setTextures(BB) {
        Array.isArray(BB) ? this._textures = BB : this._textures = BB ? [BB] : null
      }
      setTexture(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        this._textures || (this._textures = []), this._textures[IB] !== BB && (this._textures[IB] && ZB && this._textures[IB].dispose(), this._textures[IB] = BB)
      }
      setLayerAndFaceIndices(BB, IB) {
        this._layerIndices = BB, this._faceIndices = IB
      }
      setLayerAndFaceIndex() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        this._layerIndices || (this._layerIndices = []), this._faceIndices || (this._faceIndices = []), void 0 !== IB && IB >= 0 && (this._layerIndices[BB] = IB), void 0 !== ZB && ZB >= 0 && (this._faceIndices[BB] = ZB)
      }
      createDepthStencilTexture() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
          JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 14,
          oB = arguments.length > 5 ? arguments[5] : void 0;
        return this._depthStencilTexture?.dispose(), this._depthStencilTextureWithStencil = ZB, this._depthStencilTextureLabel = oB, this._depthStencilTexture = this._engine.createDepthStencilTexture(this._size, {
          bilinearFiltering: IB,
          comparisonFunction: BB,
          generateStencil: ZB,
          isCube: this._isCube,
          samples: TB,
          depthTextureFormat: JB,
          label: oB
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
          const IB = this.textures;
          if (IB && IB.length > 0) {
            let ZB = !1,
              TB = IB.length,
              JB = -1;
            const oB = IB[IB.length - 1]._source;
            14 !== oB && 12 !== oB || (ZB = !0, JB = IB[IB.length - 1].format, TB--);
            const GB = [],
              vB = [],
              kB = [],
              cB = [],
              nB = [],
              hB = [],
              zB = [],
              FB = {};
            for (let BB = 0; BB < TB; ++BB) {
              const ZB = IB[BB];
              GB.push(ZB.samplingMode), vB.push(ZB.type), kB.push(ZB.format);
              void 0 !== FB[ZB.uniqueId] ? (cB.push(-1), zB.push(0)) : (FB[ZB.uniqueId] = BB, ZB.is2DArray ? (cB.push(35866), zB.push(ZB.depth)) : ZB.isCube ? (cB.push(34067), zB.push(0)) : ZB.is3D ? (cB.push(32879), zB.push(ZB.depth)) : (cB.push(3553), zB.push(0))), this._faceIndices && nB.push(this._faceIndices[BB] ?? 0), this._layerIndices && hB.push(this._layerIndices[BB] ?? 0)
            }
            const NB = {
                samplingModes: GB,
                generateMipMaps: IB[0].generateMipMaps,
                generateDepthBuffer: this._generateDepthBuffer,
                generateStencilBuffer: this._generateStencilBuffer,
                generateDepthTexture: ZB,
                depthTextureFormat: JB,
                types: vB,
                formats: kB,
                GvB: TB,
                targetTypes: cB,
                faceIndex: nB,
                layerIndex: hB,
                layerCounts: zB,
                label: this.label
              },
              gB = {
                width: this.width,
                height: this.height,
                depth: this.depth
              };
            BB = this._engine.createMultipleRenderTarget(gB, NB);
            for (let qB = 0; qB < TB; ++qB) {
              if (-1 !== cB[qB]) continue;
              const ZB = FB[IB[qB].uniqueId];
              BB.setTexture(BB.textures[ZB], qB)
            }
          }
        } else {
          const IB = {};
          if (IB.generateDepthBuffer = this._generateDepthBuffer, IB.generateMipMaps = this.texture?.generateMipMaps ?? !1, IB.generateStencilBuffer = this._generateStencilBuffer, IB.samplingMode = this.texture?.samplingMode, IB.type = this.texture?.type, IB.format = this.texture?.format, IB.noColorAttachment = !this._textures, IB.label = this.label, this.isCube) BB = this._engine.createRenderTargetCubeTexture(this.width, IB);
          else {
            const ZB = {
              width: this.width,
              height: this.height,
              layers: this.is2DArray || this.is3D ? this.texture?.depth : void 0
            };
            BB = this._engine.createRenderTargetTexture(ZB, IB)
          }
          BB.texture && (BB.texture.isReady = !0)
        }
        return BB
      }
      _swapRenderTargetWrapper(BB) {
        if (this._textures && BB._textures)
          for (let IB = 0; IB < this._textures.length; ++IB) this._textures[IB]._swapAndDie(BB._textures[IB], !1), BB._textures[IB].isReady = !0;
        this._depthStencilTexture && BB._depthStencilTexture && (this._depthStencilTexture._swapAndDie(BB._depthStencilTexture), BB._depthStencilTexture.isReady = !0), this._textures = null, this._depthStencilTexture = null
      }
      _rebuild() {
        const BB = this._cloneRenderTargetWrapper();
        if (BB) {
          if (this._depthStencilTexture) {
            const IB = this._depthStencilTexture.samplingMode,
              ZB = this._depthStencilTexture.format,
              TB = 2 === IB || 3 === IB || 11 === IB;
            BB.createDepthStencilTexture(this._depthStencilTexture._comparisonFunction, TB, this._depthStencilTextureWithStencil, this._depthStencilTexture.samples, ZB, this._depthStencilTextureLabel)
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
  40473: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    class TB {
      static get ForceFullSceneLoadingForIncremental() {
        return TB._ForceFullSceneLoadingForIncremental
      }
      static set ForceFullSceneLoadingForIncremental(BB) {
        TB._ForceFullSceneLoadingForIncremental = BB
      }
      static get ShowLoadingScreen() {
        return TB._ShowLoadingScreen
      }
      static set ShowLoadingScreen(BB) {
        TB._ShowLoadingScreen = BB
      }
      static get loggingLevel() {
        return TB._LoggingLevel
      }
      static set loggingLevel(BB) {
        TB._LoggingLevel = BB
      }
      static get CleanBoneMatrixWeights() {
        return TB._CleanBoneMatrixWeights
      }
      static set CleanBoneMatrixWeights(BB) {
        TB._CleanBoneMatrixWeights = BB
      }
    }
    TB._ForceFullSceneLoadingForIncremental = !1, TB._ShowLoadingScreen = !0, TB._CleanBoneMatrixWeights = !1, TB._LoggingLevel = 0
  },
  40141: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    var TB = ZB(38718);
    const JB = new Map;

    function oB(BB, IB) {
      (function(BB) {
        return JB.delete(BB)
      })(BB) && TB.d.Warn(`Extension with the name '${BB}' already exists`), JB.set(BB, IB)
    }

    function GB(BB, IB) {
      "image/ktx" !== IB && "image/ktx2" !== IB || (BB = ".ktx"), JB.has(BB) || (BB.endsWith(".ies") && oB(".ies", (async () => await ZB.e(314).then((() => ZB(41798))).then((BB => new BB._IESTextureLoader)))), BB.endsWith(".dds") && oB(".dds", (async () => await ZB.e(312).then((() => ZB(41804))).then((BB => new BB._DDSTextureLoader)))), BB.endsWith(".basis") && oB(".basis", (async () => await ZB.e(315).then((() => ZB(41807))).then((BB => new BB._BasisTextureLoader)))), BB.endsWith(".env") && oB(".env", (async () => await Promise.all([ZB.e(316), ZB.e(313)]).then((() => ZB(41812))).then((BB => new BB._ENVTextureLoader)))), BB.endsWith(".hdr") && oB(".hdr", (async () => await ZB.e(317).then((() => ZB(41872))).then((BB => new BB._HDRTextureLoader)))), (BB.endsWith(".ktx") || BB.endsWith(".ktx2")) && (oB(".ktx", (async () => await ZB.e(318).then((() => ZB(41874))).then((BB => new BB._KTXTextureLoader)))), oB(".ktx2", (async () => await ZB.e(318).then((() => ZB(41874))).then((BB => new BB._KTXTextureLoader))))), BB.endsWith(".tga") && oB(".tga", (async () => await ZB.e(319).then((() => ZB(41889))).then((BB => new BB._TGATextureLoader)))), BB.endsWith(".exr") && oB(".exr", (async () => await ZB.e(320).then((() => ZB(41891))).then((BB => new BB._ExrTextureLoader)))));
      const TB = JB.get(BB);
      return TB ? Promise.resolve(TB(IB)) : null
    }
  },
  40498: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB,
      d: () => cB
    });
    var TB = ZB(40339),
      JB = ZB(40092),
      oB = ZB(37170);
    class GB extends TB.e {
      get JBB() {
        return this._subMaterials
      }
      set JBB(BB) {
        this._subMaterials = BB, this._hookArray(BB)
      }
      getChildren() {
        return this.JBB
      }
      constructor(BB, IB) {
        super(BB, IB, !0), this._waitingSubMaterialsUniqueIds = [], this.JR().addMultiMaterial(this), this.JBB = [], this._storeEffectOnSubMeshes = !0
      }
      _hookArray(BB) {
        var IB = this;
        const ZB = BB.push;
        BB.push = function() {
          for (var TB = arguments.length, JB = new Array(TB), oB = 0; oB < TB; oB++) JB[oB] = arguments[oB];
          const GB = ZB.apply(BB, JB);
          return IB._markAllSubMeshesAsTexturesDirty(), GB
        };
        const TB = BB.splice;
        BB.splice = (IB, ZB) => {
          const JB = TB.call(BB, IB, ZB ?? BB.length);
          return this._markAllSubMeshesAsTexturesDirty(), JB
        }
      }
      getSubMaterial(BB) {
        return BB < 0 || BB >= this.JBB.length ? this.JR().defaultMaterial : this.JBB[BB]
      }
      getActiveTextures() {
        return super.getActiveTextures().concat(...this.JBB.map((BB => BB ? BB.getActiveTextures() : [])))
      }
      hasTexture(BB) {
        if (super.hasTexture(BB)) return !0;
        for (let IB = 0; IB < this.JBB.length; IB++)
          if (this.JBB[IB]?.hasTexture(BB)) return !0;
        return !1
      }
      getClassName() {
        return "MultiMaterial"
      }
      isReadyForSubMesh(BB, IB, ZB) {
        for (let TB = 0; TB < this.JBB.length; TB++) {
          const JB = this.JBB[TB];
          if (JB) {
            if (JB._storeEffectOnSubMeshes) {
              if (!JB.isReadyForSubMesh(BB, IB, ZB)) return !1;
              continue
            }
            if (!JB.isReady(BB)) return !1
          }
        }
        return !0
      }
      clone(BB, IB) {
        const ZB = new GB(BB, this.JR());
        for (let TB = 0; TB < this.JBB.length; TB++) {
          let JB;
          const oB = this.JBB[TB];
          JB = IB && oB ? oB.clone(BB + "-" + oB.name) : this.JBB[TB], ZB.JBB.push(JB)
        }
        return ZB
      }
      serialize() {
        const BB = {};
        BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, JB.b && (BB.tags = JB.b.GetTags(this)), BB.materialsUniqueIds = [], BB.materials = [];
        for (let IB = 0; IB < this.JBB.length; IB++) {
          const ZB = this.JBB[IB];
          ZB ? (BB.materialsUniqueIds.push(ZB.uniqueId), BB.materials.push(ZB.id)) : (BB.materialsUniqueIds.push(null), BB.materials.push(null))
        }
        return BB
      }
      dispose(BB, IB, ZB) {
        const TB = this.JR();
        if (!TB) return;
        if (ZB)
          for (let oB = 0; oB < this.JBB.length; oB++) {
            const ZB = this.JBB[oB];
            ZB && ZB.dispose(BB, IB)
          }
        const JB = TB.multiMaterials.indexOf(this);
        JB >= 0 && TB.multiMaterials.splice(JB, 1), super.dispose(BB, IB)
      }
    }
    let vB = !1;

    function kB(BB, IB) {
      const ZB = new GB(BB.name, IB);
      if (ZB.id = BB.id, ZB._loadedUniqueId = BB.uniqueId, JB.b && JB.b.AddTagsTo(ZB, BB.tags), BB.materialsUniqueIds) ZB._waitingSubMaterialsUniqueIds = BB.materialsUniqueIds;
      else
        for (const TB of BB.materials) ZB.JBB.push(IB.getLastMaterialById(TB));
      return ZB
    }

    function cB() {
      vB || (vB = !0, GB.ParseMultiMaterial = kB, (0, oB.i)("BABYLON.MultiMaterial", GB))
    }
  },
  40277: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => GB
    });
    var TB, JB, oB = ZB(37120);
    ! function(BB) {
      BB[BB.LOCAL = 0] = "LOCAL", BB[BB.WORLD = 1] = "WORLD", BB[BB.BONE = 2] = "BONE"
    }(TB || (TB = {}));
    class GB {}
    GB.X = new oB.s(1, 0, 0), GB.Y = new oB.s(0, 1, 0), GB.Z = new oB.s(0, 0, 1),
      function(BB) {
        BB[BB.X = 0] = "X", BB[BB.Y = 1] = "Y", BB[BB.Z = 2] = "Z"
      }(JB || (JB = {}))
  },
  40044: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => kB,
      f: () => cB
    });
    var TB = ZB(37120);
    const JB = [Math.sqrt(1 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(3 / (4 * Math.PI)), -Math.sqrt(3 / (4 * Math.PI)), Math.sqrt(15 / (4 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(5 / (16 * Math.PI)), -Math.sqrt(15 / (4 * Math.PI)), Math.sqrt(15 / (16 * Math.PI))],
      oB = [() => 1, BB => BB.y, BB => BB.z, BB => BB.x, BB => BB.x * BB.y, BB => BB.y * BB.z, BB => 3 * BB.z * BB.z - 1, BB => BB.x * BB.z, BB => BB.x * BB.x - BB.y * BB.y],
      GB = (BB, IB) => JB[BB] * oB[BB](IB),
      vB = [Math.PI, 2 * Math.PI / 3, 2 * Math.PI / 3, 2 * Math.PI / 3, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4, Math.PI / 4];
    class kB {
      constructor() {
        this.preScaled = !1, this.l00 = TB.s.Zero(), this.l1_1 = TB.s.Zero(), this.l10 = TB.s.Zero(), this.l11 = TB.s.Zero(), this.l2_2 = TB.s.Zero(), this.l2_1 = TB.s.Zero(), this.l20 = TB.s.Zero(), this.l21 = TB.s.Zero(), this.l22 = TB.s.Zero()
      }
      addLight(BB, IB, ZB) {
        TB.m.rN[0].set(IB.r, IB.g, IB.b);
        const JB = TB.m.rN[0],
          oB = TB.m.rN[1];
        JB.scaleToRef(ZB, oB), oB.scaleToRef(GB(0, BB), TB.m.rN[2]), this.l00.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(1, BB), TB.m.rN[2]), this.l1_1.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(2, BB), TB.m.rN[2]), this.l10.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(3, BB), TB.m.rN[2]), this.l11.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(4, BB), TB.m.rN[2]), this.l2_2.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(5, BB), TB.m.rN[2]), this.l2_1.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(6, BB), TB.m.rN[2]), this.l20.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(7, BB), TB.m.rN[2]), this.l21.addInPlace(TB.m.rN[2]), oB.scaleToRef(GB(8, BB), TB.m.rN[2]), this.l22.addInPlace(TB.m.rN[2])
      }
      scaleInPlace(BB) {
        this.l00.scaleInPlace(BB), this.l1_1.scaleInPlace(BB), this.l10.scaleInPlace(BB), this.l11.scaleInPlace(BB), this.l2_2.scaleInPlace(BB), this.l2_1.scaleInPlace(BB), this.l20.scaleInPlace(BB), this.l21.scaleInPlace(BB), this.l22.scaleInPlace(BB)
      }
      convertIncidentRadianceToIrradiance() {
        this.l00.scaleInPlace(vB[0]), this.l1_1.scaleInPlace(vB[1]), this.l10.scaleInPlace(vB[2]), this.l11.scaleInPlace(vB[3]), this.l2_2.scaleInPlace(vB[4]), this.l2_1.scaleInPlace(vB[5]), this.l20.scaleInPlace(vB[6]), this.l21.scaleInPlace(vB[7]), this.l22.scaleInPlace(vB[8])
      }
      convertIrradianceToLambertianRadiance() {
        this.scaleInPlace(1 / Math.PI)
      }
      preScaleForRendering() {
        this.preScaled = !0, this.l00.scaleInPlace(JB[0]), this.l1_1.scaleInPlace(JB[1]), this.l10.scaleInPlace(JB[2]), this.l11.scaleInPlace(JB[3]), this.l2_2.scaleInPlace(JB[4]), this.l2_1.scaleInPlace(JB[5]), this.l20.scaleInPlace(JB[6]), this.l21.scaleInPlace(JB[7]), this.l22.scaleInPlace(JB[8])
      }
      updateFromArray(BB) {
        return TB.s.FromArrayToRef(BB[0], 0, this.l00), TB.s.FromArrayToRef(BB[1], 0, this.l1_1), TB.s.FromArrayToRef(BB[2], 0, this.l10), TB.s.FromArrayToRef(BB[3], 0, this.l11), TB.s.FromArrayToRef(BB[4], 0, this.l2_2), TB.s.FromArrayToRef(BB[5], 0, this.l2_1), TB.s.FromArrayToRef(BB[6], 0, this.l20), TB.s.FromArrayToRef(BB[7], 0, this.l21), TB.s.FromArrayToRef(BB[8], 0, this.l22), this
      }
      updateFromFloatsArray(BB) {
        return TB.s.FromFloatsToRef(BB[0], BB[1], BB[2], this.l00), TB.s.FromFloatsToRef(BB[3], BB[4], BB[5], this.l1_1), TB.s.FromFloatsToRef(BB[6], BB[7], BB[8], this.l10), TB.s.FromFloatsToRef(BB[9], BB[10], BB[11], this.l11), TB.s.FromFloatsToRef(BB[12], BB[13], BB[14], this.l2_2), TB.s.FromFloatsToRef(BB[15], BB[16], BB[17], this.l2_1), TB.s.FromFloatsToRef(BB[18], BB[19], BB[20], this.l20), TB.s.FromFloatsToRef(BB[21], BB[22], BB[23], this.l21), TB.s.FromFloatsToRef(BB[24], BB[25], BB[26], this.l22), this
      }
      static FromArray(BB) {
        return (new kB).updateFromArray(BB)
      }
      static FromPolynomial(BB) {
        const IB = new kB;
        return IB.l00 = BB.xx.scale(.376127).add(BB.yy.scale(.376127)).add(BB.zz.scale(.376126)), IB.l1_1 = BB.y.scale(.977204), IB.l10 = BB.z.scale(.977204), IB.l11 = BB.x.scale(.977204), IB.l2_2 = BB.xy.scale(1.16538), IB.l2_1 = BB.yz.scale(1.16538), IB.l20 = BB.zz.scale(1.34567).subtract(BB.xx.scale(.672834)).subtract(BB.yy.scale(.672834)), IB.l21 = BB.zx.scale(1.16538), IB.l22 = BB.xx.scale(1.16538).subtract(BB.yy.scale(1.16538)), IB.l1_1.scaleInPlace(-1), IB.l11.scaleInPlace(-1), IB.l2_1.scaleInPlace(-1), IB.l21.scaleInPlace(-1), IB.scaleInPlace(Math.PI), IB
      }
    }
    class cB {
      constructor() {
        this.x = TB.s.Zero(), this.y = TB.s.Zero(), this.z = TB.s.Zero(), this.xx = TB.s.Zero(), this.yy = TB.s.Zero(), this.zz = TB.s.Zero(), this.xy = TB.s.Zero(), this.yz = TB.s.Zero(), this.zx = TB.s.Zero()
      }
      get preScaledHarmonics() {
        return this._harmonics || (this._harmonics = kB.FromPolynomial(this)), this._harmonics.preScaled || this._harmonics.preScaleForRendering(), this._harmonics
      }
      addAmbient(BB) {
        TB.m.rN[0].cBB(BB.r, BB.g, BB.b);
        const IB = TB.m.rN[0];
        this.xx.addInPlace(IB), this.yy.addInPlace(IB), this.zz.addInPlace(IB)
      }
      scaleInPlace(BB) {
        this.x.scaleInPlace(BB), this.y.scaleInPlace(BB), this.z.scaleInPlace(BB), this.xx.scaleInPlace(BB), this.yy.scaleInPlace(BB), this.zz.scaleInPlace(BB), this.yz.scaleInPlace(BB), this.zx.scaleInPlace(BB), this.xy.scaleInPlace(BB)
      }
      updateFromHarmonics(BB) {
        return this._harmonics = BB, this.x.TY(BB.l11), this.x.scaleInPlace(1.02333).scaleInPlace(-1), this.y.TY(BB.l1_1), this.y.scaleInPlace(1.02333).scaleInPlace(-1), this.z.TY(BB.l10), this.z.scaleInPlace(1.02333), this.xx.TY(BB.l00), TB.m.rN[0].TY(BB.l20).scaleInPlace(.247708), TB.m.rN[1].TY(BB.l22).scaleInPlace(.429043), this.xx.scaleInPlace(.886277).VTB(TB.m.rN[0]).addInPlace(TB.m.rN[1]), this.yy.TY(BB.l00), this.yy.scaleInPlace(.886277).VTB(TB.m.rN[0]).VTB(TB.m.rN[1]), this.zz.TY(BB.l00), TB.m.rN[0].TY(BB.l20).scaleInPlace(.495417), this.zz.scaleInPlace(.886277).addInPlace(TB.m.rN[0]), this.yz.TY(BB.l2_1), this.yz.scaleInPlace(.858086).scaleInPlace(-1), this.zx.TY(BB.l21), this.zx.scaleInPlace(.858086).scaleInPlace(-1), this.xy.TY(BB.l2_2), this.xy.scaleInPlace(.858086), this.scaleInPlace(1 / Math.PI), this
      }
      static FromHarmonics(BB) {
        return (new cB).updateFromHarmonics(BB)
      }
      static FromArray(BB) {
        const IB = new cB;
        return TB.s.FromArrayToRef(BB[0], 0, IB.x), TB.s.FromArrayToRef(BB[1], 0, IB.y), TB.s.FromArrayToRef(BB[2], 0, IB.z), TB.s.FromArrayToRef(BB[3], 0, IB.xx), TB.s.FromArrayToRef(BB[4], 0, IB.yy), TB.s.FromArrayToRef(BB[5], 0, IB.zz), TB.s.FromArrayToRef(BB[6], 0, IB.yz), TB.s.FromArrayToRef(BB[7], 0, IB.zx), TB.s.FromArrayToRef(BB[8], 0, IB.xy), IB
      }
    }
  },
  40488: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => MB,
      d: () => PB
    });
    var TB = ZB(40061),
      JB = ZB(37153),
      oB = ZB(37120),
      GB = ZB(40188),
      vB = ZB(40463),
      kB = ZB(40492),
      cB = ZB(40185),
      nB = ZB(40351),
      hB = ZB(40177);
    class zB {
      constructor() {
        this._checkCollisions = !1, this._collisionMask = -1, this._collisionGroup = -1, this._surroundingMeshes = null, this._collider = null, this._oldPositionForCollisions = new oB.s(0, 0, 0), this._diffPositionForCollisions = new oB.s(0, 0, 0), this._collisionResponse = !0
      }
    }
    var FB, NB, gB, qB = ZB(39931),
      yB = ZB(40134),
      UB = ZB(40361),
      WB = ZB(37311),
      dB = ZB(37129),
      CB = ZB(40277),
      QB = ZB(38718),
      sB = ZB(40065),
      wB = ZB(39951),
      OB = ZB(37170);

    function YB(BB, IB) {
      return BB - Math.floor(BB / IB) * IB
    }

    function iB(BB, IB, ZB) {
      BB instanceof Float32Array ? oB.b.FromArrayToRef(BB, IB, ZB) : ZB.cBB((0, yB.c)(BB[IB]), (0, yB.c)(BB[IB + 1]), (0, yB.c)(BB[IB + 2]), (0, yB.c)(BB[IB + 3]), (0, yB.c)(BB[IB + 4]), (0, yB.c)(BB[IB + 5]), (0, yB.c)(BB[IB + 6]), (0, yB.c)(BB[IB + 7]), (0, yB.c)(BB[IB + 8]), (0, yB.c)(BB[IB + 9]), (0, yB.c)(BB[IB + 10]), (0, yB.c)(BB[IB + 11]), (0, yB.c)(BB[IB + 12]), (0, yB.c)(BB[IB + 13]), (0, yB.c)(BB[IB + 14]), (0, yB.c)(BB[IB + 15]))
    }

    function pB(BB, IB, ZB, TB, JB, vB, kB, cB, nB) {
      const hB = ZB.texture,
        zB = hB?.getInternalTexture(),
        FB = zB?._bufferView;
      if (!(FB instanceof Float32Array) && !(FB instanceof Uint16Array)) return QB.d.Warn("Baked vertex animation bounding info requires CPU-readable Float32Array or Uint16Array texture data.", 1), !1;
      const NB = hB.getSize(),
        gB = function(BB, IB) {
          const ZB = BB.y - BB.x + 1,
            TB = IB * BB.w / ZB,
            JB = TB < 1 ? 0 : 1,
            oB = ZB - JB;
          let GB = YB(TB - Math.floor(TB), 1) * oB;
          return GB = YB(GB + BB.z, oB), Math.floor(GB) + BB.x + JB
        }(TB, ZB.time);
      if (!isFinite(gB) || gB < 0 || gB >= NB.height) return QB.d.Warn("Baked vertex animation bounding info could not be refreshed because the computed frame is outside the texture.", 1), !1;
      const qB = oB.m.rN[0],
        yB = oB.m.Matrix[0],
        UB = oB.m.Matrix[1],
        WB = gB * NB.width * 4,
        dB = IB === GB.i.NormalKind ? oB.s.TransformNormalFromFloatsToRef : oB.s.TransformCoordinatesFromFloatsToRef;
      for (let oB = 0, GB = 0; oB < BB.length; oB += 3, GB += 4) {
        let IB, ZB;
        for (yB.reset(), IB = 0; IB < 4 && IB < nB; IB++) ZB = vB[GB + IB], ZB > 0 && (iB(FB, WB + 16 * Math.floor(JB[GB + IB]), UB), UB.scaleAndAddToRef(ZB, yB));
        if (kB && cB)
          for (IB = 0; IB < 4 && IB + 4 < nB; IB++) ZB = cB[GB + IB], ZB > 0 && (iB(FB, WB + 16 * Math.floor(kB[GB + IB]), UB), UB.scaleAndAddToRef(ZB, yB));
        dB(BB[oB], BB[oB + 1], BB[oB + 2], yB, qB), qB.toArray(BB, oB)
      }
      return !0
    }
    class aB {
      constructor() {
        this.facetNb = 0, this.partitioningSubdivisions = 10, this.partitioningBBoxRatio = 1.01, this.facetDataEnabled = !1, this.facetParameters = {}, this.bbSize = oB.s.Zero(), this.subDiv = {
          max: 1,
          X: 1,
          Y: 1,
          Z: 1
        }, this.facetDepthSort = !1, this.facetDepthSortEnabled = !1
      }
    }
    class HB {
      constructor() {
        this._hasVertexAlpha = !1, this._useVertexColors = !0, this._numBoneInfluencers = 4, this._applyFog = !0, this._receiveShadows = !1, this._facetData = new aB, this._visibility = 1, this._skeleton = null, this._layerMask = 268435455, this._computeBonesUsingShaders = !0, this._isActive = !1, this._onlyForInstances = !1, this._isActiveIntermediate = !1, this._onlyForInstancesIntermediate = !1, this._actAsRegularMesh = !1, this._currentLOD = new Map, this._collisionRetryCount = 3, this._morphTargetManager = null, this._renderingGroupId = 0, this._meshBlendingTag = 0, this._bakedVertexAnimationManager = null, this._material = null, this._positions = null, this._pointerOverDisableMeshTesting = !1, this._meshCollisionData = new zB, this._enableDistantPicking = !1, this._rawBoundingInfo = null, this._sideOrientationHint = !1, this._wasActiveLastFrame = !1
      }
    }
    let MB = (() => {
        var BB;
        let IB, zB = kB.g,
          FB = [];
        return BB = class extends zB {
          static get BILLBOARDMODE_NONE() {
            return kB.g.BILLBOARDMODE_NONE
          }
          static get BILLBOARDMODE_X() {
            return kB.g.BILLBOARDMODE_X
          }
          static get BILLBOARDMODE_Y() {
            return kB.g.BILLBOARDMODE_Y
          }
          static get BILLBOARDMODE_Z() {
            return kB.g.BILLBOARDMODE_Z
          }
          static get BILLBOARDMODE_ALL() {
            return kB.g.BILLBOARDMODE_ALL
          }
          static get BILLBOARDMODE_USE_POSITION() {
            return kB.g.BILLBOARDMODE_USE_POSITION
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
          set Wz(BB) {
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
            const IB = this._internalAbstractMeshDataInfo._visibility;
            this._internalAbstractMeshDataInfo._visibility = BB, (1 === IB && 1 !== BB || 1 !== IB && 1 === BB) && this._markSubMeshesAsDirty((BB => {
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
            this._internalAbstractMeshDataInfo._material !== BB && (this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._material = BB, BB && BB.meshMap && (BB.meshMap[this.uniqueId] = this), this.onMaterialChangedObservable.hasObservers() && this.onMaterialChangedObservable.notifyObservers(this), this.EW && (this.resetDrawCache(void 0, null == BB), this._unBindEffect()))
          }
          getMaterialForRenderPass(BB) {
            return this._internalAbstractMeshDataInfo._materialForRenderPass?.[BB]
          }
          setMaterialForRenderPass(BB, IB) {
            this.resetDrawCache(BB), this._internalAbstractMeshDataInfo._materialForRenderPass || (this._internalAbstractMeshDataInfo._materialForRenderPass = []);
            const ZB = this._internalAbstractMeshDataInfo._materialForRenderPass[BB];
            ZB?.meshMap?.[this.uniqueId] && (ZB.meshMap[this.uniqueId] = void 0), this._internalAbstractMeshDataInfo._materialForRenderPass[BB] = IB, IB && IB.meshMap && (IB.meshMap[this.uniqueId] = this)
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
            const IB = this._internalAbstractMeshDataInfo._skeleton;
            IB && IB.needInitialSkinMatrix && IB._unregisterMeshWithPoseMatrix(this), BB && BB.needInitialSkinMatrix && BB._registerMeshWithPoseMatrix(this), this._internalAbstractMeshDataInfo._skeleton = BB, this._internalAbstractMeshDataInfo._skeleton || (this._bonesTransformMatrices = null), this._markSubMeshesAsAttributesDirty()
          }
          get skeleton() {
            return this._internalAbstractMeshDataInfo._skeleton
          }
          constructor(IB) {
            var ZB;
            let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            switch (super(IB, TB, !1), ZB = this, this._internalAbstractMeshDataInfo = new HB, this._waitingMaterialId = null, this._waitingMorphTargetManagerId = null, this._waitingSkeletonId = null, this._waitingSkeletonUniqueId = null, this.cullingStrategy = BB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY, this.onCollideObservable = new JB.b, this.onCollisionPositionChangeObservable = new JB.b, this.onMaterialChangedObservable = new JB.b, this.definedFacingForward = !0, this._occlusionQuery = null, this._renderingGroup = null, this.alphaIndex = Number.MAX_VALUE, this.tg = BB.DefaultIsPickable, this.isNearPickable = !1, this.isNearGrabbable = !1, this.showSubMeshesBoundingBox = !1, this.isBlocker = !1, this.enablePointerMoveEvents = !1, this.outlineColor = WB.c.Red(), this.outlineWidth = .02, this.overlayColor = WB.c.Red(), this.overlayAlpha = .5, this.useOctreeForRenderingSelection = !0, this.useOctreeForPicking = !0, this.useOctreeForCollisions = !0, this.RN = !1, this.XN = !1, this.actionManager = null, this.ellipsoid = new oB.s(.5, 1, .5), this.ellipsoidOffset = new oB.s(0, 0, 0), this.edgesWidth = 1, this.edgesColor = new WB.g(1, 0, 0, 1), this._edgesRenderer = null, this._masterMesh = null, this._boundingInfo = null, this._boundingInfoIsDirty = !0, this._renderId = 0, this._intersectionsInProgress = new Array, this._unIndexed = !1, this._lightSources = new Array, this._waitingData = {
                lods: null,
                actions: null,
                yR: null
              }, this._bonesTransformMatrices = null, this._transformMatrixTexture = null, this.onRebuildObservable = new JB.b, this._onCollisionPositionChange = function(BB, IB) {
                let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                IB.subtractToRef(ZB._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, ZB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), ZB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions.length() > wB.c.CollisionsEpsilon && ZB.position.addInPlace(ZB._internalAbstractMeshDataInfo._meshCollisionData._diffPositionForCollisions), TB && ZB.onCollideObservable.notifyObservers(TB), ZB.onCollisionPositionChangeObservable.notifyObservers(ZB.position)
              }, TB = this.JR(), this.layerMask = TB.defaultRenderableLayerMask, TB.jTB(this), this._resyncLightSources(), this._uniformBuffer = new hB.d(this.JR().PN(), void 0, void 0, IB, !this.JR().PN().isWebGPU), this._buildUniformLayout(), TB.performancePriority) {
              case 2:
                this.XN = !0;
              case 1:
                this.RN = !0, this.tg = !1
            }
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("world", 16), this._uniformBuffer.addUniform("visibility", 1), this._uniformBuffer.create()
          }
          transferToEffect(BB) {
            const IB = this._uniformBuffer;
            IB.T6("world", BB), IB.updateFloat("visibility", this._internalAbstractMeshDataInfo._visibility), IB.update()
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
            let IB = "Name: " + this.name + ", isInstance: " + ("InstancedMesh" === this.getClassName() ? "YES" : "NO");
            IB += ", # of submeshes: " + (this.EW ? this.EW.length : 0);
            const ZB = this._internalAbstractMeshDataInfo._skeleton;
            return ZB && (IB += ", skeleton: " + ZB.name), BB && (IB += ", billboard mode: " + ["NONE", "X", "Y", null, "Z", null, null, "ALL"][this.billboardMode], IB += ", freeze wrld mat: " + (this._isWorldMatrixFrozen || this._waitingData.yR ? "YES" : "NO")), IB
          }
          _getEffectiveParent() {
            return this._masterMesh && this.billboardMode !== kB.g.BILLBOARDMODE_NONE ? this._masterMesh : super._getEffectiveParent()
          }
          _getActionManagerForTrigger(BB) {
            let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (this.actionManager && (IB || this.actionManager.isRecursive)) {
              if (!BB) return this.actionManager;
              if (this.actionManager.hasSpecificTrigger(BB)) return this.actionManager
            }
            return this.parent ? this.parent._getActionManagerForTrigger(BB, !1) : null
          }
          _releaseRenderPassId(BB) {}
          _rebuild() {
            if (this.onRebuildObservable.notifyObservers(this), null !== this._occlusionQuery && (this._occlusionQuery = null), this.EW) {
              for (const BB of this.EW) BB._rebuild();
              this.resetDrawCache()
            }
          }
          _resyncLightSources() {
            this._lightSources.length = 0;
            for (const BB of this.JR().lights) BB.isEnabled() && BB.canAffectMesh(this) && this._lightSources.push(BB);
            this._markSubMeshesAsLightDirty()
          }
          _resyncLightSource(BB) {
            const IB = BB.isEnabled() && BB.canAffectMesh(this),
              ZB = this._lightSources.indexOf(BB);
            let TB = !1;
            if (-1 === ZB) {
              if (!IB) return;
              this._lightSources.push(BB)
            } else {
              if (IB) return;
              TB = !0, this._lightSources.splice(ZB, 1)
            }
            this._markSubMeshesAsLightDirty(TB)
          }
          _unBindEffect() {
            for (const BB of this.EW) BB.setEffect(null)
          }
          _removeLightSource(BB, IB) {
            const ZB = this._lightSources.indexOf(BB); - 1 !== ZB && (this._lightSources.splice(ZB, 1), this._markSubMeshesAsLightDirty(IB))
          }
          _markSubMeshesAsDirty(BB) {
            if (this.EW)
              for (const IB of this.EW)
                for (let ZB = 0; ZB < IB._drawWrappers.length; ++ZB) {
                  const TB = IB._drawWrappers[ZB];
                  TB && TB.defines && TB.defines.markAllAsDirty && BB(TB.defines)
                }
          }
          _markSubMeshesAsLightDirty() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._markSubMeshesAsDirty((IB => IB.markAsLightDirty(BB)))
          }
          _markSubMeshesAsAttributesDirty() {
            this._markSubMeshesAsDirty((BB => BB.markAsAttributesDirty()))
          }
          _markSubMeshesAsMiscDirty() {
            this._markSubMeshesAsDirty((BB => BB.markAsMiscDirty()))
          }
          GZB(BB) {
            return this._currentRenderId = Number.MAX_VALUE, super.GZB(BB), this._isDirty = !0, this
          }
          resetDrawCache(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (this.EW)
              for (const ZB of this.EW) ZB.resetDrawCache(BB, IB)
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
          MTB() {
            return null
          }
          getVerticesData(BB) {
            return null
          }
          setVerticesData(BB, IB, ZB, TB) {
            return this
          }
          updateVerticesData(BB, IB, ZB, TB) {
            return this
          }
          setIndices(BB, IB) {
            return this
          }
          isVerticesDataPresent(BB) {
            return !1
          }
          qm() {
            return this._masterMesh ? this._masterMesh.qm() : (this._boundingInfoIsDirty && (this._boundingInfoIsDirty = !1, this._updateBoundingInfo()), this._boundingInfo)
          }
          getRawBoundingInfo() {
            return this.rawBoundingInfo ?? this.qm()
          }
          setBoundingInfo(BB) {
            return this._boundingInfo = BB, this
          }
          get hasBoundingInfo() {
            return null !== this._boundingInfo
          }
          buildBoundingInfo(BB, IB, ZB) {
            return this._boundingInfo = new nB.d(BB, IB, ZB), this._boundingInfo
          }
          normalizeToUnitCube() {
            let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
              IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZB = arguments.length > 2 ? arguments[2] : void 0;
            return super.normalizeToUnitCube(BB, IB, ZB)
          }
          get useBones() {
            return this.skeleton && this.JR().skeletonsEnabled && this.isVerticesDataPresent(GB.i.MatricesIndicesKind) && this.isVerticesDataPresent(GB.i.MatricesWeightsKind)
          }
          _preActivate() {}
          _preActivateForIntermediateRendering(BB) {}
          _activate(BB, IB) {
            return this._renderId = BB, !0
          }
          _postActivate() {}
          _freeze() {}
          _unFreeze() {}
          getWorldMatrix() {
            return this._masterMesh && this.billboardMode === kB.g.BILLBOARDMODE_NONE ? this._masterMesh.getWorldMatrix() : super.getWorldMatrix()
          }
          _getWorldMatrixDeterminant() {
            return this._masterMesh ? this._masterMesh._getWorldMatrixDeterminant() : super._getWorldMatrixDeterminant()
          }
          get vR() {
            return !1
          }
          get sJB() {
            return !1
          }
          get hasThinInstances() {
            return !1
          }
          movePOV(BB, IB, ZB) {
            return this.position.addInPlace(this.calcMovePOV(BB, IB, ZB)), this
          }
          calcMovePOV(BB, IB, ZB) {
            const TB = new oB.b;
            (this.rotationQuaternion ? this.rotationQuaternion : oB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z)).toRotationMatrix(TB);
            const JB = oB.s.Zero(),
              GB = this.definedFacingForward ? -1 : 1;
            return oB.s.TransformCoordinatesFromFloatsToRef(BB * GB, IB, ZB * GB, TB, JB), JB
          }
          rotatePOV(BB, IB, ZB) {
            return this.rotation.addInPlace(this.calcRotatePOV(BB, IB, ZB)), this
          }
          calcRotatePOV(BB, IB, ZB) {
            const TB = this.definedFacingForward ? 1 : -1;
            return new oB.s(BB * TB, IB, ZB * TB)
          }
          _refreshBoundingInfo(BB, IB) {
            if (BB) {
              const ZB = (0, UB.e)(BB, 0, this.getTotalVertices(), IB);
              this._boundingInfo ? this._boundingInfo.reConstruct(ZB.minimum, ZB.maximum) : this._boundingInfo = new nB.d(ZB.minimum, ZB.maximum)
            }
            if (this.EW)
              for (let ZB = 0; ZB < this.EW.length; ZB++) this.EW[ZB].refreshBoundingInfo(BB);
            this._updateBoundingInfo()
          }
          _refreshBoundingInfoDirect(BB) {
            if (this._boundingInfo ? this._boundingInfo.reConstruct(BB.minimum, BB.maximum) : this._boundingInfo = new nB.d(BB.minimum, BB.maximum), this.EW)
              for (let IB = 0; IB < this.EW.length; IB++) this.EW[IB].refreshBoundingInfo(null);
            this._updateBoundingInfo()
          }
          static _ApplySkeleton(BB, IB, ZB, TB, JB, vB, kB) {
            ! function(BB, IB, ZB, TB, JB, vB, kB) {
              const cB = oB.m.rN[0],
                nB = oB.m.Matrix[0],
                hB = oB.m.Matrix[1],
                zB = IB === GB.i.NormalKind ? oB.s.TransformNormalFromFloatsToRef : oB.s.TransformCoordinatesFromFloatsToRef;
              for (let GB = 0, FB = 0; GB < BB.length; GB += 3, FB += 4) {
                let IB, NB;
                for (nB.reset(), IB = 0; IB < 4; IB++) NB = JB[FB + IB], NB > 0 && (oB.b.FromFloat32ArrayToRefScaled(ZB, Math.floor(16 * TB[FB + IB]), NB, hB), nB.addToSelf(hB));
                if (vB && kB)
                  for (IB = 0; IB < 4; IB++) NB = kB[FB + IB], NB > 0 && (oB.b.FromFloat32ArrayToRefScaled(ZB, Math.floor(16 * vB[FB + IB]), NB, hB), nB.addToSelf(hB));
                zB(BB[GB], BB[GB + 1], BB[GB + 2], nB, cB), cB.toArray(BB, GB)
              }
            }(BB, IB, ZB, TB, JB, vB, kB)
          }
          _getData(IB, ZB) {
            let TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GB.i.PositionKind;
            const JB = IB.cache,
              vB = BB => {
                if (JB) {
                  const IB = JB._vertexData || (JB._vertexData = {});
                  return IB[BB] || this.copyVerticesData(BB, IB), IB[BB]
                }
                return this.getVerticesData(BB)
              };
            if (ZB || (ZB = vB(TB)), !ZB) return null;
            JB ? (JB._outputData ? JB._outputData.set(ZB) : JB._outputData = new Float32Array(ZB), ZB = JB._outputData) : (IB.applyMorph && this.morphTargetManager || IB.applySkeleton && this.skeleton || IB.applyBakedVertexAnimation && this.bakedVertexAnimationManager?.isEnabled) && (ZB = ZB.slice()), IB.applyMorph && this.morphTargetManager && function(BB, IB, ZB) {
              let TB;
              switch (IB) {
                case GB.i.PositionKind:
                  TB = BB => BB.getPositions();
                  break;
                case GB.i.NormalKind:
                  TB = BB => BB.getNormals();
                  break;
                case GB.i.TangentKind:
                  TB = BB => BB.getTangents();
                  break;
                case GB.i.UVKind:
                  TB = BB => BB.getUVs();
                  break;
                case GB.i.UV2Kind:
                  TB = BB => BB.getUV2s();
                  break;
                case GB.i.ColorKind:
                  TB = BB => BB.getColors();
                  break;
                default:
                  return
              }
              for (let JB = 0; JB < BB.length; JB++) {
                let IB = BB[JB];
                for (let oB = 0; oB < ZB.numTargets; oB++) {
                  const GB = ZB.getTarget(oB),
                    vB = GB.influence;
                  if (0 !== vB) {
                    const ZB = TB(GB);
                    ZB && (IB += (ZB[JB] - BB[JB]) * vB)
                  }
                }
                BB[JB] = IB
              }
            }(ZB, TB, this.morphTargetManager);
            const kB = this.bakedVertexAnimationManager;
            let cB = !1;
            if (IB.applyBakedVertexAnimation && kB?.isEnabled) {
              const BB = vB(GB.i.MatricesIndicesKind),
                JB = vB(GB.i.MatricesWeightsKind);
              if (JB && BB) {
                const oB = this.numBoneInfluencers > 4,
                  nB = oB ? vB(GB.i.MatricesIndicesExtraKind) : null,
                  hB = oB ? vB(GB.i.MatricesWeightsExtraKind) : null;
                cB = pB(ZB, TB, kB, IB.bakedVertexAnimationSettings ?? kB.animationParameters, BB, JB, nB, hB, this.numBoneInfluencers)
              }
            }
            if (!cB && IB.applySkeleton && this.skeleton) {
              const IB = vB(GB.i.MatricesIndicesKind),
                JB = vB(GB.i.MatricesWeightsKind);
              if (JB && IB) {
                const oB = this.numBoneInfluencers > 4,
                  kB = oB ? vB(GB.i.MatricesIndicesExtraKind) : null,
                  cB = oB ? vB(GB.i.MatricesWeightsExtraKind) : null,
                  nB = this.skeleton.getTransformMatrices(this);
                BB._ApplySkeleton(ZB, TB, nB, IB, JB, kB, cB)
              }
            }
            if (!1 !== IB.updatePositionsArray && TB === GB.i.PositionKind) {
              const BB = this._internalAbstractMeshDataInfo._positions || [],
                IB = BB.length;
              if (BB.length = ZB.length / 3, IB < BB.length)
                for (let ZB = IB; ZB < BB.length; ZB++) BB[ZB] = new oB.s;
              for (let TB = 0, JB = 0; TB < BB.length; TB++, JB += 3) BB[TB].cBB(ZB[JB], ZB[JB + 1], ZB[JB + 2]);
              this._internalAbstractMeshDataInfo._positions = BB
            }
            return ZB
          }
          getNormalsData() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return this._getData({
              applySkeleton: BB,
              applyMorph: IB,
              updatePositionsArray: !1
            }, null, GB.i.NormalKind)
          }
          zK() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return this._getData({
              applySkeleton: BB,
              applyMorph: IB,
              updatePositionsArray: !1
            }, ZB, GB.i.PositionKind)
          }
          _updateBoundingInfo() {
            return this._boundingInfo ? this._boundingInfo.update(this.worldMatrixFromCache) : this._boundingInfo = new nB.d(oB.s.Zero(), oB.s.Zero(), this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
          }
          _updateSubMeshesBoundingInfo(BB) {
            if (!this.EW) return this;
            const IB = this.EW.length;
            for (let ZB = 0; ZB < IB; ZB++) {
              const TB = this.EW[ZB];
              (IB > 1 || !TB.IsGlobal) && TB.updateBoundingInfo(BB)
            }
            return this
          }
          _afterComputeWorldMatrix() {
            this.XN || (this._boundingInfoIsDirty = !0)
          }
          isInFrustum(BB) {
            return this.qm().isInFrustum(BB, this.cullingStrategy)
          }
          isCompletelyInFrustum(BB) {
            return this.qm().isCompletelyInFrustum(BB)
          }
          yJB(BB) {
            let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              ZB = arguments.length > 2 ? arguments[2] : void 0;
            const TB = this.qm(),
              JB = BB.qm();
            if (TB.intersects(JB, IB)) return !0;
            if (ZB)
              for (const oB of this.getChildMeshes())
                if (oB.yJB(BB, IB, !0)) return !0;
            return !1
          }
          intersectsPoint(BB) {
            return this.qm().intersectsPoint(BB)
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
            let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            this.getAbsolutePosition().addToRef(this.ellipsoidOffset, this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions);
            const ZB = this.JR().collisionCoordinator;
            return this._internalAbstractMeshDataInfo._meshCollisionData._collider || (this._internalAbstractMeshDataInfo._meshCollisionData._collider = ZB.createCollider()), this._internalAbstractMeshDataInfo._meshCollisionData._collider._radius = this.ellipsoid, ZB.getNewPosition(this._internalAbstractMeshDataInfo._meshCollisionData._oldPositionForCollisions, BB, this._internalAbstractMeshDataInfo._meshCollisionData._collider, this.collisionRetryCount, this, this._onCollisionPositionChange, this.uniqueId, IB), this
          }
          _collideForSubMesh(BB, IB, ZB) {
            if (this._generatePointsArray(), !this._positions) return this;
            if (!BB._lastColliderWorldVertices || !BB._lastColliderTransformMatrix.equals(IB)) {
              BB._lastColliderTransformMatrix = IB.clone(), BB._lastColliderWorldVertices = [], BB._trianglePlanes = [];
              const ZB = BB.verticesStart,
                TB = BB.verticesStart + BB.verticesCount;
              for (let JB = ZB; JB < TB; JB++) BB._lastColliderWorldVertices.push(oB.s.TransformCoordinates(this._positions[JB], IB))
            }
            return ZB._collide(BB._trianglePlanes, BB._lastColliderWorldVertices, this.MTB(), BB.indexStart, BB.indexStart + BB.indexCount, BB.verticesStart, !!BB.LN(), this, this._shouldConvertRHS(), 7 === BB.LN()?.fillMode), this
          }
          _processCollisionsForSubMeshes(BB, IB) {
            const ZB = this._scene.getCollidingSubMeshCandidates(this, BB),
              TB = ZB.length;
            for (let JB = 0; JB < TB; JB++) {
              const oB = ZB.data[JB];
              TB > 1 && !oB._checkCollision(BB) || this._collideForSubMesh(oB, IB, BB)
            }
            return this
          }
          _shouldConvertRHS() {
            return !1
          }
          _checkCollision(BB) {
            if (!this.qm()._checkCollision(BB)) return this;
            const IB = oB.m.Matrix[0],
              ZB = oB.m.Matrix[1];
            return oB.b.ScalingToRef(1 / BB._radius.x, 1 / BB._radius.y, 1 / BB._radius.z, IB), this.worldMatrixFromCache.multiplyToRef(IB, ZB), this._processCollisionsForSubMeshes(BB, ZB), this
          }
          _generatePointsArray() {
            return !1
          }
          intersects(BB, IB, ZB) {
            let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              JB = arguments.length > 4 ? arguments[4] : void 0,
              GB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            const vB = new cB.e,
              kB = this.getClassName(),
              nB = "InstancedLinesMesh" === kB || "LinesMesh" === kB || "GreasedLineMesh" === kB ? this.intersectionThreshold : 0,
              hB = this.qm();
            if (!this.EW) return vB;
            if (!GB && (!BB.intersectsSphere(hB.ZJB, nB) || !BB.intersectsBox(hB.boundingBox, nB))) return vB;
            if (TB) return vB.hit = !GB, vB.pickedMesh = GB ? null : this, vB.distance = GB ? 0 : oB.s.Distance(BB.origin, hB.ZJB.center), vB.subMeshId = 0, vB;
            if (!this._generatePointsArray()) return vB;
            let zB = null;
            const FB = this._scene.getIntersectingSubMeshCandidates(this, BB),
              NB = FB.length;
            let gB = !1;
            for (let oB = 0; oB < NB; oB++) {
              const BB = FB.data[oB].LN();
              if (BB && (7 == BB.fillMode || 0 == BB.fillMode || 1 == BB.fillMode || 2 == BB.fillMode || 4 == BB.fillMode)) {
                gB = !0;
                break
              }
            }
            if (!gB) return vB.hit = !0, vB.pickedMesh = this, vB.distance = oB.s.Distance(BB.origin, hB.ZJB.center), vB.subMeshId = -1, vB;
            for (let oB = 0; oB < NB; oB++) {
              const TB = FB.data[oB];
              if (NB > 1 && !GB && !TB.canIntersects(BB)) continue;
              const JB = TB.intersects(BB, this._positions, this.MTB(), IB, ZB);
              if (JB && (IB || !zB || JB.distance < zB.distance) && (zB = JB, zB.subMeshId = TB._id, zB._internalSubMeshId = oB, IB)) break
            }
            if (zB) {
              const IB = JB ?? this.getWorldMatrix(),
                ZB = oB.m.rN[0],
                TB = oB.m.rN[1];
              oB.s.TransformCoordinatesToRef(BB.origin, IB, ZB), BB.direction.scaleToRef(zB.distance, TB);
              const GB = oB.s.TransformNormal(TB, IB).addInPlace(ZB);
              return vB.hit = !0, vB.distance = oB.s.Distance(ZB, GB), vB.pickedPoint = GB, vB.pickedMesh = this, vB.bu = zB.bu || 0, vB.bv = zB.bv || 0, vB.subMeshFaceId = zB.faceId, vB.faceId = zB.faceId + FB.data[zB._internalSubMeshId].indexStart / (-1 !== this.getClassName().indexOf("LinesMesh") ? 2 : 3), vB.subMeshId = zB.subMeshId, vB
            }
            return vB
          }
          clone(BB, IB, ZB) {
            return null
          }
          releaseSubMeshes() {
            let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (this.EW)
              for (; this.EW.length;) this.EW[0].dispose(BB);
            else this.EW = [];
            return this
          }
          dispose(BB) {
            let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const TB = this.JR();
            for (this._scene.useMaterialMeshMap && this._internalAbstractMeshDataInfo._material && this._internalAbstractMeshDataInfo._material.meshMap && (this._internalAbstractMeshDataInfo._material.meshMap[this.uniqueId] = void 0), TB.freeActiveMeshes(), TB.freeRenderingGroups(), TB.renderingManager.maintainStateBetweenFrames && TB.renderingManager.restoreDispachedFlags(), void 0 !== this.actionManager && null !== this.actionManager && (this.actionManager.disposeWhenUnowned && !this._scene.meshes.some((BB => BB !== this && BB.actionManager === this.actionManager)) && this.actionManager.dispose(), this.actionManager = null), this._internalAbstractMeshDataInfo._skeleton = null, this._transformMatrixTexture && (this._transformMatrixTexture.dispose(), this._transformMatrixTexture = null), IB = 0; IB < this._intersectionsInProgress.length; IB++) {
              const BB = this._intersectionsInProgress[IB],
                ZB = BB._intersectionsInProgress.indexOf(this);
              BB._intersectionsInProgress.splice(ZB, 1)
            }
            this._intersectionsInProgress.length = 0;
            const JB = TB.lights;
            for (const GB of JB) {
              let BB = GB.includedOnlyMeshes.indexOf(this); - 1 !== BB && GB.includedOnlyMeshes.splice(BB, 1), BB = GB.excludedMeshes.indexOf(this), -1 !== BB && GB.excludedMeshes.splice(BB, 1);
              const IB = GB.getShadowGenerators();
              if (IB) {
                const ZB = IB.values();
                for (let IB = ZB.next(); !0 !== IB.done; IB = ZB.next()) {
                  const ZB = IB.value.getShadowMap();
                  ZB && ZB.renderList && (BB = ZB.renderList.indexOf(this), -1 !== BB && ZB.renderList.splice(BB, 1))
                }
              }
            }
            this.releaseSubMeshes(TB._isDisposing);
            const oB = TB.PN();
            if (null !== this._occlusionQuery && (this.isOcclusionQueryInProgress = !1, oB.deleteQuery(this._occlusionQuery), this._occlusionQuery = null), oB.wipeCaches(), TB.jR(this), this._parentContainer) {
              const BB = this._parentContainer.meshes.indexOf(this);
              BB > -1 && this._parentContainer.meshes.splice(BB, 1), this._parentContainer = null
            }
            if (ZB && this.material && ("MultiMaterial" === this.material.getClassName() ? this.material.dispose(!1, !0, !0) : this.material.dispose(!1, !0)), !BB)
              for (IB = 0; IB < TB.DW.length; IB++) TB.DW[IB].emitter === this && (TB.DW[IB].dispose(), IB--);
            this._internalAbstractMeshDataInfo._facetData.facetDataEnabled && this.disableFacetData(), this._uniformBuffer.dispose(), this.onAfterWorldMatrixUpdateObservable.clear(), this.onCollideObservable.clear(), this.onCollisionPositionChangeObservable.clear(), this.onRebuildObservable.clear(), super.dispose(BB, ZB)
          }
          _initFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            BB.facetNormals || (BB.facetNormals = []), BB.facetPositions || (BB.facetPositions = []), BB.facetPartitioning || (BB.facetPartitioning = new Array), BB.facetNb = this.MTB().length / 3 | 0, BB.partitioningSubdivisions = BB.partitioningSubdivisions ? BB.partitioningSubdivisions : 10, BB.partitioningBBoxRatio = BB.partitioningBBoxRatio ? BB.partitioningBBoxRatio : 1.01;
            for (let IB = 0; IB < BB.facetNb; IB++) BB.facetNormals[IB] = oB.s.Zero(), BB.facetPositions[IB] = oB.s.Zero();
            return BB.facetDataEnabled = !0, this
          }
          updateFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            BB.facetDataEnabled || this._initFacetData();
            const IB = this.getVerticesData(GB.i.PositionKind),
              ZB = this.MTB(),
              TB = this.getVerticesData(GB.i.NormalKind)?.slice(),
              JB = this.qm();
            if (BB.facetDepthSort && !BB.facetDepthSortEnabled) {
              if (BB.facetDepthSortEnabled = !0, ZB instanceof Uint16Array) BB.depthSortedIndices = new Uint16Array(ZB);
              else if (ZB instanceof Uint32Array) BB.depthSortedIndices = new Uint32Array(ZB);
              else {
                let IB = !1;
                for (let BB = 0; BB < ZB.length; BB++)
                  if (ZB[BB] > 65535) {
                    IB = !0;
                    break
                  } BB.depthSortedIndices = IB ? new Uint32Array(ZB) : new Uint16Array(ZB)
              }
              if (BB.facetDepthSortFunction = function(BB, IB) {
                  return IB.sqDistance - BB.sqDistance
                }, !BB.facetDepthSortFrom) {
                const IB = this.JR().activeCamera;
                BB.facetDepthSortFrom = IB ? IB.position : oB.s.Zero()
              }
              BB.depthSortedFacets = [];
              for (let IB = 0; IB < BB.facetNb; IB++) {
                const ZB = {
                  ind: 3 * IB,
                  sqDistance: 0
                };
                BB.depthSortedFacets.push(ZB)
              }
              BB.invertedMatrix = oB.b.Identity(), BB.facetDepthSortOrigin = oB.s.Zero()
            }
            BB.bbSize.x = JB.maximum.x - JB.minimum.x > dB.d ? JB.maximum.x - JB.minimum.x : dB.d, BB.bbSize.y = JB.maximum.y - JB.minimum.y > dB.d ? JB.maximum.y - JB.minimum.y : dB.d, BB.bbSize.z = JB.maximum.z - JB.minimum.z > dB.d ? JB.maximum.z - JB.minimum.z : dB.d;
            let kB = BB.bbSize.x > BB.bbSize.y ? BB.bbSize.x : BB.bbSize.y;
            if (kB = kB > BB.bbSize.z ? kB : BB.bbSize.z, BB.subDiv.max = BB.partitioningSubdivisions, BB.subDiv.X = Math.floor(BB.subDiv.max * BB.bbSize.x / kB), BB.subDiv.Y = Math.floor(BB.subDiv.max * BB.bbSize.y / kB), BB.subDiv.Z = Math.floor(BB.subDiv.max * BB.bbSize.z / kB), BB.subDiv.X = BB.subDiv.X < 1 ? 1 : BB.subDiv.X, BB.subDiv.Y = BB.subDiv.Y < 1 ? 1 : BB.subDiv.Y, BB.subDiv.Z = BB.subDiv.Z < 1 ? 1 : BB.subDiv.Z, BB.facetParameters.facetNormals = this.getFacetLocalNormals(), BB.facetParameters.facetPositions = this.getFacetLocalPositions(), BB.facetParameters.facetPartitioning = this.getFacetLocalPartitioning(), BB.facetParameters.bInfo = JB, BB.facetParameters.bbSize = BB.bbSize, BB.facetParameters.subDiv = BB.subDiv, BB.facetParameters.ratio = this.partitioningBBoxRatio, BB.facetParameters.depthSort = BB.facetDepthSort, BB.facetDepthSort && BB.facetDepthSortEnabled && (this.computeWorldMatrix(!0), this._worldMatrix.invertToRef(BB.invertedMatrix), oB.s.TransformCoordinatesToRef(BB.facetDepthSortFrom, BB.invertedMatrix, BB.facetDepthSortOrigin), BB.facetParameters.distanceTo = BB.facetDepthSortOrigin), BB.facetParameters.depthSortedFacets = BB.depthSortedFacets, TB && vB.c.ComputeNormals(IB, ZB, TB, BB.facetParameters), BB.facetDepthSort && BB.facetDepthSortEnabled) {
              BB.depthSortedFacets.sort(BB.facetDepthSortFunction);
              const IB = BB.depthSortedIndices.length / 3 | 0;
              for (let TB = 0; TB < IB; TB++) {
                const IB = BB.depthSortedFacets[TB].ind;
                BB.depthSortedIndices[3 * TB] = ZB[IB], BB.depthSortedIndices[3 * TB + 1] = ZB[IB + 1], BB.depthSortedIndices[3 * TB + 2] = ZB[IB + 2]
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
            const IB = oB.s.Zero();
            return this.getFacetPositionToRef(BB, IB), IB
          }
          getFacetPositionToRef(BB, IB) {
            const ZB = this.getFacetLocalPositions()[BB],
              TB = this.getWorldMatrix();
            return oB.s.TransformCoordinatesToRef(ZB, TB, IB), this
          }
          getFacetNormal(BB) {
            const IB = oB.s.Zero();
            return this.getFacetNormalToRef(BB, IB), IB
          }
          getFacetNormalToRef(BB, IB) {
            const ZB = this.getFacetLocalNormals()[BB];
            return oB.s.TransformNormalToRef(ZB, this.getWorldMatrix(), IB), this
          }
          getFacetsAtLocalCoordinates(BB, IB, ZB) {
            const TB = this.qm(),
              JB = this._internalAbstractMeshDataInfo._facetData,
              oB = Math.floor((BB - TB.minimum.x * JB.partitioningBBoxRatio) * JB.subDiv.X * JB.partitioningBBoxRatio / JB.bbSize.x),
              GB = Math.floor((IB - TB.minimum.y * JB.partitioningBBoxRatio) * JB.subDiv.Y * JB.partitioningBBoxRatio / JB.bbSize.y),
              vB = Math.floor((ZB - TB.minimum.z * JB.partitioningBBoxRatio) * JB.subDiv.Z * JB.partitioningBBoxRatio / JB.bbSize.z);
            return oB < 0 || oB > JB.subDiv.max || GB < 0 || GB > JB.subDiv.max || vB < 0 || vB > JB.subDiv.max ? null : JB.facetPartitioning[oB + JB.subDiv.max * GB + JB.subDiv.max * JB.subDiv.max * vB]
          }
          getClosestFacetAtCoordinates(BB, IB, ZB, TB) {
            let JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              GB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            const vB = this.getWorldMatrix(),
              kB = oB.m.Matrix[5];
            vB.invertToRef(kB);
            const cB = oB.m.rN[8];
            oB.s.TransformCoordinatesFromFloatsToRef(BB, IB, ZB, kB, cB);
            const nB = this.getClosestFacetAtLocalCoordinates(cB.x, cB.y, cB.z, TB, JB, GB);
            return TB && oB.s.TransformCoordinatesFromFloatsToRef(TB.x, TB.y, TB.z, vB, TB), nB
          }
          getClosestFacetAtLocalCoordinates(BB, IB, ZB, TB) {
            let JB, oB, GB, vB, kB, cB, nB, hB, zB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              FB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
              NB = null;
            const gB = this.getFacetLocalPositions(),
              qB = this.getFacetLocalNormals(),
              yB = this.getFacetsAtLocalCoordinates(BB, IB, ZB);
            if (!yB) return null;
            let UB, WB, dB, CB, QB = Number.MAX_VALUE;
            for (let sB = 0; sB < yB.length; sB++) WB = yB[sB], dB = qB[WB], CB = gB[WB], vB = (BB - CB.x) * dB.x + (IB - CB.y) * dB.y + (ZB - CB.z) * dB.z, (!zB || zB && FB && vB >= 0 || zB && !FB && vB <= 0) && (vB = dB.x * CB.x + dB.y * CB.y + dB.z * CB.z, kB = -(dB.x * BB + dB.y * IB + dB.z * ZB - vB) / (dB.x * dB.x + dB.y * dB.y + dB.z * dB.z), cB = BB + dB.x * kB, nB = IB + dB.y * kB, hB = ZB + dB.z * kB, JB = cB - BB, oB = nB - IB, GB = hB - ZB, UB = JB * JB + oB * oB + GB * GB, UB < QB && (QB = UB, NB = WB, TB && (TB.x = cB, TB.y = nB, TB.z = hB)));
            return NB
          }
          getFacetDataParameters() {
            return this._internalAbstractMeshDataInfo._facetData.facetParameters
          }
          disableFacetData() {
            const BB = this._internalAbstractMeshDataInfo._facetData;
            return BB.facetDataEnabled && (BB.facetDataEnabled = !1, BB.facetPositions = [], BB.facetNormals = [], BB.facetPartitioning = new Array, BB.facetParameters = {}, BB.depthSortedIndices = new Uint32Array(0)), this
          }
          updateIndices(BB, IB) {
            return this
          }
          createNormals(BB) {
            const IB = this.getVerticesData(GB.i.PositionKind),
              ZB = this.MTB();
            let TB;
            return TB = this.isVerticesDataPresent(GB.i.NormalKind) ? this.getVerticesData(GB.i.NormalKind) : [], vB.c.ComputeNormals(IB, ZB, TB, {
              useRightHandedSystem: this.JR().useRightHandedSystem
            }), this.setVerticesData(GB.i.NormalKind, TB, BB), this
          }
          async optimizeIndicesAsync() {
            const BB = this.MTB();
            if (!BB) return this;
            const {
              OptimizeIndices: IB
            } = await ZB.e(356).then((() => ZB(42552)));
            return IB(BB), this.setIndices(BB, this.getTotalVertices()), this
          }
          alignWithNormal(BB, IB) {
            IB || (IB = CB.c.Y);
            const ZB = oB.m.rN[0],
              TB = oB.m.rN[1];
            return oB.s.CrossToRef(IB, BB, TB), oB.s.CrossToRef(BB, TB, ZB), this.rotationQuaternion ? oB.f.RotationQuaternionFromAxisToRef(ZB, BB, TB, this.rotationQuaternion) : oB.s.RotationFromAxisToRef(ZB, BB, TB, this.rotation), this
          }
          _checkOcclusionQuery() {
            return !1
          }
          disableEdgesRendering() {
            throw (0, qB.m)("EdgesRenderer")
          }
          enableEdgesRendering(BB, IB, ZB) {
            throw (0, qB.m)("EdgesRenderer")
          }
          getConnectedParticleSystems() {
            return this._scene.DW.filter((BB => BB.emitter === this))
          }
        }, (() => {
          const ZB = "function" === typeof Symbol && Symbol.metadata ? Object.create(zB[Symbol.metadata] ?? null) : void 0;
          IB = [sB.h.filter((function() {
            return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0]) && !Array.isArray(arguments.length <= 3 ? void 0 : arguments[3]) && !Array.isArray(arguments.length <= 4 ? void 0 : arguments[4]) && !Array.isArray(arguments.length <= 5 ? void 0 : arguments[5]) && !Array.isArray(arguments.length <= 6 ? void 0 : arguments[6])
          }))], (0, TB.j)(BB, null, IB, {
            kind: "method",
            name: "_ApplySkeleton",
            static: !0,
            private: !1,
            access: {
              has: BB => "_ApplySkeleton" in BB,
              get: BB => BB._ApplySkeleton
            },
            metadata: ZB
          }, null, FB), ZB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ZB
          })
        })(), BB.OCCLUSION_TYPE_NONE = ((0, TB.l)(BB, FB), 0), BB.OCCLUSION_TYPE_OPTIMISTIC = 1, BB.OCCLUSION_TYPE_STRICT = 2, BB.OCCLUSION_ALGORITHM_TYPE_ACCURATE = 0, BB.OCCLUSION_ALGORITHM_TYPE_CONSERVATIVE = 1, BB.CULLINGSTRATEGY_STANDARD = 0, BB.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, BB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, BB.CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, BB.DefaultIsPickable = !0, BB
      })(),
      jB = !1;

    function PB() {
      jB || (jB = !0, (0, OB.i)("BABYLON.AbstractMesh", MB))
    }(FB = MB.prototype).createOrUpdateSubmeshesOctree ?? (FB.createOrUpdateSubmeshesOctree = (0, qB.j)("AbstractMesh", "createOrUpdateSubmeshesOctree")), (NB = MB.prototype).getPhysicsImpostor ?? (NB.getPhysicsImpostor = (0, qB.j)("AbstractMesh", "getPhysicsImpostor")), (gB = MB.prototype).setPhysicsLinkWith ?? (gB.setPhysicsLinkWith = (0, qB.j)("AbstractMesh", "setPhysicsLinkWith")), Object.getOwnPropertyDescriptor(MB.prototype, "occlusionRetryCount") || Object.defineProperty(MB.prototype, "occlusionRetryCount", (0, qB.g)("AbstractMesh", "occlusionRetryCount")), Object.getOwnPropertyDescriptor(MB.prototype, "occlusionType") || Object.defineProperty(MB.prototype, "occlusionType", (0, qB.g)("AbstractMesh", "occlusionType")), Object.getOwnPropertyDescriptor(MB.prototype, "occlusionQueryAlgorithmType") || Object.defineProperty(MB.prototype, "occlusionQueryAlgorithmType", (0, qB.g)("AbstractMesh", "occlusionQueryAlgorithmType")), Object.getOwnPropertyDescriptor(MB.prototype, "isOccluded") || Object.defineProperty(MB.prototype, "isOccluded", (0, qB.g)("AbstractMesh", "isOccluded")), Object.getOwnPropertyDescriptor(MB.prototype, "isOcclusionQueryInProgress") || Object.defineProperty(MB.prototype, "isOcclusionQueryInProgress", (0, qB.g)("AbstractMesh", "isOcclusionQueryInProgress")), Object.getOwnPropertyDescriptor(MB.prototype, "forceRenderingWhenOccluded") || Object.defineProperty(MB.prototype, "forceRenderingWhenOccluded", (0, qB.g)("AbstractMesh", "forceRenderingWhenOccluded")), Object.getOwnPropertyDescriptor(MB.prototype, "occlusionForRenderPassId") || Object.defineProperty(MB.prototype, "occlusionForRenderPassId", (0, qB.g)("AbstractMesh", "occlusionForRenderPassId")), Object.getOwnPropertyDescriptor(MB.prototype, "decalMap") || Object.defineProperty(MB.prototype, "decalMap", (0, qB.g)("AbstractMesh", "decalMap")), Object.getOwnPropertyDescriptor(MB.prototype, "Zm") || Object.defineProperty(MB.prototype, "Zm", (0, qB.g)("AbstractMesh", "Zm")), Object.getOwnPropertyDescriptor(MB.prototype, "physicsImpostor") || Object.defineProperty(MB.prototype, "physicsImpostor", (0, qB.g)("AbstractMesh", "physicsImpostor")), Object.getOwnPropertyDescriptor(MB.prototype, "showBoundingBox") || Object.defineProperty(MB.prototype, "showBoundingBox", (0, qB.g)("AbstractMesh", "showBoundingBox")), Object.getOwnPropertyDescriptor(MB.prototype, "edgesRenderer") || Object.defineProperty(MB.prototype, "edgesRenderer", (0, qB.g)("AbstractMesh", "edgesRenderer")), Object.getOwnPropertyDescriptor(MB.prototype, "renderOutline") || Object.defineProperty(MB.prototype, "renderOutline", (0, qB.g)("AbstractMesh", "renderOutline")), Object.getOwnPropertyDescriptor(MB.prototype, "renderOverlay") || Object.defineProperty(MB.prototype, "renderOverlay", (0, qB.g)("AbstractMesh", "renderOverlay"))
  },
  40469: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => yB
    });
    var TB = ZB(37120),
      JB = ZB(37311),
      oB = ZB(40463),
      GB = ZB(40188),
      vB = ZB(40341),
      kB = ZB(40473),
      cB = ZB(40351),
      nB = ZB(40152),
      hB = ZB(38718),
      zB = ZB(40092),
      FB = ZB(40361),
      NB = ZB(37147),
      gB = ZB(40480),
      qB = ZB(40129);
    class yB {
      get boundingBias() {
        return this._boundingBias
      }
      set boundingBias(BB) {
        this._boundingBias ? this._boundingBias.TY(BB) : this._boundingBias = BB.clone(), this._updateBoundingInfo(!0, null)
      }
      static CreateGeometryForMesh(BB) {
        const IB = new yB(yB.RandomId(), BB.JR());
        return IB.applyToMesh(BB), IB
      }
      get meshes() {
        return this._meshes
      }
      constructor(BB, IB, ZB) {
        let JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          GB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
        this.delayLoadState = 0, this._totalVertices = 0, this._isDisposed = !1, this._extend = {
          minimum: new TB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
          maximum: new TB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE)
        }, this._indexBufferIsUpdatable = !1, this._positionsCache = [], this._parentContainer = null, this.useBoundingInfoFromGeometry = !1, this._scene = IB || NB.e.LastCreatedScene, this._scene && (this.id = BB, this.uniqueId = this._scene.getUniqueId(), this._engine = this._scene.PN(), this._meshes = [], this._vertexBuffers = {}, this._indices = [], this._updatable = JB, null !== GB && (this._totalVertices = GB), ZB ? this.setAllVerticesData(ZB, JB) : null === GB && (this._totalVertices = 0), this._engine.getCaps().vertexArrayObject && (this._vertexArrayObjects = {}), oB && (this.applyToMesh(oB), oB.computeWorldMatrix(!0)))
      }
      get extend() {
        return this._extend
      }
      JR() {
        return this._scene
      }
      PN() {
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
        for (const IB in this._vertexBuffers) BB.add(this._vertexBuffers[IB].getWrapperBuffer());
        BB.forEach((BB => {
          BB._rebuild()
        }))
      }
      setAllVerticesData(BB, IB) {
        BB.applyToGeometry(this, IB), this._notifyUpdate()
      }
      setVerticesData(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 ? arguments[3] : void 0;
        ZB && Array.isArray(IB) && (IB = new Float32Array(IB));
        const JB = new GB.i(this._engine, IB, BB, {
          updatable: ZB,
          postponeInternalCreation: 0 === this._meshes.length,
          stride: TB,
          label: "Geometry_" + this.id + "_" + BB
        });
        this.setVerticesBuffer(JB)
      }
      removeVerticesData(BB) {
        this._vertexBuffers[BB] && (this._vertexBuffers[BB].dispose(), delete this._vertexBuffers[BB]), this._vertexArrayObjects && this._disposeVertexArrayObjects()
      }
      setVerticesBuffer(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        const JB = BB.getKind();
        this._vertexBuffers[JB] && ZB && this._vertexBuffers[JB].dispose(), BB._buffer && BB._ownsBuffer && BB._buffer._increaseReferences(), this._vertexBuffers[JB] = BB;
        const oB = this._meshes,
          vB = oB.length;
        if (JB === GB.i.PositionKind) {
          this._totalVertices = IB ?? BB._maxVerticesCount, this._updateExtend(this.useBoundingInfoFromGeometry && this._boundingInfo ? null : BB.getFloatData(this._totalVertices)), this._resetPointsArrayCache();
          const ZB = this._extend && this._extend.minimum || new TB.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE),
            JB = this._extend && this._extend.maximum || new TB.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          for (let BB = 0; BB < vB; BB++) {
            const IB = oB[BB];
            IB.buildBoundingInfo(ZB, JB), IB._createGlobalSubMesh(IB.isUnIndexed), IB.computeWorldMatrix(!0), IB.synchronizeInstances()
          }
        }
        this._notifyUpdate(JB)
      }
      updateVerticesDataDirectly(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const JB = this.getVertexBuffer(BB);
        JB && (JB.updateDirectly(IB, ZB, TB), this._notifyUpdate(BB))
      }
      updateVerticesData(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const TB = this.getVertexBuffer(BB);
        TB && (TB.update(IB), BB === GB.i.PositionKind && this._updateBoundingInfo(ZB, IB), this._notifyUpdate(BB))
      }
      _updateBoundingInfo(BB, IB) {
        if (BB && this._updateExtend(IB), this._resetPointsArrayCache(), BB) {
          const BB = this._meshes;
          for (const IB of BB) {
            IB.hasBoundingInfo ? IB.qm().reConstruct(this._extend.minimum, this._extend.maximum) : IB.buildBoundingInfo(this._extend.minimum, this._extend.maximum);
            const BB = IB.EW;
            for (const IB of BB) IB.refreshBoundingInfo()
          }
        }
      }
      _bind(BB, IB, ZB, TB) {
        if (!BB) return;
        void 0 === IB && (IB = this._indexBuffer);
        const JB = this.getVertexBuffers();
        if (!JB) return;
        if (IB != this._indexBuffer || !this._vertexArrayObjects && !TB) return void this._engine.bindBuffers(JB, IB, BB, ZB);
        const oB = TB || this._vertexArrayObjects,
          GB = this._engine;
        oB[BB.key] || (oB[BB.key] = GB.recordVertexArrayObject(JB, IB, BB, ZB)), GB.bindVertexArrayObject(oB[BB.key], IB)
      }
      getTotalVertices() {
        return this.isReady() ? this._totalVertices : 0
      }
      getVerticesData(BB, IB, ZB) {
        const TB = this.getVertexBuffer(BB);
        return TB ? TB.getFloatData(this._totalVertices, ZB || IB && 1 !== this._meshes.length) : null
      }
      copyVerticesData(BB, IB) {
        const ZB = this.getVertexBuffer(BB);
        if (!ZB) return;
        IB[BB] || (IB[BB] = new Float32Array(this._totalVertices * ZB.getSize()));
        const TB = ZB.getData();
        TB && (0, qB.i)(TB, ZB.getSize(), ZB.type, ZB.byteOffset, ZB.byteStride, ZB.normalized, this._totalVertices, IB[BB])
      }
      isVertexBufferUpdatable(BB) {
        const IB = this._vertexBuffers[BB];
        return !!IB && IB.isUpdatable()
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
        let IB;
        if (!this._vertexBuffers && this._delayInfo)
          for (IB in this._delayInfo) BB.push(IB);
        else
          for (IB in this._vertexBuffers) BB.push(IB);
        return BB
      }
      updateIndices(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (this._indexBuffer)
          if (this._indexBufferIsUpdatable) {
            const TB = BB.length !== this._indices.length;
            if (ZB || (this._indices = BB.slice()), this._engine.updateDynamicIndexBuffer(this._indexBuffer, BB, IB), TB)
              for (const BB of this._meshes) BB._createGlobalSubMesh(!0)
          } else this.setIndices(BB, null, !0)
      }
      setIndexBuffer(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        this._indices = [], this._indexBufferIsUpdatable = !1, this._indexBuffer = BB, this._totalVertices = IB, this._totalIndices = ZB, BB.is32Bits = null === TB ? IB > 65535 : TB;
        for (const JB of this._meshes) JB._createGlobalSubMesh(!0), JB.synchronizeInstances();
        this._notifyUpdate()
      }
      setIndices(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indices = BB, this._indexBufferIsUpdatable = ZB, 0 !== this._meshes.length && this._indices && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, ZB, "Geometry_" + this.id + "_IndexBuffer")), void 0 != IB && (this._totalVertices = IB);
        for (const JB of this._meshes) JB._createGlobalSubMesh(!TB), JB.synchronizeInstances();
        this._notifyUpdate()
      }
      getTotalIndices() {
        return this.isReady() ? void 0 !== this._totalIndices ? this._totalIndices : this._indices.length : 0
      }
      MTB(BB, IB) {
        if (!this.isReady()) return null;
        const ZB = this._indices;
        return IB || BB && 1 !== this._meshes.length ? ZB.slice() : ZB
      }
      getIndexBuffer() {
        return this.isReady() ? this._indexBuffer : null
      }
      _releaseVertexArrayObject() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        BB && this._vertexArrayObjects && this._vertexArrayObjects[BB.key] && (this._engine.releaseVertexArrayObject(this._vertexArrayObjects[BB.key]), delete this._vertexArrayObjects[BB.key])
      }
      releaseForMesh(BB, IB) {
        const ZB = this._meshes,
          TB = ZB.indexOf(BB); - 1 !== TB && (ZB.splice(TB, 1), this._vertexArrayObjects && BB._invalidateInstanceVertexArrayObject(), BB._geometry = null, 0 === ZB.length && IB && this.dispose())
      }
      applyToMesh(BB) {
        if (BB._geometry === this) return;
        const IB = BB._geometry;
        IB && IB.releaseForMesh(BB), this._vertexArrayObjects && BB._invalidateInstanceVertexArrayObject();
        const ZB = this._meshes;
        BB._geometry = this, BB._internalAbstractMeshDataInfo._positions = null, this._scene.pushGeometry(this), ZB.push(BB), this.isReady() ? this._applyToMesh(BB) : this._boundingInfo && BB.setBoundingInfo(this._boundingInfo)
      }
      _updateExtend() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (this.useBoundingInfoFromGeometry && this._boundingInfo) this._extend = {
          minimum: this._boundingInfo.minimum.clone(),
          maximum: this._boundingInfo.maximum.clone()
        };
        else {
          if (!BB && (BB = this.getVerticesData(GB.i.PositionKind), !BB)) return;
          this._extend = (0, FB.e)(BB, 0, this._totalVertices, this.boundingBias, 3)
        }
      }
      _applyToMesh(BB) {
        for (const IB in this._vertexBuffers) {
          const ZB = this._vertexBuffers[IB];
          ZB._buffer.getBuffer() || ZB.create(), IB === GB.i.PositionKind && (this._extend || this._updateExtend(), BB.buildBoundingInfo(this._extend.minimum, this._extend.maximum), BB._createGlobalSubMesh(BB.isUnIndexed), BB._updateBoundingInfo())
        }!this._indexBuffer && this._indices && this._indices.length > 0 && (this._indexBuffer = this._engine.createIndexBuffer(this._indices, this._updatable, "Geometry_" + this.id + "_IndexBuffer")), BB._syncGeometryWithMorphTargetManager(), BB.synchronizeInstances()
      }
      _notifyUpdate(BB) {
        this.onGeometryUpdated && this.onGeometryUpdated(this, BB), this._vertexArrayObjects && this._disposeVertexArrayObjects();
        for (const IB of this._meshes) IB._markSubMeshesAsAttributesDirty()
      }
      load(BB, IB) {
        2 !== this.delayLoadState && (this.isReady() ? IB && IB() : (this.delayLoadState = 2, this._queueLoad(BB, IB)))
      }
      _queueLoad(BB, IB) {
        this.delayLoadingFile && (BB.addPendingData(this), (async () => {
          try {
            const ZB = await BB._loadDelayedFileAsync(this.delayLoadingFile, !1, !0);
            if (!this._delayLoadingFunction) return void BB.removePendingData(this);
            this._delayLoadingFunction(JSON.parse(ZB), this), this.delayLoadState = 1, this._delayInfo = [], BB.removePendingData(this);
            const TB = this._meshes,
              JB = TB.length;
            for (let BB = 0; BB < JB; BB++) this._applyToMesh(TB[BB]);
            IB && IB()
          } catch (ZB) {
            BB.removePendingData(this), BB.mC || hB.d.Error(`Unable to delay load geometry "${this.id}" from "${this.delayLoadingFile}": ${ZB}`)
          }
        })())
      }
      toLeftHanded() {
        const BB = this.MTB(!1);
        if (null != BB && BB.length > 0) {
          for (let IB = 0; IB < BB.length; IB += 3) {
            const ZB = BB[IB + 0];
            BB[IB + 0] = BB[IB + 2], BB[IB + 2] = ZB
          }
          this.setIndices(BB)
        }
        const IB = this.getVerticesData(GB.i.PositionKind, !1);
        if (null != IB && IB.length > 0) {
          for (let BB = 0; BB < IB.length; BB += 3) IB[BB + 2] = -IB[BB + 2];
          this.setVerticesData(GB.i.PositionKind, IB, !1)
        }
        const ZB = this.getVerticesData(GB.i.NormalKind, !1);
        if (null != ZB && ZB.length > 0) {
          for (let BB = 0; BB < ZB.length; BB += 3) ZB[BB + 2] = -ZB[BB + 2];
          this.setVerticesData(GB.i.NormalKind, ZB, !1)
        }
      }
      _resetPointsArrayCache() {
        this._positions = null
      }
      _generatePointsArray() {
        if (this._positions) return !0;
        const BB = this.getVerticesData(GB.i.PositionKind);
        if (!BB || 0 === BB.length) return !1;
        for (let IB = 3 * this._positionsCache.length, ZB = this._positionsCache.length; IB < BB.length; IB += 3, ++ZB) this._positionsCache[ZB] = TB.s.FromArray(BB, IB);
        for (let IB = 0, ZB = 0; IB < BB.length; IB += 3, ++ZB) this._positionsCache[ZB].set(BB[0 + IB], BB[1 + IB], BB[2 + IB]);
        return this._positionsCache.length = BB.length / 3, this._positions = this._positionsCache, !0
      }
      mC() {
        return this._isDisposed
      }
      _disposeVertexArrayObjects() {
        if (this._vertexArrayObjects) {
          for (const ZB in this._vertexArrayObjects) this._engine.releaseVertexArrayObject(this._vertexArrayObjects[ZB]);
          this._vertexArrayObjects = {};
          const BB = this._meshes,
            IB = BB.length;
          for (let ZB = 0; ZB < IB; ZB++) BB[ZB]._invalidateInstanceVertexArrayObject()
        }
      }
      dispose() {
        const BB = this._meshes,
          IB = BB.length;
        let ZB;
        for (ZB = 0; ZB < IB; ZB++) this.releaseForMesh(BB[ZB]);
        this._meshes.length = 0, this._disposeVertexArrayObjects();
        for (const TB in this._vertexBuffers) this._vertexBuffers[TB].dispose();
        if (this._vertexBuffers = {}, this._totalVertices = 0, this._indexBuffer && this._engine._releaseBuffer(this._indexBuffer), this._indexBuffer = null, this._indices = [], this.delayLoadState = 0, this.delayLoadingFile = null, this._delayLoadingFunction = null, this._delayInfo = [], this._boundingInfo = null, this._scene.removeGeometry(this), this._parentContainer) {
          const BB = this._parentContainer.geometries.indexOf(this);
          BB > -1 && this._parentContainer.geometries.splice(BB, 1), this._parentContainer = null
        }
        this._isDisposed = !0
      }
      copy(BB) {
        const IB = new yB(BB, this._scene),
          ZB = this.MTB(void 0, !0);
        ZB && IB.setIndices(ZB);
        let TB, JB = !1;
        for (TB in this._vertexBuffers) {
          const BB = this.getVertexBuffer(TB),
            ZB = BB.getData();
          if (!ZB) continue;
          const oB = BB.isUpdatable(),
            vB = BB.getSize(),
            {
              type: kB,
              byteOffset: cB,
              byteStride: nB,
              normalized: hB
            } = BB;
          JB = JB || oB;
          let zB = this._totalVertices;
          if (BB.getIsInstanced()) {
            let BB;
            BB = ZB instanceof Array ? 4 * ZB.length : ZB.byteLength, zB = BB / nB
          }
          const FB = (0, qB.s)(ZB, vB, kB, cB, nB, zB, !0),
            NB = new GB.i(this._engine, FB, TB, {
              updatable: oB,
              useBytes: !1,
              stride: vB,
              size: vB,
              offset: 0,
              type: kB,
              normalized: hB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            });
          IB.setVerticesBuffer(NB, zB)
        }
        for (TB in IB._updatable = JB, IB.delayLoadState = this.delayLoadState, IB.delayLoadingFile = this.delayLoadingFile, IB._delayLoadingFunction = this._delayLoadingFunction, this._delayInfo) IB._delayInfo = IB._delayInfo || [], IB._delayInfo.push(TB);
        return IB._boundingInfo = new cB.d(this._extend.minimum, this._extend.maximum), IB
      }
      serialize() {
        const BB = {};
        return BB.id = this.id, BB.uniqueId = this.uniqueId, BB.updatable = this._updatable, zB.b && zB.b.HasTags(this) && (BB.tags = zB.b.GetTags(this)), BB
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
        return this.isVerticesDataPresent(GB.i.PositionKind) && (BB.positions = this._toNumberArray(this.getVerticesData(GB.i.PositionKind)), this.isVertexBufferUpdatable(GB.i.PositionKind) && (BB.positionsUpdatable = !0)), this.isVerticesDataPresent(GB.i.NormalKind) && (BB.normals = this._toNumberArray(this.getVerticesData(GB.i.NormalKind)), this.isVertexBufferUpdatable(GB.i.NormalKind) && (BB.normalsUpdatable = !0)), this.isVerticesDataPresent(GB.i.TangentKind) && (BB.tangents = this._toNumberArray(this.getVerticesData(GB.i.TangentKind)), this.isVertexBufferUpdatable(GB.i.TangentKind) && (BB.tangentsUpdatable = !0)), this.isVerticesDataPresent(GB.i.UVKind) && (BB.uvs = this._toNumberArray(this.getVerticesData(GB.i.UVKind)), this.isVertexBufferUpdatable(GB.i.UVKind) && (BB.uvsUpdatable = !0)), this.isVerticesDataPresent(GB.i.UV2Kind) && (BB.uvs2 = this._toNumberArray(this.getVerticesData(GB.i.UV2Kind)), this.isVertexBufferUpdatable(GB.i.UV2Kind) && (BB.uvs2Updatable = !0)), this.isVerticesDataPresent(GB.i.UV3Kind) && (BB.uvs3 = this._toNumberArray(this.getVerticesData(GB.i.UV3Kind)), this.isVertexBufferUpdatable(GB.i.UV3Kind) && (BB.uvs3Updatable = !0)), this.isVerticesDataPresent(GB.i.UV4Kind) && (BB.uvs4 = this._toNumberArray(this.getVerticesData(GB.i.UV4Kind)), this.isVertexBufferUpdatable(GB.i.UV4Kind) && (BB.uvs4Updatable = !0)), this.isVerticesDataPresent(GB.i.UV5Kind) && (BB.uvs5 = this._toNumberArray(this.getVerticesData(GB.i.UV5Kind)), this.isVertexBufferUpdatable(GB.i.UV5Kind) && (BB.uvs5Updatable = !0)), this.isVerticesDataPresent(GB.i.UV6Kind) && (BB.uvs6 = this._toNumberArray(this.getVerticesData(GB.i.UV6Kind)), this.isVertexBufferUpdatable(GB.i.UV6Kind) && (BB.uvs6Updatable = !0)), this.isVerticesDataPresent(GB.i.ColorKind) && (BB.colors = this._toNumberArray(this.getVerticesData(GB.i.ColorKind)), this.isVertexBufferUpdatable(GB.i.ColorKind) && (BB.colorsUpdatable = !0)), this.isVerticesDataPresent(GB.i.MatricesIndicesKind) && (BB.matricesIndices = this._toNumberArray(this.getVerticesData(GB.i.MatricesIndicesKind)), BB.matricesIndicesExpanded = !0, this.isVertexBufferUpdatable(GB.i.MatricesIndicesKind) && (BB.matricesIndicesUpdatable = !0)), this.isVerticesDataPresent(GB.i.MatricesWeightsKind) && (BB.matricesWeights = this._toNumberArray(this.getVerticesData(GB.i.MatricesWeightsKind)), this.isVertexBufferUpdatable(GB.i.MatricesWeightsKind) && (BB.matricesWeightsUpdatable = !0)), BB.indices = this._toNumberArray(this.MTB()), BB
      }
      static ExtractFromMesh(BB, IB) {
        const ZB = BB._geometry;
        return ZB ? ZB.copy(IB) : null
      }
      static RandomId() {
        return nB.j.RandomId()
      }
      static _GetGeometryByLoadedUniqueId(BB, IB) {
        for (let ZB = 0; ZB < IB.geometries.length; ZB++)
          if (IB.geometries[ZB]._loadedUniqueId === BB) return IB.geometries[ZB];
        return null
      }
      static _ImportGeometry(BB, IB) {
        const ZB = IB.JR(),
          TB = BB.geometryUniqueId,
          oB = BB.geometryId;
        if (TB || oB) {
          const BB = TB ? this._GetGeometryByLoadedUniqueId(TB, ZB) : ZB.getGeometryById(oB);
          BB && BB.applyToMesh(IB)
        } else if (BB instanceof ArrayBuffer) {
          const ZB = IB._binaryInfo;
          if (ZB.positionsAttrDesc && ZB.positionsAttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.positionsAttrDesc.offset, ZB.positionsAttrDesc.count);
            IB.setVerticesData(GB.i.PositionKind, TB, !1)
          }
          if (ZB.normalsAttrDesc && ZB.normalsAttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.normalsAttrDesc.offset, ZB.normalsAttrDesc.count);
            IB.setVerticesData(GB.i.NormalKind, TB, !1)
          }
          if (ZB.tangetsAttrDesc && ZB.tangetsAttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.tangetsAttrDesc.offset, ZB.tangetsAttrDesc.count);
            IB.setVerticesData(GB.i.TangentKind, TB, !1)
          }
          if (ZB.uvsAttrDesc && ZB.uvsAttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.uvsAttrDesc.offset, ZB.uvsAttrDesc.count);
            if (gB.e)
              for (let BB = 1; BB < TB.length; BB += 2) TB[BB] = 1 - TB[BB];
            IB.setVerticesData(GB.i.UVKind, TB, !1)
          }
          if (ZB.uvs2AttrDesc && ZB.uvs2AttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.uvs2AttrDesc.offset, ZB.uvs2AttrDesc.count);
            if (gB.e)
              for (let BB = 1; BB < TB.length; BB += 2) TB[BB] = 1 - TB[BB];
            IB.setVerticesData(GB.i.UV2Kind, TB, !1)
          }
          if (ZB.uvs3AttrDesc && ZB.uvs3AttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.uvs3AttrDesc.offset, ZB.uvs3AttrDesc.count);
            if (gB.e)
              for (let BB = 1; BB < TB.length; BB += 2) TB[BB] = 1 - TB[BB];
            IB.setVerticesData(GB.i.UV3Kind, TB, !1)
          }
          if (ZB.uvs4AttrDesc && ZB.uvs4AttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.uvs4AttrDesc.offset, ZB.uvs4AttrDesc.count);
            if (gB.e)
              for (let BB = 1; BB < TB.length; BB += 2) TB[BB] = 1 - TB[BB];
            IB.setVerticesData(GB.i.UV4Kind, TB, !1)
          }
          if (ZB.uvs5AttrDesc && ZB.uvs5AttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.uvs5AttrDesc.offset, ZB.uvs5AttrDesc.count);
            if (gB.e)
              for (let BB = 1; BB < TB.length; BB += 2) TB[BB] = 1 - TB[BB];
            IB.setVerticesData(GB.i.UV5Kind, TB, !1)
          }
          if (ZB.uvs6AttrDesc && ZB.uvs6AttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.uvs6AttrDesc.offset, ZB.uvs6AttrDesc.count);
            if (gB.e)
              for (let BB = 1; BB < TB.length; BB += 2) TB[BB] = 1 - TB[BB];
            IB.setVerticesData(GB.i.UV6Kind, TB, !1)
          }
          if (ZB.colorsAttrDesc && ZB.colorsAttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.colorsAttrDesc.offset, ZB.colorsAttrDesc.count);
            IB.setVerticesData(GB.i.ColorKind, TB, !1, ZB.colorsAttrDesc.stride)
          }
          if (ZB.matricesIndicesAttrDesc && ZB.matricesIndicesAttrDesc.count > 0) {
            const TB = new Int32Array(BB, ZB.matricesIndicesAttrDesc.offset, ZB.matricesIndicesAttrDesc.count),
              JB = [];
            for (let BB = 0; BB < TB.length; BB++) {
              const IB = TB[BB];
              JB.push(255 & IB), JB.push((65280 & IB) >> 8), JB.push((16711680 & IB) >> 16), JB.push(IB >> 24 & 255)
            }
            IB.setVerticesData(GB.i.MatricesIndicesKind, JB, !1)
          }
          if (ZB.matricesIndicesExtraAttrDesc && ZB.matricesIndicesExtraAttrDesc.count > 0) {
            const TB = new Int32Array(BB, ZB.matricesIndicesExtraAttrDesc.offset, ZB.matricesIndicesExtraAttrDesc.count),
              JB = [];
            for (let BB = 0; BB < TB.length; BB++) {
              const IB = TB[BB];
              JB.push(255 & IB), JB.push((65280 & IB) >> 8), JB.push((16711680 & IB) >> 16), JB.push(IB >> 24 & 255)
            }
            IB.setVerticesData(GB.i.MatricesIndicesExtraKind, JB, !1)
          }
          if (ZB.matricesWeightsAttrDesc && ZB.matricesWeightsAttrDesc.count > 0) {
            const TB = new Float32Array(BB, ZB.matricesWeightsAttrDesc.offset, ZB.matricesWeightsAttrDesc.count);
            IB.setVerticesData(GB.i.MatricesWeightsKind, TB, !1)
          }
          if (ZB.indicesAttrDesc && ZB.indicesAttrDesc.count > 0) {
            const TB = new Int32Array(BB, ZB.indicesAttrDesc.offset, ZB.indicesAttrDesc.count);
            IB.setIndices(TB, null)
          }
          if (ZB.subMeshesAttrDesc && ZB.subMeshesAttrDesc.count > 0) {
            const TB = new Int32Array(BB, ZB.subMeshesAttrDesc.offset, 5 * ZB.subMeshesAttrDesc.count);
            IB.EW = [];
            for (let BB = 0; BB < ZB.subMeshesAttrDesc.count; BB++) {
              const ZB = TB[5 * BB + 0],
                JB = TB[5 * BB + 1],
                oB = TB[5 * BB + 2],
                GB = TB[5 * BB + 3],
                kB = TB[5 * BB + 4];
              vB.e.AddToMesh(ZB, JB, oB, GB, kB, IB)
            }
          }
        } else if (BB.positions && BB.normals && BB.indices) {
          if (IB.setVerticesData(GB.i.PositionKind, BB.positions, BB.positions._updatable || BB.positionsUpdatable), IB.setVerticesData(GB.i.NormalKind, BB.normals, BB.normals._updatable || BB.normalsUpdatable), BB.tangents && IB.setVerticesData(GB.i.TangentKind, BB.tangents, BB.tangents._updatable || BB.tangentsUpdatable), BB.uvs && IB.setVerticesData(GB.i.UVKind, BB.uvs, BB.uvs._updatable || BB.uvsUpdatable), BB.uvs2 && IB.setVerticesData(GB.i.UV2Kind, BB.uvs2, BB.uvs2._updatable || BB.uvs2Updatable), BB.uvs3 && IB.setVerticesData(GB.i.UV3Kind, BB.uvs3, BB.uvs3._updatable || BB.uvs3Updatable), BB.uvs4 && IB.setVerticesData(GB.i.UV4Kind, BB.uvs4, BB.uvs4._updatable || BB.uvs4Updatable), BB.uvs5 && IB.setVerticesData(GB.i.UV5Kind, BB.uvs5, BB.uvs5._updatable || BB.uvs5Updatable), BB.uvs6 && IB.setVerticesData(GB.i.UV6Kind, BB.uvs6, BB.uvs6._updatable || BB.uvs6Updatable), BB.colors && IB.setVerticesData(GB.i.ColorKind, JB.g.CheckColors4(BB.colors, BB.positions.length / 3), BB.colors._updatable), BB.matricesIndices)
            if (BB.matricesIndices._isExpanded || BB.matricesIndicesExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExpanded, IB.setVerticesData(GB.i.MatricesIndicesKind, BB.matricesIndices, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable);
            else {
              const ZB = [];
              for (let IB = 0; IB < BB.matricesIndices.length; IB++) {
                const TB = BB.matricesIndices[IB];
                ZB.push(255 & TB), ZB.push((65280 & TB) >> 8), ZB.push((16711680 & TB) >> 16), ZB.push(TB >> 24 & 255)
              }
              IB.setVerticesData(GB.i.MatricesIndicesKind, ZB, BB.matricesIndices._updatable || BB.matricesIndicesUpdatable)
            } if (BB.matricesIndicesExtra)
            if (BB.matricesIndicesExtraExpanded || BB.matricesIndicesExtra._isExpanded) delete BB.matricesIndices._isExpanded, delete BB.matricesIndicesExtraExpanded, IB.setVerticesData(GB.i.MatricesIndicesExtraKind, BB.matricesIndicesExtra, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable);
            else {
              const ZB = [];
              for (let IB = 0; IB < BB.matricesIndicesExtra.length; IB++) {
                const TB = BB.matricesIndicesExtra[IB];
                ZB.push(255 & TB), ZB.push((65280 & TB) >> 8), ZB.push((16711680 & TB) >> 16), ZB.push(TB >> 24 & 255)
              }
              IB.setVerticesData(GB.i.MatricesIndicesExtraKind, ZB, BB.matricesIndicesExtra._updatable || BB.matricesIndicesExtraUpdatable)
            } BB.matricesWeights && (yB._CleanMatricesWeights(BB, IB), IB.setVerticesData(GB.i.MatricesWeightsKind, BB.matricesWeights, BB.matricesWeights._updatable)), BB.matricesWeightsExtra && IB.setVerticesData(GB.i.MatricesWeightsExtraKind, BB.matricesWeightsExtra, BB.matricesWeights._updatable), IB.setIndices(BB.indices, null)
        }
        if (BB.EW) {
          IB.EW = [];
          for (let ZB = 0; ZB < BB.EW.length; ZB++) {
            const TB = BB.EW[ZB];
            vB.e.AddToMesh(TB.materialIndex, TB.verticesStart, TB.verticesCount, TB.indexStart, TB.indexCount, IB)
          }
        }
        IB._shouldGenerateFlatShading && (IB.convertToFlatShadedMesh(), IB._shouldGenerateFlatShading = !1), IB.computeWorldMatrix(!0), ZB.onMeshImportedObservable.notifyObservers(IB)
      }
      static _CleanMatricesWeights(BB, IB) {
        const ZB = .001;
        if (!kB.b.CleanBoneMatrixWeights) return;
        let TB;
        if (!(BB.skeletonId > -1)) return;
        {
          const ZB = IB.JR().getLastSkeletonById(BB.skeletonId);
          if (!ZB) return;
          TB = ZB.bones.length
        }
        const JB = IB.getVerticesData(GB.i.MatricesIndicesKind),
          oB = IB.getVerticesData(GB.i.MatricesIndicesExtraKind),
          vB = BB.matricesWeights,
          cB = BB.matricesWeightsExtra,
          nB = BB.numBoneInfluencer,
          hB = vB.length;
        for (let GB = 0; GB < hB; GB += 4) {
          let BB = 0,
            IB = -1;
          for (let TB = 0; TB < 4; TB++) {
            const JB = vB[GB + TB];
            BB += JB, JB < ZB && IB < 0 && (IB = TB)
          }
          if (cB)
            for (let TB = 0; TB < 4; TB++) {
              const JB = cB[GB + TB];
              BB += JB, JB < ZB && IB < 0 && (IB = TB + 4)
            }
          if ((IB < 0 || IB > nB - 1) && (IB = nB - 1), BB > ZB) {
            const IB = 1 / BB;
            for (let BB = 0; BB < 4; BB++) vB[GB + BB] *= IB;
            if (cB)
              for (let BB = 0; BB < 4; BB++) cB[GB + BB] *= IB
          } else IB >= 4 ? (cB[GB + IB - 4] = 1 - BB, oB[GB + IB - 4] = TB) : (vB[GB + IB] = 1 - BB, JB[GB + IB] = TB)
        }
        IB.setVerticesData(GB.i.MatricesIndicesKind, JB), BB.matricesWeightsExtra && IB.setVerticesData(GB.i.MatricesIndicesExtraKind, oB)
      }
      static Parse(BB, IB, ZB) {
        const JB = new yB(BB.id, IB, void 0, BB.updatable);
        return JB._loadedUniqueId = BB.uniqueId, zB.b && zB.b.AddTagsTo(JB, BB.tags), BB.delayLoadingFile ? (JB.delayLoadState = 4, JB.delayLoadingFile = ZB + BB.delayLoadingFile, JB._boundingInfo = new cB.d(TB.s.FromArray(BB.boundingBoxMinimum), TB.s.FromArray(BB.boundingBoxMaximum)), JB._delayInfo = [], BB.hasUVs && JB._delayInfo.push(GB.i.UVKind), BB.hasUVs2 && JB._delayInfo.push(GB.i.UV2Kind), BB.hasUVs3 && JB._delayInfo.push(GB.i.UV3Kind), BB.hasUVs4 && JB._delayInfo.push(GB.i.UV4Kind), BB.hasUVs5 && JB._delayInfo.push(GB.i.UV5Kind), BB.hasUVs6 && JB._delayInfo.push(GB.i.UV6Kind), BB.hasColors && JB._delayInfo.push(GB.i.ColorKind), BB.hasMatricesIndices && JB._delayInfo.push(GB.i.MatricesIndicesKind), BB.hasMatricesWeights && JB._delayInfo.push(GB.i.MatricesWeightsKind), JB._delayLoadingFunction = oB.c.ImportVertexData) : oB.c.ImportVertexData(BB, JB), IB.pushGeometry(JB, !0), JB
      }
    }
  },
  40510: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => hB,
      f: () => NB
    });
    var TB = ZB(37120),
      JB = ZB(38718),
      oB = ZB(40488),
      GB = ZB(40448),
      vB = ZB(38714),
      kB = ZB(40492),
      cB = ZB(40188),
      nB = ZB(37170);
    class hB extends oB.b {
      constructor(BB, IB) {
        super(BB, IB.JR()), this._indexInSourceMeshInstanceArray = -1, this._distanceToCamera = 0, IB.K3(this), this._sourceMesh = IB, this._unIndexed = IB._unIndexed, this.position.TY(IB.position), this.rotation.TY(IB.rotation), this.ek.TY(IB.ek), IB.rotationQuaternion && (this.rotationQuaternion = IB.rotationQuaternion.clone()), this.animations = IB.animations.slice();
        for (const ZB of IB.getAnimationRanges()) null != ZB && this.createAnimationRange(ZB.name, ZB.from, ZB.to);
        if (this.infiniteDistance = IB.infiniteDistance, this.setPivotMatrix(IB.getPivotMatrix()), IB.skeleton || IB.morphTargetManager || !IB.hasBoundingInfo) this.refreshBoundingInfo(!0, !0);
        else {
          const BB = IB.qm();
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
        this._sourceMesh?.receiveShadows !== BB && JB.d.Warn("Setting receiveShadows on an instanced mesh has no effect")
      }
      get material() {
        return this._sourceMesh.material
      }
      set material(BB) {
        this._sourceMesh?.material !== BB && JB.d.Warn("Setting material on an instanced mesh has no effect")
      }
      get visibility() {
        return this._sourceMesh.visibility
      }
      set visibility(BB) {
        this._sourceMesh?.visibility !== BB && JB.d.Warn("Setting visibility on an instanced mesh has no effect")
      }
      get skeleton() {
        return this._sourceMesh.skeleton
      }
      set skeleton(BB) {
        this._sourceMesh?.skeleton !== BB && JB.d.Warn("Setting skeleton on an instanced mesh has no effect")
      }
      get renderingGroupId() {
        return this._sourceMesh.renderingGroupId
      }
      set renderingGroupId(BB) {
        this._sourceMesh && BB !== this._sourceMesh.renderingGroupId && JB.d.Warn("Note - setting renderingGroupId of an instanced mesh has no effect on the scene")
      }
      get meshBlendingTag() {
        return this._sourceMesh.meshBlendingTag
      }
      set meshBlendingTag(BB) {
        this._sourceMesh && BB !== this._sourceMesh.meshBlendingTag && JB.d.Warn("Setting meshBlendingTag on an instanced mesh has no effect")
      }
      getTotalVertices() {
        return this._sourceMesh ? this._sourceMesh.getTotalVertices() : 0
      }
      getTotalIndices() {
        return this._sourceMesh.getTotalIndices()
      }
      get wJB() {
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
      getVerticesData(BB, IB, ZB) {
        return this._sourceMesh.getVerticesData(BB, IB, ZB)
      }
      copyVerticesData(BB, IB) {
        this._sourceMesh.copyVerticesData(BB, IB)
      }
      getVertexBuffer(BB, IB) {
        return this._sourceMesh.getVertexBuffer(BB, IB)
      }
      setVerticesData(BB, IB, ZB, TB) {
        return this.wJB && this.wJB.setVerticesData(BB, IB, ZB, TB), this.wJB
      }
      updateVerticesData(BB, IB, ZB, TB) {
        return this.wJB && this.wJB.updateVerticesData(BB, IB, ZB, TB), this.wJB
      }
      setIndices(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return this.wJB && this.wJB.setIndices(BB, IB), this.wJB
      }
      isVerticesDataPresent(BB) {
        return this._sourceMesh.isVerticesDataPresent(BB)
      }
      MTB() {
        return this._sourceMesh.MTB()
      }
      get _positions() {
        return this._sourceMesh._positions
      }
      refreshBoundingInfo() {
        let BB, IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ZB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.qm().isLocked) return this;
        BB = "object" === typeof IB ? IB : {
          applySkeleton: IB,
          applyMorph: ZB
        };
        const TB = this._sourceMesh.geometry ? this._sourceMesh.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._sourceMesh._getData(BB, null, cB.i.PositionKind), TB), this
      }
      _preActivate() {
        return this._currentLOD && this._currentLOD._preActivate(), this
      }
      _activate(BB, IB) {
        if (super._activate(BB, IB), this._sourceMesh.EW || JB.d.Warn("Instances should only be created for meshes with geometry."), this._currentLOD) {
          if (this._currentLOD._getWorldMatrixDeterminant() >= 0 !== this._getWorldMatrixDeterminant() >= 0) return this._internalAbstractMeshDataInfo._actAsRegularMesh = !0, !0;
          if (this._internalAbstractMeshDataInfo._actAsRegularMesh = !1, this._currentLOD._registerInstanceForRenderId(this, BB), IB) {
            if (!this._currentLOD._internalAbstractMeshDataInfo._isActiveIntermediate) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstancesIntermediate = !0, !0
          } else if (!this._currentLOD._internalAbstractMeshDataInfo._isActive) return this._currentLOD._internalAbstractMeshDataInfo._onlyForInstances = !0, !0
        }
        return !1
      }
      _postActivate() {
        this._sourceMesh.edgesShareWithInstances && this._sourceMesh._edgesRenderer && this._sourceMesh._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup ? (this._sourceMesh._renderingGroup._edgesRenderers.pushNoDuplicate(this._sourceMesh._edgesRenderer), this._sourceMesh._edgesRenderer.customInstances.push(this.getWorldMatrix())) : this._edgesRenderer && this._edgesRenderer.isEnabled && this._sourceMesh._renderingGroup && this._sourceMesh._renderingGroup._edgesRenderers.push(this._edgesRenderer)
      }
      getWorldMatrix() {
        if (this._currentLOD && this._currentLOD !== this._sourceMesh && this._currentLOD.billboardMode !== kB.g.BILLBOARDMODE_NONE && this._currentLOD._masterMesh !== this) {
          this._billboardWorldMatrix || (this._billboardWorldMatrix = new TB.b);
          const BB = this._currentLOD._masterMesh;
          return this._currentLOD._masterMesh = this, TB.m.rN[7].TY(this._currentLOD.position), this._currentLOD.position.set(0, 0, 0), this._billboardWorldMatrix.TY(this._currentLOD.computeWorldMatrix(!0)), this._currentLOD.position.TY(TB.m.rN[7]), this._currentLOD._masterMesh = BB, this._billboardWorldMatrix
        }
        return super.getWorldMatrix()
      }
      get vR() {
        return !0
      }
      getLOD(BB) {
        if (!BB) return this;
        const IB = this.wJB.getLODLevels();
        if (IB && 0 !== IB.length) {
          const IB = this.qm();
          this._currentLOD = this.wJB.getLOD(BB, IB.ZJB)
        } else this._currentLOD = this.wJB;
        return this._currentLOD
      }
      _preActivateForIntermediateRendering(BB) {
        return this.wJB._preActivateForIntermediateRendering(BB)
      }
      _syncSubMeshes() {
        if (this.releaseSubMeshes(), this._sourceMesh.EW)
          for (let BB = 0; BB < this._sourceMesh.EW.length; BB++) this._sourceMesh.EW[BB].clone(this, this._sourceMesh);
        return this
      }
      _generatePointsArray() {
        return this._sourceMesh._generatePointsArray()
      }
      _updateBoundingInfo() {
        return this.hasBoundingInfo ? this.qm().update(this.worldMatrixFromCache) : this.buildBoundingInfo(this.absolutePosition, this.absolutePosition, this.worldMatrixFromCache), this._updateSubMeshesBoundingInfo(this.worldMatrixFromCache), this
      }
      clone(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = ((arguments.length > 3 ? arguments[3] : void 0) || this._sourceMesh).createInstance(BB);
        if (vB.b.DeepCopy(this, TB, ["name", "EW", "uniqueId", "parent", "lightSources", "receiveShadows", "material", "visibility", "skeleton", "wJB", "vR", "facetNb", "isFacetDataEnabled", "isBlocked", "useBones", "sJB", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "hvB", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "hasBoundingInfo", "geometry"], []), IB && (TB.parent = IB), !ZB)
          for (let JB = 0; JB < this.JR().meshes.length; JB++) {
            const BB = this.JR().meshes[JB];
            BB.parent === this && BB.clone(BB.name, TB)
          }
        return TB.computeWorldMatrix(!0), this.onClonedObservable.notifyObservers(TB), TB
      }
      dispose(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this._sourceMesh.Z6(this), super.dispose(BB, IB)
      }
      _serializeAsParent(BB) {
        super._serializeAsParent(BB), BB.parentId = this._sourceMesh.uniqueId, BB.parentInstanceIndex = this._indexInSourceMeshInstanceArray
      }
      instantiateHierarchy() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0, IB && IB.newSourcedMesh);
        TB && ZB && ZB(this, TB);
        for (const JB of this.getChildTransformNodes(!0)) JB.instantiateHierarchy(TB, IB, ZB);
        return TB
      }
    }
    let zB = !1;

    function FB(BB, IB, ZB, TB, JB) {
      for (let oB = 0; oB < IB.length; oB++) {
        const GB = BB[IB[oB]] ?? 0,
          vB = JB + ZB[oB];
        GB.toArray ? GB.toArray(TB, vB) : GB.copyToArray ? GB.copyToArray(TB, vB) : TB[vB] = GB
      }
    }

    function NB() {
      zB || (zB = !0, GB.c._instancedMeshFactory = (BB, IB) => {
        const ZB = new hB(BB, IB);
        if (IB.Zm) {
          ZB.Zm = {};
          for (const BB in IB.Zm) ZB.Zm[BB] = IB.Zm[BB]
        }
        return ZB
      }, GB.c.prototype.Im = function(BB, IB) {
        if (!this.Zm) {
          this.Zm = {};
          for (const BB of this.instances) BB.Zm = {}
        }
        this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
          data: {},
          vertexBuffers: {},
          strides: {},
          sizes: {},
          vertexArrayObjects: this.PN().getCaps().vertexArrayObject ? {} : void 0
        }), this.Zm[BB] = null, this._userInstancedBuffersStorage.strides[BB] = IB;
        const ZB = this._userInstancedBuffersStorage;
        ZB.interleavedKinds = [], ZB.interleavedOffsets = [], ZB.interleavedRowStride = 0;
        for (const TB in ZB.strides) ZB.interleavedKinds.push(TB), ZB.interleavedOffsets.push(ZB.interleavedRowStride), ZB.interleavedRowStride += ZB.strides[TB];
        ZB.interleavedData = new Float32Array(32 * ZB.interleavedRowStride);
        for (const TB in ZB.interleavedBuffers) ZB.interleavedBuffers[TB].buffer.dispose();
        ZB.interleavedBuffers = {}, ZB.vertexBuffers[BB] = null;
        for (const TB of this.instances) TB.Zm[BB] = null;
        this._invalidateInstanceVertexArrayObject(), this._markSubMeshesAsAttributesDirty()
      }, GB.c.prototype._processInstancedBuffers = function(BB, IB) {
        const ZB = this._userInstancedBuffersStorage,
          TB = ZB.interleavedRowStride;
        if (!TB) return;
        const JB = BB ? BB.length : 0,
          oB = (JB + 1) * TB;
        let GB = ZB.interleavedData;
        if (GB.length < oB) {
          let BB = GB.length;
          for (; BB < oB;) BB *= 2;
          GB = ZB.interleavedData = new Float32Array(BB)
        }
        const vB = ZB.interleavedKinds,
          kB = ZB.interleavedOffsets;
        let nB = 0;
        IB && (FB(this.Zm, vB, kB, GB, nB), nB += TB);
        for (let cB = 0; cB < JB; cB++) FB(BB[cB].Zm, vB, kB, GB, nB), nB += TB;
        let hB = "shared",
          zB = ZB.vertexBuffers;
        this._instanceDataStorage.useMonoDataStorageRenderPass || (hB = this._instanceDataStorage.engine.currentRenderPassId, ZB.renderPasses || (ZB.renderPasses = {}), ZB.renderPasses[hB] || (ZB.renderPasses[hB] = {}), zB = ZB.renderPasses[hB]);
        const NB = ZB.interleavedBuffers[hB];
        let gB = !NB || NB.data !== GB;
        for (let cB = 0; !gB && cB < vB.length; cB++) gB = !zB[vB[cB]];
        if (!gB) return void NB.buffer.updateDirectly(GB, 0);
        NB?.buffer.dispose();
        const qB = new cB.e(this.PN(), GB, !0, TB, !1, !0);
        for (let cB = 0; cB < vB.length; cB++) {
          const BB = vB[cB],
            IB = qB.createVertexBuffer(BB, kB[cB], ZB.strides[BB]);
          IB.hashCode += IB.byteOffset * 2 ** 24, zB[BB] = IB
        }
        ZB.interleavedBuffers[hB] = {
          buffer: qB,
          data: GB
        }, this._invalidateInstanceVertexArrayObject()
      }, GB.c.prototype._invalidateInstanceVertexArrayObject = function() {
        if (this._userInstancedBuffersStorage && void 0 !== this._userInstancedBuffersStorage.vertexArrayObjects) {
          for (const BB in this._userInstancedBuffersStorage.vertexArrayObjects) this.PN().releaseVertexArrayObject(this._userInstancedBuffersStorage.vertexArrayObjects[BB]);
          this._userInstancedBuffersStorage.vertexArrayObjects = {}
        }
      }, GB.c.prototype._disposeInstanceSpecificData = function() {
        for (const IB in this._instanceDataStorage.renderPasses) this._instanceDataStorage.renderPasses[IB].instancesBuffer?.dispose();
        for (this._instanceDataStorage.renderPasses = {}, this._instanceDataStorage.dataStorageRenderPass?.instancesBuffer?.dispose(); this.instances.length;) this.instances[0].dispose();
        for (const IB in this.Zm) this._userInstancedBuffersStorage.vertexBuffers[IB] && this._userInstancedBuffersStorage.vertexBuffers[IB].dispose();
        const BB = this._userInstancedBuffersStorage?.interleavedBuffers;
        if (BB) {
          for (const IB in BB) BB[IB].buffer.dispose();
          this._userInstancedBuffersStorage.interleavedBuffers = {}
        }
        this._invalidateInstanceVertexArrayObject(), this.Zm = {}
      }, (0, nB.i)("BABYLON.InstancedMesh", hB))
    }
  },
  40448: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => KB,
      e: () => SB,
      f: () => lB
    });
    var TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB = ZB(37153),
      UB = ZB(40152),
      WB = ZB(40110),
      dB = ZB(38714),
      CB = ZB(40092),
      QB = ZB(40454),
      sB = ZB(40269),
      wB = ZB(37120),
      OB = ZB(37311),
      YB = ZB(40272),
      iB = ZB(40188),
      pB = ZB(40463),
      aB = ZB(40469),
      HB = ZB(40488),
      MB = ZB(40341),
      jB = ZB(40339),
      PB = ZB(40431),
      RB = ZB(40498),
      rB = ZB(40473),
      mB = ZB(40085),
      XB = ZB(38718),
      LB = ZB(37170),
      eB = ZB(39931),
      uB = ZB(40215);
    class fB {
      constructor(BB, IB) {
        this.distanceOrScreenCoverage = BB, this.mesh = IB
      }
    }
    class lB {}
    class AB {
      constructor() {
        this.batchCache = new bB(this), this.batchCacheReplacementModeInFrozenMode = new bB(this), this.instancesBufferSize = 2048
      }
    }
    class tB {
      constructor() {
        this.renderPasses = {}
      }
    }
    class bB {
      constructor(BB) {
        this.parent = BB, this.mustReturn = !1, this.visibleInstances = new Array, this.renderSelf = [], this.hardwareInstancedRendering = []
      }
    }
    class xB {
      constructor() {
        this.instancesCount = 0, this.matrixBuffer = null, this.previousMatrixBuffer = null, this.matrixBufferSize = 512, this.matrixData = null, this.boundingVectors = [], this.worldMatrices = null
      }
    }
    class EB {
      constructor() {
        this._areNormalsFrozen = !1, this._source = null, this.meshMap = null, this._preActivateId = -1, this._LODLevels = new Array, this._useLODScreenCoverage = !1, this._effectiveMaterial = null, this._forcedInstanceCount = 0, this._overrideRenderingFillMode = null
      }
    }
    const DB = {
      source: null,
      parent: null,
      doNotCloneChildren: !1,
      clonePhysicsImpostor: !0,
      cloneThinInstances: !1
    };
    class KB extends HB.b {
      static _GetDefaultSideOrientation(BB) {
        return BB || KB.FRONTSIDE
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
        this._internalAbstractMeshDataInfo._computeBonesUsingShaders !== BB && (BB && this._internalMeshDataInfo._sourcePositions && (this.setVerticesData(iB.i.PositionKind, this._internalMeshDataInfo._sourcePositions, !0), this._internalMeshDataInfo._sourceNormals && this.setVerticesData(iB.i.NormalKind, this._internalMeshDataInfo._sourceNormals, !0), this._internalMeshDataInfo._sourcePositions = null, this._internalMeshDataInfo._sourceNormals = null), this._internalAbstractMeshDataInfo._computeBonesUsingShaders = BB, this._markSubMeshesAsAttributesDirty())
      }
      get onBeforeRenderObservable() {
        return this._internalMeshDataInfo._onBeforeRenderObservable || (this._internalMeshDataInfo._onBeforeRenderObservable = new yB.b), this._internalMeshDataInfo._onBeforeRenderObservable
      }
      get onBeforeBindObservable() {
        return this._internalMeshDataInfo._onBeforeBindObservable || (this._internalMeshDataInfo._onBeforeBindObservable = new yB.b), this._internalMeshDataInfo._onBeforeBindObservable
      }
      get onAfterRenderObservable() {
        return this._internalMeshDataInfo._onAfterRenderObservable || (this._internalMeshDataInfo._onAfterRenderObservable = new yB.b), this._internalMeshDataInfo._onAfterRenderObservable
      }
      get onBetweenPassObservable() {
        return this._internalMeshDataInfo._onBetweenPassObservable || (this._internalMeshDataInfo._onBetweenPassObservable = new yB.b), this._internalMeshDataInfo._onBetweenPassObservable
      }
      get onBeforeDrawObservable() {
        return this._internalMeshDataInfo._onBeforeDrawObservable || (this._internalMeshDataInfo._onBeforeDrawObservable = new yB.b), this._internalMeshDataInfo._onBeforeDrawObservable
      }
      set onBeforeDraw(BB) {
        this._onBeforeDrawObserver && this.onBeforeDrawObservable.remove(this._onBeforeDrawObserver), this._onBeforeDrawObserver = this.onBeforeDrawObservable.add(BB)
      }
      get sJB() {
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
      _copySource(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const JB = this.JR();
        if (BB._geometry && BB._geometry.applyToMesh(this), dB.b.DeepCopy(BB, this, ["name", "material", "skeleton", "instances", "parent", "uniqueId", "source", "metadata", "morphTargetManager", "sJB", "worldMatrixInstancedBuffer", "previousWorldMatrixInstancedBuffer", "hasLODLevels", "geometry", "isBlocked", "areNormalsFrozen", "facetNb", "isFacetDataEnabled", "lightSources", "useBones", "vR", "collider", "edgesRenderer", "forward", "up", "right", "absolutePosition", "absoluteScaling", "absoluteRotationQuaternion", "hvB", "nonUniformScaling", "behaviors", "worldMatrixFromCache", "hasThinInstances", "cloneMeshMap", "hasBoundingInfo", "physicsBody", "physicsImpostor"], ["_poseMatrix"]), this._internalMeshDataInfo._source = BB, JB.useClonedMeshMap && (BB._internalMeshDataInfo.meshMap || (BB._internalMeshDataInfo.meshMap = {}), BB._internalMeshDataInfo.meshMap[this.uniqueId] = this), this._originalBuilderSideOrientation = BB._originalBuilderSideOrientation, this._creationDataStorage = BB._creationDataStorage, BB._ranges) {
          const IB = BB._ranges;
          for (const BB in IB) Object.prototype.hasOwnProperty.call(IB, BB) && IB[BB] && this.createAnimationRange(BB, IB[BB].from, IB[BB].to)
        }
        if (BB.metadata && BB.metadata.clone ? this.metadata = BB.metadata.clone() : this.metadata = BB.metadata, this._internalMetadata = BB._internalMetadata, this.meshBlendingTag = BB.meshBlendingTag, CB.b && CB.b.HasTags(BB) && CB.b.AddTagsTo(this, CB.b.GetTags(BB, !0)), this.qY(BB.isEnabled(!1)), this.parent = BB.parent, this.setPivotMatrix(BB.getPivotMatrix(), this._postMultiplyPivotMatrix), this.id = this.name + "." + BB.id, this.material = BB.material, !IB) {
          const JB = BB.getDescendants(!0);
          for (let BB = 0; BB < JB.length; BB++) {
            const oB = JB[BB];
            oB._isMesh ? (DB.parent = this, DB.doNotCloneChildren = IB, DB.clonePhysicsImpostor = ZB, DB.cloneThinInstances = TB, oB.clone(this.name + "." + oB.name, DB)) : oB.clone && oB.clone(this.name + "." + oB.name, this)
          }
        }
        if (BB.morphTargetManager && (this.morphTargetManager = BB.morphTargetManager), (0, eB.c)(JB.getPhysicsEngine)) {
          const IB = JB.getPhysicsEngine();
          if (ZB && IB)
            if (1 === IB.getPluginVersion()) {
              const ZB = IB.getImpostorForPhysicsObject(BB);
              ZB && (this.physicsImpostor = ZB.clone(this))
            } else 2 === IB.getPluginVersion() && BB.physicsBody && BB.physicsBody.clone(this)
        }
        for (let oB = 0; oB < JB.DW.length; oB++) {
          const IB = JB.DW[oB];
          IB.emitter === BB && IB.clone(IB.name, this)
        }
        if (this.skeleton = BB.skeleton, TB && (BB._thinInstanceDataStorage.matrixData ? (this.ZBB("matrix", new Float32Array(BB._thinInstanceDataStorage.matrixData), 16, !BB._thinInstanceDataStorage.matrixBuffer.isUpdatable()), this._thinInstanceDataStorage.matrixBufferSize = BB._thinInstanceDataStorage.matrixBufferSize, this._thinInstanceDataStorage.instancesCount = BB._thinInstanceDataStorage.instancesCount) : this._thinInstanceDataStorage.matrixBufferSize = BB._thinInstanceDataStorage.matrixBufferSize, BB._userThinInstanceBuffersStorage)) {
          const IB = BB._userThinInstanceBuffersStorage;
          for (const BB in IB.data) this.ZBB(BB, new Float32Array(IB.data[BB]), IB.strides[BB], !IB.vertexBuffers?.[BB]?.isUpdatable()), this._userThinInstanceBuffersStorage.sizes[BB] = IB.sizes[BB]
        }
        this.refreshBoundingInfo(!0, !0), this.computeWorldMatrix(!0)
      }
      constructor(BB) {
        let IB, ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          oB = arguments.length > 4 ? arguments[4] : void 0,
          GB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        super(BB, ZB), this._internalMeshDataInfo = new EB, this.delayLoadState = 0, this.instances = [], this._creationDataStorage = null, this._geometry = null, this._thinInstanceDataStorage = new xB, this._shouldGenerateFlatShading = !1, this._originalBuilderSideOrientation = KB.DEFAULTSIDE, this.ignoreCameraMaxZ = !1, ZB = this.JR(), this._instanceDataStorage = new tB, this._instanceDataStorage.engine = ZB.PN(), this._instanceDataStorage.useMonoDataStorageRenderPass = !this._instanceDataStorage.engine.isWebGPU, this._instanceDataStorage.useMonoDataStorageRenderPass && (this._instanceDataStorage.dataStorageRenderPass = new AB), this._scene.useRightHandedSystem ? this.sideOrientation = 0 : this.sideOrientation = 1, this._onBeforeDraw = (BB, IB, ZB) => {
          BB && ZB && (this._uniformBuffer ? this.transferToEffect(IB) : ZB.bindOnlyWorldMatrix(IB))
        };
        let vB = !1;
        if (TB && void 0 === TB._addToSceneRootNodes) {
          const BB = TB;
          IB = BB.parent ?? null, JB = BB.source ?? null, oB = BB.doNotCloneChildren ?? !1, GB = BB.clonePhysicsImpostor ?? !0, vB = BB.cloneThinInstances ?? !1
        } else IB = TB;
        JB && this._copySource(JB, oB, GB, vB), null !== IB && (this.parent = IB), this._instanceDataStorage.hardwareInstancedRendering = this.PN().getCaps().instancedArrays, this._internalMeshDataInfo._onMeshReadyObserverAdded = BB => {
          BB.unregisterOnNextCall = !0, this.isReady(!0) ? this.onMeshReadyObservable.notifyObservers(this) : this._internalMeshDataInfo._checkReadinessObserver || (this._internalMeshDataInfo._checkReadinessObserver = this._scene.onBeforeRenderObservable.add((() => {
            this.isReady(!0) && (this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), this._internalMeshDataInfo._checkReadinessObserver = null, this.onMeshReadyObservable.notifyObservers(this))
          })))
        }, this.onMeshReadyObservable = new yB.b(this._internalMeshDataInfo._onMeshReadyObserverAdded), JB && JB.onClonedObservable.notifyObservers(this)
      }
      instantiateHierarchy() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const TB = 0 === this.getTotalVertices() || IB && IB.doNotInstantiate && (!0 === IB.doNotInstantiate || IB.doNotInstantiate(this)) ? this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0) : this.createInstance("instance of " + (this.name || this.id));
        TB.parent = BB || this.parent, TB.position = this.position.clone(), TB.ek = this.ek.clone(), this.rotationQuaternion ? TB.rotationQuaternion = this.rotationQuaternion.clone() : TB.rotation = this.rotation.clone(), ZB && ZB(this, TB);
        for (const JB of this.getChildTransformNodes(!0)) "InstancedMesh" === JB.getClassName() && "Mesh" === TB.getClassName() && JB.wJB === this ? JB.instantiateHierarchy(TB, {
          doNotInstantiate: IB && IB.doNotInstantiate || !1,
          newSourcedMesh: TB
        }, ZB) : JB.instantiateHierarchy(TB, IB, ZB);
        return TB
      }
      getClassName() {
        return "Mesh"
      }
      get _isMesh() {
        return !0
      }
      toString(BB) {
        let IB = super.toString(BB);
        if (IB += ", n vertices: " + this.getTotalVertices(), IB += ", parent: " + (this._waitingParentId ? this._waitingParentId : this.parent ? this.parent.name : "NONE"), this.animations)
          for (let ZB = 0; ZB < this.animations.length; ZB++) IB += ", animation[0]: " + this.animations[ZB].toString(BB);
        if (BB)
          if (this._geometry) {
            const BB = this.MTB(),
              ZB = this.getVerticesData(iB.i.PositionKind);
            ZB && BB && (IB += ", flat shading: " + (ZB.length / 3 === BB.length ? "YES" : "NO"))
          } else IB += ", flat shading: UNKNOWN";
        return IB
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
        this._internalMeshDataInfo._LODLevels.sort(((IB, ZB) => IB.distanceOrScreenCoverage < ZB.distanceOrScreenCoverage ? BB : IB.distanceOrScreenCoverage > ZB.distanceOrScreenCoverage ? -BB : 0))
      }
      addLODLevel(BB, IB) {
        if (IB && IB._masterMesh) return XB.d.Warn("You cannot use a mesh as LOD level twice"), this;
        const ZB = new fB(BB, IB);
        return this._internalMeshDataInfo._LODLevels.push(ZB), IB && (IB._masterMesh = this), this._sortLODLevels(), this
      }
      getLODLevelAtDistance(BB) {
        const IB = this._internalMeshDataInfo;
        for (let ZB = 0; ZB < IB._LODLevels.length; ZB++) {
          const TB = IB._LODLevels[ZB];
          if (TB.distanceOrScreenCoverage === BB) return TB.mesh
        }
        return null
      }
      removeLODLevel(BB) {
        const IB = this._internalMeshDataInfo;
        for (let ZB = 0; ZB < IB._LODLevels.length; ZB++) IB._LODLevels[ZB].mesh === BB && (IB._LODLevels.splice(ZB, 1), BB && (BB._masterMesh = null));
        return this._sortLODLevels(), this
      }
      getLOD(BB, IB) {
        const ZB = this._internalMeshDataInfo;
        if (!ZB._LODLevels || 0 === ZB._LODLevels.length) return this;
        const TB = IB || this.qm().ZJB,
          JB = BB.mode === sB.c.ORTHOGRAPHIC_CAMERA ? BB.minZ : TB.centerWorld.subtract(BB.globalPosition).length();
        let oB = JB,
          GB = 1;
        if (ZB._useLODScreenCoverage) {
          const IB = BB.screenArea;
          let ZB = TB.radiusWorld * BB.minZ / JB;
          ZB = ZB * ZB * Math.PI, oB = ZB / IB, GB = -1
        }
        if (GB * ZB._LODLevels[ZB._LODLevels.length - 1].distanceOrScreenCoverage > GB * oB) return this.onLODLevelSelection && this.onLODLevelSelection(oB, this, this), this;
        for (let vB = 0; vB < ZB._LODLevels.length; vB++) {
          const BB = ZB._LODLevels[vB];
          if (GB * BB.distanceOrScreenCoverage < GB * oB) {
            if (BB.mesh) {
              if (4 === BB.mesh.delayLoadState) return BB.mesh._checkDelayState(), this;
              if (2 === BB.mesh.delayLoadState) return this;
              BB.mesh._preActivate(), BB.mesh._updateSubMeshesBoundingInfo(this.worldMatrixFromCache)
            }
            return this.onLODLevelSelection && this.onLODLevelSelection(oB, this, BB.mesh), BB.mesh
          }
        }
        return this.onLODLevelSelection && this.onLODLevelSelection(oB, this, this), this
      }
      get geometry() {
        return this._geometry
      }
      getTotalVertices() {
        return null === this._geometry || void 0 === this._geometry ? 0 : this._geometry.getTotalVertices()
      }
      getVerticesData(BB, IB, ZB, TB) {
        if (!this._geometry) return null;
        let JB = TB ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[BB]?.getFloatData(this.instances.length + 1, ZB || IB && 1 !== this._geometry.meshes.length);
        return JB || (JB = this._geometry.getVerticesData(BB, IB, ZB)), JB
      }
      copyVerticesData(BB, IB) {
        this._geometry && this._geometry.copyVerticesData(BB, IB)
      }
      getVertexBuffer(BB, IB) {
        return this._geometry ? (IB ? void 0 : this._userInstancedBuffersStorage?.vertexBuffers[BB]) ?? this._geometry.getVertexBuffer(BB) : null
      }
      isVerticesDataPresent(BB, IB) {
        return this._geometry ? !IB && void 0 !== this._userInstancedBuffersStorage?.vertexBuffers[BB] || this._geometry.isVerticesDataPresent(BB) : !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB)
      }
      isVertexBufferUpdatable(BB, IB) {
        if (!this._geometry) return !!this._delayInfo && -1 !== this._delayInfo.indexOf(BB);
        if (!IB) {
          const IB = this._userInstancedBuffersStorage?.vertexBuffers[BB];
          if (IB) return IB.isUpdatable()
        }
        return this._geometry.isVertexBufferUpdatable(BB)
      }
      getVerticesDataKinds(BB) {
        if (!this._geometry) {
          const BB = [];
          if (this._delayInfo)
            for (const IB of this._delayInfo) BB.push(IB);
          return BB
        }
        const IB = this._geometry.getVerticesDataKinds();
        if (!BB && this._userInstancedBuffersStorage)
          for (const ZB in this._userInstancedBuffersStorage.vertexBuffers) - 1 === IB.indexOf(ZB) && IB.push(ZB);
        return IB
      }
      getTotalIndices() {
        return this._geometry ? this._geometry.getTotalIndices() : 0
      }
      MTB(BB, IB) {
        return this._geometry ? this._geometry.MTB(BB, IB) : []
      }
      get isBlocked() {
        return null !== this._masterMesh && void 0 !== this._masterMesh
      }
      isReady() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (2 === this.delayLoadState) return !1;
        if (!super.isReady(BB)) return !1;
        if (!this.EW || 0 === this.EW.length) return !0;
        if (!BB) return !0;
        const ZB = this.PN(),
          TB = this.JR(),
          JB = IB || ZB.getCaps().instancedArrays && (this.instances.length > 0 || this.hasThinInstances);
        this.computeWorldMatrix();
        const oB = this.material || TB.defaultMaterial;
        if (oB)
          if (oB._storeEffectOnSubMeshes)
            for (const vB of this.EW) {
              const BB = vB.LN();
              if (BB)
                if (BB._storeEffectOnSubMeshes) {
                  if (!BB.isReadyForSubMesh(this, vB, JB)) return !1
                } else if (!BB.isReady(this, JB)) return !1
            } else if (!oB.isReady(this, JB)) return !1;
        const GB = ZB.currentRenderPassId;
        for (const vB of this.lightSources) {
          const BB = vB.getShadowGenerators();
          if (!BB) continue;
          const IB = BB.values();
          for (let TB = IB.next(); !0 !== TB.done; TB = IB.next()) {
            const BB = TB.value;
            if (BB && (!BB.getShadowMap()?.renderList || BB.getShadowMap()?.renderList && -1 !== BB.getShadowMap()?.renderList?.indexOf(this))) {
              const IB = BB.getShadowMap().renderPassIds ?? [ZB.currentRenderPassId];
              for (let TB = 0; TB < IB.length; ++TB) {
                ZB.currentRenderPassId = IB[TB];
                for (const IB of this.EW)
                  if (!BB.isReady(IB, JB, IB.LN()?.needAlphaBlendingForMesh(this) ?? !1)) return ZB.currentRenderPassId = GB, !1
              }
              ZB.currentRenderPassId = GB
            }
          }
        }
        for (const vB of this._internalMeshDataInfo._LODLevels)
          if (vB.mesh && !vB.mesh.isReady(JB)) return !1;
        return !0
      }
      get areNormalsFrozen() {
        return this._internalMeshDataInfo._areNormalsFrozen
      }
      eN() {
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
        let IB = this._instanceDataStorage.renderPasses[BB];
        return IB || (IB = new AB, this._instanceDataStorage.renderPasses[BB] = IB), IB
      }
      _preActivate() {
        const BB = this._internalMeshDataInfo,
          IB = this.JR().getRenderId();
        return BB._preActivateId === IB || (BB._preActivateId = IB, this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass.visibleInstances = null : this._getInstanceDataStorage().visibleInstances = null), this
      }
      _preActivateForIntermediateRendering(BB) {
        const IB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return IB.visibleInstances && (IB.visibleInstances.intermediateDefaultRenderId = BB), this
      }
      _registerInstanceForRenderId(BB, IB) {
        const ZB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        return ZB.visibleInstances || (ZB.visibleInstances = {
          defaultRenderId: IB,
          selfDefaultRenderId: this._renderId,
          intermediateDefaultRenderId: -1
        }), ZB.visibleInstances[IB] || (void 0 === ZB.previousRenderId || this._instanceDataStorage.useMonoDataStorageRenderPass && !this._instanceDataStorage.isFrozen || delete ZB.visibleInstances[ZB.previousRenderId], ZB.previousRenderId = IB, ZB.visibleInstances[IB] = new Array), ZB.visibleInstances[IB].push(BB), this
      }
      _afterComputeWorldMatrix() {
        super._afterComputeWorldMatrix(), this.hasThinInstances && (this.XN || this.thinInstanceRefreshBoundingInfo(!1))
      }
      _postActivate() {
        this.edgesShareWithInstances && this.edgesRenderer && this.edgesRenderer.isEnabled && this._renderingGroup && (this._renderingGroup._edgesRenderers.pushNoDuplicate(this.edgesRenderer), this.edgesRenderer.customInstances.push(this.getWorldMatrix()))
      }
      refreshBoundingInfo() {
        let BB, IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          ZB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hasBoundingInfo && this.qm().isLocked) return this;
        BB = "object" === typeof IB ? IB : {
          applySkeleton: IB,
          applyMorph: ZB
        };
        const TB = this.geometry ? this.geometry.boundingBias : null;
        return this._refreshBoundingInfo(this._getData(BB, null, iB.i.PositionKind), TB), this
      }
      _createGlobalSubMesh(BB) {
        const IB = this.getTotalVertices();
        if (!IB || !this.MTB()) return null;
        if (this.EW && this.EW.length > 0) {
          const ZB = this.MTB();
          if (!ZB) return null;
          const TB = ZB.length;
          let JB = !1;
          if (BB) JB = !0;
          else
            for (const BB of this.EW) {
              if (BB.indexStart + BB.indexCount > TB) {
                JB = !0;
                break
              }
              if (BB.verticesStart + BB.verticesCount > IB) {
                JB = !0;
                break
              }
            }
          if (!JB) return this.EW[0]
        }
        return this.releaseSubMeshes(), new MB.e(0, 0, IB, 0, this.getTotalIndices() || (this.isUnIndexed ? IB : 0), this)
      }
      subdivide(BB) {
        if (BB < 1) return;
        const IB = this.getTotalIndices();
        let ZB = IB / BB | 0,
          TB = 0;
        for (; ZB % 3 !== 0;) ZB++;
        this.releaseSubMeshes();
        for (let JB = 0; JB < BB && !(TB >= IB); JB++) MB.e.CreateFromIndices(0, TB, TB + ZB >= IB ? IB - TB : ZB, this, void 0, !1), TB += ZB;
        this.refreshBoundingInfo(), this.synchronizeInstances()
      }
      setVerticesData(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 ? arguments[3] : void 0;
        if (this._geometry) this._geometry.setVerticesData(BB, IB, ZB, TB);
        else {
          const TB = new pB.c;
          TB.set(IB, BB);
          const JB = this.JR();
          new aB.e(aB.e.RandomId(), JB, TB, ZB, this)
        }
        return this
      }
      removeVerticesData(BB) {
        this._geometry && this._geometry.removeVerticesData(BB)
      }
      markVerticesDataAsUpdatable(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZB = this.getVertexBuffer(BB);
        ZB && ZB.isUpdatable() !== IB && this.setVerticesData(BB, this.getVerticesData(BB), IB)
      }
      setVerticesBuffer(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        return this._geometry || (this._geometry = aB.e.CreateGeometryForMesh(this)), this._geometry.setVerticesBuffer(BB, ZB, IB), this
      }
      updateVerticesData(BB, IB, ZB, TB) {
        return this._geometry ? (TB ? (this.makeGeometryUnique(), this.updateVerticesData(BB, IB, ZB, !1)) : this._geometry.updateVerticesData(BB, IB, ZB), this) : this
      }
      updateMeshPositions(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZB = this.getVerticesData(iB.i.PositionKind);
        if (!ZB) return this;
        if (BB(ZB), this.updateVerticesData(iB.i.PositionKind, ZB, !1, !1), IB) {
          const BB = this.MTB(),
            IB = this.getVerticesData(iB.i.NormalKind);
          if (!IB) return this;
          pB.c.ComputeNormals(ZB, BB, IB), this.updateVerticesData(iB.i.NormalKind, IB, !1, !1)
        }
        return this
      }
      makeGeometryUnique() {
        if (!this._geometry) return this;
        if (1 === this._geometry.meshes.length) return this;
        const BB = this._geometry,
          IB = this._geometry.copy(aB.e.RandomId());
        return BB.releaseForMesh(this, !0), IB.applyToMesh(this), this
      }
      setIndexBuffer(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          JB = this._geometry;
        JB || (JB = new aB.e(aB.e.RandomId(), this.JR(), void 0, void 0, this)), JB.setIndexBuffer(BB, IB, ZB, TB)
      }
      setIndices(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (this._geometry) this._geometry.setIndices(BB, IB, ZB, TB);
        else {
          const TB = new pB.c;
          TB.indices = BB;
          const JB = this.JR();
          new aB.e(aB.e.RandomId(), JB, TB, ZB, this, IB)
        }
        return this
      }
      updateIndices(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return this._geometry ? (this._geometry.updateIndices(BB, IB, ZB), this) : this
      }
      toLeftHanded() {
        return this._geometry ? (this._geometry.toLeftHanded(), this) : this
      }
      _bind(BB, IB, ZB) {
        let TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (!this._geometry) return this;
        const JB = this.JR().PN();
        let oB;
        if (this._unIndexed)
          if (this._getRenderingFillMode(ZB) === jB.e.WireFrameFillMode) oB = BB._getLinesIndexBuffer(this.MTB(), JB);
          else oB = null;
        else switch (this._getRenderingFillMode(ZB)) {
          case jB.e.PointFillMode:
            oB = null;
            break;
          case jB.e.WireFrameFillMode:
            oB = BB._getLinesIndexBuffer(this.MTB(), JB);
            break;
          default:
          case jB.e.TriangleFillMode:
            oB = this._geometry.getIndexBuffer()
        }
        return this._bindDirect(IB, oB, TB)
      }
      _bindDirect(BB, IB) {
        let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if (!this._geometry) return this;
        if (this.morphTargetManager && this.morphTargetManager.isUsingTextureForTargets && this.morphTargetManager._bind(BB), ZB && this._userInstancedBuffersStorage && !this.hasThinInstances) {
          if (!this._instanceDataStorage.useMonoDataStorageRenderPass && this._userInstancedBuffersStorage.renderPasses && this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId]) {
            const BB = this._userInstancedBuffersStorage.renderPasses[this._instanceDataStorage.engine.currentRenderPassId];
            for (const IB in BB) this._userInstancedBuffersStorage.vertexBuffers[IB] = BB[IB]
          }
          this._geometry._bind(BB, IB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects)
        } else this._geometry._bind(BB, IB);
        return this
      }
      _draw(BB, IB, ZB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        this._internalMeshDataInfo._onBeforeDrawObservable && this._internalMeshDataInfo._onBeforeDrawObservable.notifyObservers(this);
        const TB = this.JR().PN(),
          JB = TB._currentMaterialContext,
          oB = JB && JB.useVertexPulling;
        return this._unIndexed && IB !== jB.e.WireFrameFillMode || IB == jB.e.PointFillMode ? TB.drawArraysType(IB, BB.verticesStart, BB.verticesCount, this.forcedInstanceCount || ZB) : IB == jB.e.WireFrameFillMode ? TB.drawElementsType(IB, 0, BB._linesIndexCount, this.forcedInstanceCount || ZB) : oB ? TB.drawArraysType(IB, BB.indexStart, BB.indexCount, this.forcedInstanceCount || ZB) : TB.drawElementsType(IB, BB.indexStart, BB.indexCount, this.forcedInstanceCount || ZB), this
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const ZB = this._instanceDataStorage.useMonoDataStorageRenderPass ? this._instanceDataStorage.dataStorageRenderPass : this._getInstanceDataStorage();
        if (this._instanceDataStorage.isFrozen) {
          if (IB) return ZB.batchCacheReplacementModeInFrozenMode.hardwareInstancedRendering[BB] = !1, ZB.batchCacheReplacementModeInFrozenMode.renderSelf[BB] = !0, ZB.batchCacheReplacementModeInFrozenMode;
          if (ZB.previousBatch) return ZB.previousBatch
        }
        const TB = this.JR(),
          JB = TB._isInIntermediateRendering(),
          oB = JB ? this._internalAbstractMeshDataInfo._onlyForInstancesIntermediate : this._internalAbstractMeshDataInfo._onlyForInstances,
          GB = ZB.batchCache;
        if (GB.mustReturn = !1, GB.renderSelf[BB] = IB || !oB && this.isEnabled() && this.isVisible, GB.visibleInstances[BB] = null, ZB.visibleInstances && !IB) {
          const IB = ZB.visibleInstances,
            oB = TB.getRenderId(),
            vB = JB ? IB.intermediateDefaultRenderId : IB.defaultRenderId;
          GB.visibleInstances[BB] = IB[oB], !GB.visibleInstances[BB] && vB && (GB.visibleInstances[BB] = IB[vB])
        }
        return GB.hardwareInstancedRendering[BB] = !IB && this._instanceDataStorage.hardwareInstancedRendering && null !== GB.visibleInstances[BB] && void 0 !== GB.visibleInstances[BB], ZB.previousBatch = GB, GB
      }
      _updateInstancedBuffers(BB, IB, ZB, TB, JB, oB) {
        const GB = IB.visibleInstances[BB._id],
          vB = GB ? GB.length : 0,
          kB = IB.parent,
          cB = this._instanceDataStorage;
        let nB = kB.instancesBuffer,
          hB = kB.instancesPreviousBuffer,
          zB = 0,
          FB = 0;
        const NB = IB.renderSelf[BB._id],
          gB = this._scene.floatingOriginOffset,
          qB = !nB || ZB !== kB.instancesBufferSize || this._scene.needsPreviousWorldMatrices && !kB.instancesPreviousBuffer;
        if (this._instanceDataStorage.manualUpdate || cB.isFrozen && !qB) FB = (NB ? 1 : 0) + vB;
        else {
          const IB = this.getWorldMatrix();
          if (NB) {
            this._scene.needsPreviousWorldMatrices && (cB.masterMeshPreviousWorldMatrix ? (cB.masterMeshPreviousWorldMatrix.copyToArray(kB.instancesPreviousData, zB), cB.masterMeshPreviousWorldMatrix.TY(IB)) : (cB.masterMeshPreviousWorldMatrix = IB.clone(), cB.masterMeshPreviousWorldMatrix.copyToArray(kB.instancesPreviousData, zB))), IB.copyToArray(kB.instancesData, zB);
            const BB = IB.HTB();
            kB.instancesData[zB + 12] = BB[12] - gB.x, kB.instancesData[zB + 13] = BB[13] - gB.y, kB.instancesData[zB + 14] = BB[14] - gB.z, zB += 16, FB++
          }
          if (GB) {
            if (KB.INSTANCEDMESH_SORT_TRANSPARENT && this._scene.activeCamera && BB.LN()?.needAlphaBlendingForMesh(BB.getRenderingMesh())) {
              const BB = this._scene.activeCamera.globalPosition;
              for (let IB = 0; IB < GB.length; IB++) {
                const ZB = GB[IB];
                ZB._distanceToCamera = wB.s.Distance(ZB.qm().ZJB.centerWorld, BB)
              }
              GB.sort(((BB, IB) => BB._distanceToCamera > IB._distanceToCamera ? -1 : BB._distanceToCamera < IB._distanceToCamera ? 1 : 0))
            }
            for (let BB = 0; BB < GB.length; BB++) {
              const IB = GB[BB],
                ZB = IB.getWorldMatrix();
              ZB.copyToArray(kB.instancesData, zB), this._scene.needsPreviousWorldMatrices && (IB._previousWorldMatrix ? (IB._previousWorldMatrix.copyToArray(kB.instancesPreviousData, zB), IB._previousWorldMatrix.TY(ZB)) : (IB._previousWorldMatrix = ZB.clone(), IB._previousWorldMatrix.copyToArray(kB.instancesPreviousData, zB)));
              const TB = ZB.HTB();
              kB.instancesData[zB + 12] = TB[12] - gB.x, kB.instancesData[zB + 13] = TB[13] - gB.y, kB.instancesData[zB + 14] = TB[14] - gB.z, zB += 16, FB++
            }
          }
        }
        if (qB) {
          let BB;
          if (nB && nB.dispose(), hB && hB.dispose(), nB = new iB.e(TB, kB.instancesData, !0, 16, !1, !0), kB.instancesBuffer = nB, this._userInstancedBuffersStorage || (this._userInstancedBuffersStorage = {
              data: {},
              vertexBuffers: {},
              strides: {},
              sizes: {},
              vertexArrayObjects: this.PN().getCaps().vertexArrayObject ? {} : void 0
            }), this._instanceDataStorage.useMonoDataStorageRenderPass) BB = this._userInstancedBuffersStorage.vertexBuffers;
          else {
            this._userInstancedBuffersStorage.renderPasses || (this._userInstancedBuffersStorage.renderPasses = {});
            const IB = this._instanceDataStorage.engine.currentRenderPassId;
            BB = this._userInstancedBuffersStorage.renderPasses[IB], BB || (this._userInstancedBuffersStorage.renderPasses[IB] = BB = {})
          }
          BB.world0 = nB.createVertexBuffer("world0", 0, 4), BB.world1 = nB.createVertexBuffer("world1", 4, 4), BB.world2 = nB.createVertexBuffer("world2", 8, 4), BB.world3 = nB.createVertexBuffer("world3", 12, 4), this._scene.needsPreviousWorldMatrices && (hB = new iB.e(TB, kB.instancesPreviousData, !0, 16, !1, !0), kB.instancesPreviousBuffer = hB, BB.previousWorld0 = hB.createVertexBuffer("previousWorld0", 0, 4), BB.previousWorld1 = hB.createVertexBuffer("previousWorld1", 4, 4), BB.previousWorld2 = hB.createVertexBuffer("previousWorld2", 8, 4), BB.previousWorld3 = hB.createVertexBuffer("previousWorld3", 12, 4)), this._invalidateInstanceVertexArrayObject()
        } else this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || (nB.updateDirectly(kB.instancesData, 0, FB), !this._scene.needsPreviousWorldMatrices || this._instanceDataStorage.manualUpdate && !this._instanceDataStorage.previousManualUpdate || hB.updateDirectly(kB.instancesPreviousData, 0, FB));
        this._processInstancedBuffers(GB, NB), oB && void 0 !== JB && (this.JR()._activeIndices.addCount(BB.indexCount * FB, !1), TB._currentDrawContext && (TB._currentDrawContext.useInstancing = !0), this._bind(BB, oB, JB), this._draw(BB, JB, FB)), !this._scene.needsPreviousWorldMatrices || qB || !this._instanceDataStorage.manualUpdate || this._instanceDataStorage.isFrozen && !this._instanceDataStorage.forceMatrixUpdates || this._instanceDataStorage.previousManualUpdate || hB.updateDirectly(kB.instancesData, 0, FB)
      }
      _renderWithInstances(BB, IB, ZB, TB, JB) {
        const oB = ZB.visibleInstances[BB._id],
          GB = oB ? oB.length : 0,
          vB = ZB.parent,
          kB = vB.instancesBufferSize,
          cB = 16 * (GB + 1) * 4;
        for (; vB.instancesBufferSize < cB;) vB.instancesBufferSize *= 2;
        return vB.instancesData && kB == vB.instancesBufferSize || (vB.instancesData = new Float32Array(vB.instancesBufferSize / 4)), (this._scene.needsPreviousWorldMatrices && !vB.instancesPreviousData || kB != vB.instancesBufferSize) && (vB.instancesPreviousData = new Float32Array(vB.instancesBufferSize / 4)), this._updateInstancedBuffers(BB, ZB, kB, JB, IB, TB), JB.unbindInstanceAttributes(), this
      }
      _renderWithThinInstances(BB, IB, ZB, TB) {
        const JB = this._thinInstanceDataStorage?.instancesCount ?? 0;
        this.JR()._activeIndices.addCount(BB.indexCount * JB, !1), TB._currentDrawContext && (TB._currentDrawContext.useInstancing = !0), this._bind(BB, ZB, IB), this._draw(BB, IB, JB), this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && this._thinInstanceDataStorage.matrixData && (this._thinInstanceDataStorage.previousMatrixBuffer ? this._thinInstanceDataStorage.previousMatrixBuffer.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, JB) : this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.matrixData, !1)), TB.unbindInstanceAttributes()
      }
      _processInstancedBuffers(BB, IB) {}
      _processRendering(BB, IB, ZB, TB, JB, oB, GB, vB) {
        const kB = this.JR(),
          cB = kB.PN();
        if (TB = this._getRenderingFillMode(TB), oB && IB.getRenderingMesh().hasThinInstances) return this._renderWithThinInstances(IB, TB, ZB, cB), this;
        if (oB) this._renderWithInstances(IB, TB, JB, ZB, cB);
        else {
          cB._currentDrawContext && (cB._currentDrawContext.useInstancing = !1);
          let ZB = 0;
          JB.renderSelf[IB._id] && (GB && GB(!1, BB.getWorldMatrix(), vB), ZB++, this._draw(IB, TB, this._instanceDataStorage.overridenInstanceCount));
          const oB = JB.visibleInstances[IB._id];
          if (oB) {
            const BB = oB.length;
            ZB += BB;
            for (let ZB = 0; ZB < BB; ZB++) {
              const BB = oB[ZB].getWorldMatrix();
              GB && GB(!0, BB, vB), this._draw(IB, TB)
            }
          }
          kB._activeIndices.addCount(IB.indexCount * ZB, !1)
        }
        return this
      }
      _disposeInstanceDataStorageRenderPass(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        BB?.instancesBuffer && (IB && BB.instancesBuffer.dispose(), BB.instancesBuffer = null), BB?.instancesPreviousBuffer && (IB && BB.instancesPreviousBuffer.dispose(), BB.instancesPreviousBuffer = null)
      }
      _rebuild() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const IB in this._instanceDataStorage.renderPasses) {
          const ZB = this._instanceDataStorage.renderPasses[IB];
          this._disposeInstanceDataStorageRenderPass(ZB, BB)
        }
        if (this._disposeInstanceDataStorageRenderPass(this._instanceDataStorage.dataStorageRenderPass, BB), this._userInstancedBuffersStorage) {
          for (const IB in this._userInstancedBuffersStorage.vertexBuffers) {
            const ZB = this._userInstancedBuffersStorage.vertexBuffers[IB];
            ZB && (BB && ZB.dispose(), this._userInstancedBuffersStorage.vertexBuffers[IB] = null)
          }
          this._userInstancedBuffersStorage.vertexArrayObjects && (this._userInstancedBuffersStorage.vertexArrayObjects = {})
        }
        this._internalMeshDataInfo._effectiveMaterial = null, super._rebuild(BB)
      }
      _releaseRenderPassId(BB) {
        const IB = this._instanceDataStorage.renderPasses[BB];
        if (IB && (this._disposeInstanceDataStorageRenderPass(IB, !0), delete this._instanceDataStorage.renderPasses[BB]), this._userInstancedBuffersStorage?.renderPasses) {
          const IB = this._userInstancedBuffersStorage.renderPasses[BB];
          if (IB)
            for (const BB in IB) IB[BB]?.dispose();
          delete this._userInstancedBuffersStorage.renderPasses[BB]
        }
        const ZB = this._userInstancedBuffersStorage?.interleavedBuffers;
        ZB?.[BB] && (ZB[BB].buffer.dispose(), delete ZB[BB])
      }
      _freeze() {
        if (this.EW) {
          for (let BB = 0; BB < this.EW.length; BB++) this._getInstancesRenderList(BB);
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
      renderWithRenderPassId(BB, IB, ZB, TB) {
        let JB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        const oB = this._scene.PN(),
          GB = oB.currentRenderPassId;
        if (void 0 !== BB && (oB.currentRenderPassId = BB), TB)(!JB || JB && TB.isInFrustum(this._scene._frustumPlanes)) && this.render(TB, !!IB, ZB);
        else
          for (let vB = 0; vB < this.EW.length; vB++) {
            const BB = this.EW[vB];
            (!JB || JB && BB.isInFrustum(this._scene._frustumPlanes)) && this.render(BB, !!IB, ZB)
          }
        return void 0 !== BB && (oB.currentRenderPassId = GB), this
      }
      directRender() {
        if (!this.EW) return this;
        for (const BB of this.EW) this.render(BB, !1);
        return this
      }
      render(BB, IB, ZB) {
        const TB = this.JR(),
          JB = TB.PN();
        this._internalAbstractMeshDataInfo._isActiveIntermediate ? this._internalAbstractMeshDataInfo._isActiveIntermediate = !1 : this._internalAbstractMeshDataInfo._isActive = !1;
        const oB = TB.activeCameras?.length ?? 0,
          GB = oB > 1 && TB.activeCamera === TB.activeCameras[0] || oB <= 1,
          vB = this._occlusionDataStorage && -1 !== this._occlusionDataStorage.occlusionForRenderPassId && this._occlusionDataStorage.occlusionForRenderPassId !== JB.currentRenderPassId;
        if (GB && this._checkOcclusionQuery(vB) && !this._occlusionDataStorage.forceRenderingWhenOccluded) return this;
        const kB = this._getInstancesRenderList(BB._id, !!ZB);
        if (kB.mustReturn) return this;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        let cB = 0,
          nB = null;
        this.ignoreCameraMaxZ && TB.activeCamera && !TB._isInIntermediateRendering() && (cB = TB.activeCamera.maxZ, nB = TB.activeCamera, TB.activeCamera.maxZ = 0, TB.updateTransformMatrix(!0)), this._internalMeshDataInfo._onBeforeRenderObservable && this._internalMeshDataInfo._onBeforeRenderObservable.notifyObservers(this);
        const hB = BB.getRenderingMesh(),
          zB = kB.hardwareInstancedRendering[BB._id] || hB.hasThinInstances || !!this._userInstancedBuffersStorage && !BB.getMesh()._internalAbstractMeshDataInfo._actAsRegularMesh,
          FB = this._instanceDataStorage,
          NB = BB.LN();
        if (!NB) return nB && (nB.maxZ = cB, TB.updateTransformMatrix(!0)), this;
        if (FB.isFrozen && this._internalMeshDataInfo._effectiveMaterial && this._internalMeshDataInfo._effectiveMaterial === NB) {
          if (NB._storeEffectOnSubMeshes && !BB._drawWrapper?._wasPreviouslyReady || !NB._storeEffectOnSubMeshes && !NB._getDrawWrapper()._wasPreviouslyReady) return nB && (nB.maxZ = cB, TB.updateTransformMatrix(!0)), this
        } else {
          if (NB._storeEffectOnSubMeshes) {
            if (!NB.isReadyForSubMesh(this, BB, zB)) return nB && (nB.maxZ = cB, TB.updateTransformMatrix(!0)), this
          } else if (!NB.isReady(this, zB)) return nB && (nB.maxZ = cB, TB.updateTransformMatrix(!0)), this;
          this._internalMeshDataInfo._effectiveMaterial = NB
        }
        if (IB) {
          const BB = this._internalMeshDataInfo._effectiveMaterial;
          if (1 === BB.alphaModes.length) JB.setAlphaMode(BB.alphaMode);
          else
            for (let IB = 0; IB < BB.alphaModes.length; IB++) {
              const ZB = BB.alphaModes[IB];
              JB.setAlphaMode(void 0 !== ZB ? ZB : 2, !1, IB)
            }
        }
        let gB;
        gB = this._internalMeshDataInfo._effectiveMaterial._storeEffectOnSubMeshes ? BB._drawWrapper : this._internalMeshDataInfo._effectiveMaterial._getDrawWrapper();
        const qB = gB?.effect ?? null;
        for (let sB = 0, wB = TB._beforeRenderingMeshStage; sB < wB.length; sB++) {
          wB[sB].action(this, BB, kB, qB)
        }
        if (!gB || !qB) return nB && (nB.maxZ = cB, TB.updateTransformMatrix(!0)), this;
        const yB = ZB || this;
        let UB;
        if (!FB.isFrozen && (this._internalMeshDataInfo._effectiveMaterial.backFaceCulling || null !== this._internalMeshDataInfo._effectiveMaterial.sideOrientation || this._internalMeshDataInfo._effectiveMaterial._twoSidedLighting)) {
          const BB = yB._getWorldMatrixDeterminant();
          UB = this._internalMeshDataInfo._effectiveMaterial._getEffectiveOrientation(this), BB < 0 && (UB = UB === jB.e.ClockWiseSideOrientation ? jB.e.CounterClockWiseSideOrientation : jB.e.ClockWiseSideOrientation), this._internalMeshDataInfo._effectiveSideOrientation = UB
        }
        const WB = this._internalMeshDataInfo._effectiveMaterial._preBind(gB, this._internalMeshDataInfo._effectiveSideOrientation);
        this._internalMeshDataInfo._effectiveMaterial.forceDepthWrite && JB.setDepthWrite(!0);
        const dB = this._internalMeshDataInfo._effectiveMaterial,
          CB = dB.fillMode;
        this._internalMeshDataInfo._onBeforeBindObservable && this._internalMeshDataInfo._onBeforeBindObservable.notifyObservers(this), zB || this._bind(BB, qB, CB, !1);
        const QB = yB.getWorldMatrix();
        dB._storeEffectOnSubMeshes ? dB.bindForSubMesh(QB, this, BB) : dB.bind(QB, this);
        try {
          PB.b._BindAttachmentsForEffect(JB, qB) && (!dB.backFaceCulling && dB.separateCullingPass && (JB.setState(!0, dB.zOffset, !1, !WB, dB.cullBackFaces, dB.stencil, dB.zOffsetUnits), this._processRendering(this, BB, qB, CB, kB, zB, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial), JB.setState(!0, dB.zOffset, !1, WB, dB.cullBackFaces, dB.stencil, dB.zOffsetUnits), this._internalMeshDataInfo._onBetweenPassObservable && this._internalMeshDataInfo._onBetweenPassObservable.notifyObservers(BB)), this._processRendering(this, BB, qB, CB, kB, zB, this._onBeforeDraw, this._internalMeshDataInfo._effectiveMaterial))
        } finally {
          PB.b._RestoreAttachments(JB)
        }
        this._internalMeshDataInfo._effectiveMaterial.unbind();
        for (let sB = 0, wB = TB._afterRenderingMeshStage; sB < wB.length; sB++) {
          wB[sB].action(this, BB, kB, qB)
        }
        return this._internalMeshDataInfo._onAfterRenderObservable && this._internalMeshDataInfo._onAfterRenderObservable.notifyObservers(this), nB && (nB.maxZ = cB, TB.updateTransformMatrix(!0)), 2 !== TB.performancePriority || FB.isFrozen || this._freeze(), this
      }
      _renderRunFollower(BB, IB) {
        const ZB = this._scene,
          TB = ZB._engine;
        if (TB.isWebGPU || BB._mesh !== this || 0 !== this.instances.length || this.render !== KB.prototype.render) return !1;
        const JB = BB.LN();
        if (!JB || JB !== ZB._cachedMaterial || void 0 === JB._canBindRunFollower) return !1;
        const oB = BB._drawWrapper,
          GB = oB?.effect;
        if (!GB || GB !== ZB._cachedEffect || this.visibility !== ZB._cachedVisibility || oB._forceRebindOnNextCall) return !1;
        const vB = this.hasThinInstances;
        if (!vB && this._userInstancedBuffersStorage) return !1;
        if (!oB._wasPreviouslyReady || oB._wasPreviouslyUsingInstances !== vB) return !1;
        const kB = this._internalMeshDataInfo;
        if (this.ignoreCameraMaxZ || this.morphTargetManager || this._instanceDataStorage.isFrozen || ZB._isInIntermediateRendering() || 0 !== ZB._beforeRenderingMeshStage.length || 0 !== ZB._afterRenderingMeshStage.length || kB._onBeforeRenderObservable?.hasObservers() || kB._onBeforeBindObservable?.hasObservers() || kB._onAfterRenderObservable?.hasObservers()) return !1;
        const cB = this.occlusionType;
        if (void 0 !== cB && cB !== HB.b.OCCLUSION_TYPE_NONE || !JB._canBindRunFollower(ZB, TB, this, BB, GB)) return !1;
        const nB = this._internalAbstractMeshDataInfo,
          hB = nB._isActiveIntermediate;
        hB ? nB._isActiveIntermediate = !1 : nB._isActive = !1;
        const zB = ZB.activeCameras?.length ?? 0;
        (zB > 1 && ZB.activeCamera === ZB.activeCameras[0] || zB <= 1) && this._checkOcclusionQuery(!1);
        const FB = this._getInstancesRenderList(BB._id);
        if (FB.mustReturn) return !0;
        if (!vB && !FB.renderSelf[BB._id]) return hB ? nB._isActiveIntermediate = !0 : nB._isActive = !0, !1;
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return !0;
        if (kB._effectiveMaterial = JB, IB)
          if (1 === JB.alphaModes.length) TB.setAlphaMode(JB.alphaMode);
          else
            for (let gB = 0; gB < JB.alphaModes.length; gB++) {
              const BB = JB.alphaModes[gB];
              TB.setAlphaMode(void 0 !== BB ? BB : 2, !1, gB)
            }
        if (JB.backFaceCulling || null !== JB.sideOrientation || JB._twoSidedLighting) {
          const BB = this._getWorldMatrixDeterminant();
          let IB = JB._getEffectiveOrientation(this);
          BB < 0 && (IB = IB === jB.e.ClockWiseSideOrientation ? jB.e.CounterClockWiseSideOrientation : jB.e.ClockWiseSideOrientation), kB._effectiveSideOrientation = IB
        }
        JB._preBind(oB, kB._effectiveSideOrientation), JB.forceDepthWrite && TB.setDepthWrite(!0);
        const NB = JB.fillMode;
        return vB || this._bind(BB, GB, NB, !1), JB._bindRunFollower(this.getWorldMatrix(), this, BB, GB), this._processRendering(this, BB, GB, NB, FB, vB, this._onBeforeDraw, JB), JB.unbind(), 2 === ZB.performancePriority && this._freeze(), !0
      }
      cleanMatrixWeights() {
        this.isVerticesDataPresent(iB.i.MatricesWeightsKind) && (this.isVerticesDataPresent(iB.i.MatricesWeightsExtraKind) ? this._normalizeSkinWeightsAndExtra() : this._normalizeSkinFourWeights())
      }
      _normalizeSkinFourWeights() {
        const BB = this.getVerticesData(iB.i.MatricesWeightsKind),
          IB = BB.length;
        for (let ZB = 0; ZB < IB; ZB += 4) {
          const IB = BB[ZB] + BB[ZB + 1] + BB[ZB + 2] + BB[ZB + 3];
          if (0 === IB) BB[ZB] = 1;
          else {
            const TB = 1 / IB;
            BB[ZB] *= TB, BB[ZB + 1] *= TB, BB[ZB + 2] *= TB, BB[ZB + 3] *= TB
          }
        }
        this.setVerticesData(iB.i.MatricesWeightsKind, BB)
      }
      _normalizeSkinWeightsAndExtra() {
        const BB = this.getVerticesData(iB.i.MatricesWeightsExtraKind),
          IB = this.getVerticesData(iB.i.MatricesWeightsKind),
          ZB = IB.length;
        for (let TB = 0; TB < ZB; TB += 4) {
          let ZB = IB[TB] + IB[TB + 1] + IB[TB + 2] + IB[TB + 3];
          if (ZB += BB[TB] + BB[TB + 1] + BB[TB + 2] + BB[TB + 3], 0 === ZB) IB[TB] = 1;
          else {
            const JB = 1 / ZB;
            IB[TB] *= JB, IB[TB + 1] *= JB, IB[TB + 2] *= JB, IB[TB + 3] *= JB, BB[TB] *= JB, BB[TB + 1] *= JB, BB[TB + 2] *= JB, BB[TB + 3] *= JB
          }
        }
        this.setVerticesData(iB.i.MatricesWeightsKind, IB), this.setVerticesData(iB.i.MatricesWeightsKind, BB)
      }
      validateSkinning() {
        const BB = this.getVerticesData(iB.i.MatricesWeightsExtraKind),
          IB = this.getVerticesData(iB.i.MatricesWeightsKind);
        if (null === IB || null == this.skeleton) return {
          skinned: !1,
          valid: !0,
          JN: "not skinned"
        };
        const ZB = IB.length;
        let TB = 0,
          JB = 0,
          oB = 0,
          GB = 0;
        const vB = null === BB ? 4 : 8,
          kB = [];
        for (let FB = 0; FB <= vB; FB++) kB[FB] = 0;
        for (let FB = 0; FB < ZB; FB += 4) {
          let ZB = IB[FB],
            cB = ZB,
            nB = 0 === cB ? 0 : 1;
          for (let JB = 1; JB < vB; JB++) {
            const oB = JB < 4 ? IB[FB + JB] : BB[FB + JB - 4];
            oB > ZB && TB++, 0 !== oB && nB++, cB += oB, ZB = oB
          }
          if (kB[nB]++, nB > oB && (oB = nB), 0 === cB) JB++;
          else {
            const ZB = 1 / cB;
            let TB = 0;
            for (let JB = 0; JB < vB; JB++) TB += JB < 4 ? Math.abs(IB[FB + JB] - IB[FB + JB] * ZB) : Math.abs(BB[FB + JB - 4] - BB[FB + JB - 4] * ZB);
            TB > .001 && GB++
          }
        }
        const cB = this.skeleton.bones.length,
          nB = this.getVerticesData(iB.i.MatricesIndicesKind),
          hB = this.getVerticesData(iB.i.MatricesIndicesExtraKind);
        let zB = 0;
        for (let FB = 0; FB < ZB; FB += 4)
          for (let BB = 0; BB < vB; BB++) {
            const IB = BB < 4 ? nB[FB + BB] : hB[FB + BB - 4];
            (IB >= cB || IB < 0) && zB++
          }
        return {
          skinned: !0,
          valid: 0 === JB && 0 === GB && 0 === zB,
          JN: "Number of Weights = " + ZB / 4 + "\nMaximum influences = " + oB + "\nMissing Weights = " + JB + "\nNot Sorted = " + TB + "\nNot Normalized = " + GB + "\nWeightCounts = [" + kB + "]\nNumber of bones = " + cB + "\nBad Bone Indices = " + zB
        }
      }
      _checkDelayState() {
        const BB = this.JR();
        return this._geometry ? this._geometry.load(BB) : 4 === this.delayLoadState && (this.delayLoadState = 2, this._queueLoad(BB)), this
      }
      _queueLoad(BB) {
        BB.addPendingData(this);
        const IB = -1 !== this.delayLoadingFile.indexOf(".babylonbinarymeshdata");
        return (async () => {
          try {
            const ZB = await BB._loadDelayedFileAsync(this.delayLoadingFile, IB, !0);
            ZB instanceof ArrayBuffer ? this._delayLoadingFunction(ZB, this) : this._delayLoadingFunction(JSON.parse(ZB), this);
            for (const BB of this.instances) BB.refreshBoundingInfo(), BB._syncSubMeshes();
            this.delayLoadState = 1, BB.removePendingData(this)
          } catch (ZB) {
            BB.removePendingData(this), BB.mC || XB.d.Error(`Unable to delay load geometry data for mesh "${this.name}" from "${this.delayLoadingFile}": ${ZB}`)
          }
        })(), this
      }
      isInFrustum(BB) {
        return 2 !== this.delayLoadState && (!!super.isInFrustum(BB) && (this._checkDelayState(), !0))
      }
      setMaterialById(BB) {
        const IB = this.JR().materials;
        let ZB;
        for (ZB = IB.length - 1; ZB > -1; ZB--)
          if (IB[ZB].id === BB) return this.material = IB[ZB], this;
        const TB = this.JR().multiMaterials;
        for (ZB = TB.length - 1; ZB > -1; ZB--)
          if (TB[ZB].id === BB) return this.material = TB[ZB], this;
        return this
      }
      getAnimatables() {
        const BB = [];
        return this.material && BB.push(this.material), this.skeleton && BB.push(this.skeleton), BB
      }
      bakeTransformIntoVertices(BB) {
        if (!this.isVerticesDataPresent(iB.i.PositionKind)) return this;
        const IB = this.EW.splice(0);
        this._resetPointsArrayCache();
        let ZB = this.getVerticesData(iB.i.PositionKind);
        const TB = wB.s.Zero();
        let JB;
        for (JB = 0; JB < ZB.length; JB += 3) wB.s.TransformCoordinatesFromFloatsToRef(ZB[JB], ZB[JB + 1], ZB[JB + 2], BB, TB).toArray(ZB, JB);
        if (this.setVerticesData(iB.i.PositionKind, ZB, this.getVertexBuffer(iB.i.PositionKind).isUpdatable()), this.isVerticesDataPresent(iB.i.NormalKind)) {
          for (ZB = this.getVerticesData(iB.i.NormalKind), JB = 0; JB < ZB.length; JB += 3) wB.s.TransformNormalFromFloatsToRef(ZB[JB], ZB[JB + 1], ZB[JB + 2], BB, TB).normalize().toArray(ZB, JB);
          this.setVerticesData(iB.i.NormalKind, ZB, this.getVertexBuffer(iB.i.NormalKind).isUpdatable())
        }
        if (this.isVerticesDataPresent(iB.i.TangentKind)) {
          for (ZB = this.getVerticesData(iB.i.TangentKind), JB = 0; JB < ZB.length; JB += 4) wB.s.TransformNormalFromFloatsToRef(ZB[JB], ZB[JB + 1], ZB[JB + 2], BB, TB).normalize().toArray(ZB, JB);
          this.setVerticesData(iB.i.TangentKind, ZB, this.getVertexBuffer(iB.i.TangentKind).isUpdatable())
        }
        return BB.determinant() < 0 && this.flipFaces(), this.releaseSubMeshes(), this.EW = IB, this
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
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        if (IB && void 0 === IB._addToSceneRootNodes) {
          const ZB = IB;
          return DB.source = this, DB.doNotCloneChildren = ZB.doNotCloneChildren, DB.clonePhysicsImpostor = ZB.clonePhysicsImpostor, DB.cloneThinInstances = ZB.cloneThinInstances, new KB(BB, this.JR(), DB)
        }
        return new KB(BB, this.JR(), IB, this, ZB, TB)
      }
      dispose(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.morphTargetManager = null, this._geometry && this._geometry.releaseForMesh(this, !0);
        const ZB = this._internalMeshDataInfo;
        if (ZB._onBeforeDrawObservable && ZB._onBeforeDrawObservable.clear(), ZB._onBeforeBindObservable && ZB._onBeforeBindObservable.clear(), ZB._onBeforeRenderObservable && ZB._onBeforeRenderObservable.clear(), ZB._onAfterRenderObservable && ZB._onAfterRenderObservable.clear(), ZB._onBetweenPassObservable && ZB._onBetweenPassObservable.clear(), this._scene.useClonedMeshMap) {
          if (ZB.meshMap)
            for (const BB in ZB.meshMap) {
              const IB = ZB.meshMap[BB];
              IB && (IB._internalMeshDataInfo._source = null, ZB.meshMap[BB] = void 0)
            }
          ZB._source && ZB._source._internalMeshDataInfo.meshMap && (ZB._source._internalMeshDataInfo.meshMap[this.uniqueId] = void 0)
        } else {
          const BB = this.JR().meshes;
          for (const IB of BB) {
            const BB = IB;
            BB._internalMeshDataInfo && BB._internalMeshDataInfo._source && BB._internalMeshDataInfo._source === this && (BB._internalMeshDataInfo._source = null)
          }
        }
        ZB._source = null, this._disposeInstanceSpecificData(), this._disposeThinInstanceSpecificData(), this._internalMeshDataInfo._checkReadinessObserver && this._scene.onBeforeRenderObservable.remove(this._internalMeshDataInfo._checkReadinessObserver), super.dispose(BB, IB)
      }
      _disposeInstanceSpecificData() {}
      _disposeThinInstanceSpecificData() {}
      _invalidateInstanceVertexArrayObject() {}
      applyDisplacementMap(BB, IB, ZB, TB, JB, oB) {
        let GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          vB = arguments.length > 7 ? arguments[7] : void 0;
        const kB = this.JR();
        return (0, WB.l)(BB, (BB => {
          const vB = BB.width,
            kB = BB.height,
            cB = this.PN().createCanvas(vB, kB).getContext("2d");
          cB.drawImage(BB, 0, 0);
          const nB = cB.getImageData(0, 0, vB, kB).data;
          this.applyDisplacementMapFromBuffer(nB, vB, kB, IB, ZB, JB, oB, GB), TB && TB(this)
        }), vB || (() => {}), kB.offlineProvider), this
      }
      applyDisplacementMapFromBuffer(BB, IB, ZB, TB, JB, oB, GB) {
        let vB = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (!this.isVerticesDataPresent(iB.i.PositionKind) || !this.isVerticesDataPresent(iB.i.NormalKind) || !this.isVerticesDataPresent(iB.i.UVKind)) return XB.d.Warn("Cannot call applyDisplacementMap: Given mesh is not complete. Position, Normal or UV are missing"), this;
        const kB = this.getVerticesData(iB.i.PositionKind, !0, !0),
          cB = this.getVerticesData(iB.i.NormalKind),
          nB = this.getVerticesData(iB.i.UVKind);
        let hB = wB.s.Zero();
        const zB = wB.s.Zero(),
          FB = wB.p.Zero();
        oB = oB || wB.p.Zero(), GB = GB || new wB.p(1, 1);
        for (let NB = 0; NB < kB.length; NB += 3) {
          wB.s.FromArrayToRef(kB, NB, hB), wB.s.FromArrayToRef(cB, NB, zB), wB.p.FromArrayToRef(nB, NB / 3 * 2, FB);
          const vB = 4 * ((Math.abs(FB.x * GB.x + oB.x % 1) * (IB - 1) % IB | 0) + (Math.abs(FB.y * GB.y + oB.y % 1) * (ZB - 1) % ZB | 0) * IB),
            gB = .3 * (BB[vB] / 255) + .59 * (BB[vB + 1] / 255) + .11 * (BB[vB + 2] / 255);
          zB.normalize(), zB.scaleInPlace(TB + (JB - TB) * gB), hB = hB.add(zB), hB.toArray(kB, NB)
        }
        return pB.c.ComputeNormals(kB, this.MTB(), cB), vB ? (this.setVerticesData(iB.i.PositionKind, kB), this.setVerticesData(iB.i.NormalKind, cB), this.setVerticesData(iB.i.UVKind, nB)) : (this.updateVerticesData(iB.i.PositionKind, kB), this.updateVerticesData(iB.i.NormalKind, cB)), this
      }
      _getFlattenedNormals(BB, IB) {
        const ZB = new Float32Array(3 * BB.length);
        let TB = 0;
        const JB = this.sideOrientation === (this._scene.useRightHandedSystem ? 1 : 0);
        for (let oB = 0; oB < BB.length; oB += 3) {
          const GB = wB.s.FromArray(IB, 3 * BB[oB]),
            vB = wB.s.FromArray(IB, 3 * BB[oB + 1]),
            kB = wB.s.FromArray(IB, 3 * BB[oB + 2]),
            cB = GB.subtract(vB),
            nB = kB.subtract(vB),
            hB = wB.s.Normalize(wB.s.Cross(cB, nB));
          JB && hB.scaleInPlace(-1);
          for (let BB = 0; BB < 3; BB++) ZB[TB++] = hB.x, ZB[TB++] = hB.y, ZB[TB++] = hB.z
        }
        return ZB
      }
      _convertToUnIndexedMesh() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = this.getVerticesDataKinds().filter((BB => !this.getVertexBuffer(BB)?.getIsInstanced())),
          ZB = this.MTB(!1, !0),
          TB = {},
          JB = (BB, IB) => {
            const TB = new Float32Array(ZB.length * IB);
            let JB = 0;
            for (let oB = 0; oB < ZB.length; oB++)
              for (let GB = 0; GB < IB; GB++) TB[JB++] = BB[ZB[oB] * IB + GB];
            return TB
          },
          oB = this.qm(),
          GB = this.geometry ? this.EW.slice(0) : [];
        for (const vB of IB) TB[vB] = this.getVerticesData(vB);
        for (const vB of IB) {
          const IB = this.getVertexBuffer(vB),
            oB = IB.getSize();
          if (BB && vB === iB.i.NormalKind) {
            const BB = this._getFlattenedNormals(ZB, TB[iB.i.PositionKind]);
            this.setVerticesData(iB.i.NormalKind, BB, IB.isUpdatable(), oB)
          } else this.setVerticesData(vB, JB(TB[vB], oB), IB.isUpdatable(), oB)
        }
        if (this.morphTargetManager) {
          for (let IB = 0; IB < this.morphTargetManager.numTargets; IB++) {
            const TB = this.morphTargetManager.getTarget(IB),
              oB = TB.getPositions();
            TB.vvB(JB(oB, 3));
            const GB = TB.getNormals();
            GB && TB.setNormals(BB ? this._getFlattenedNormals(ZB, oB) : JB(GB, 3));
            const vB = TB.getTangents();
            vB && TB.setTangents(JB(vB, 3));
            const kB = TB.getUVs();
            kB && TB.setUVs(JB(kB, 2));
            const cB = TB.getColors();
            cB && TB.setColors(JB(cB, 4))
          }
          this.morphTargetManager.synchronize()
        }
        for (let vB = 0; vB < ZB.length; vB++) ZB[vB] = vB;
        this.setIndices(ZB), this._unIndexed = !0, this.releaseSubMeshes();
        for (const vB of GB) {
          const BB = vB.qm();
          MB.e.AddToMesh(vB.materialIndex, vB.indexStart, vB.indexCount, vB.indexStart, vB.indexCount, this).setBoundingInfo(BB)
        }
        return this.setBoundingInfo(oB), this.synchronizeInstances(), this
      }
      convertToFlatShadedMesh() {
        return this._convertToUnIndexedMesh(!0)
      }
      convertToUnIndexedMesh() {
        return this._convertToUnIndexedMesh()
      }
      flipFaces() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = pB.c.ExtractFromMesh(this);
        let ZB;
        if (BB && this.isVerticesDataPresent(iB.i.NormalKind) && IB.normals) {
          for (ZB = 0; ZB < IB.normals.length; ZB++) IB.normals[ZB] *= -1;
          this.setVerticesData(iB.i.NormalKind, IB.normals, this.isVertexBufferUpdatable(iB.i.NormalKind))
        }
        if (IB.indices) {
          let BB;
          for (ZB = 0; ZB < IB.indices.length; ZB += 3) BB = IB.indices[ZB + 1], IB.indices[ZB + 1] = IB.indices[ZB + 2], IB.indices[ZB + 2] = BB;
          this.setIndices(IB.indices, null, this.isVertexBufferUpdatable(iB.i.PositionKind), !0)
        }
        return this
      }
      increaseVertices() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        const IB = pB.c.ExtractFromMesh(this),
          ZB = IB.indices && !Array.isArray(IB.indices) && Array.from ? Array.from(IB.indices) : IB.indices,
          TB = IB.positions && !Array.isArray(IB.positions) && Array.from ? Array.from(IB.positions) : IB.positions,
          JB = IB.uvs && !Array.isArray(IB.uvs) && Array.from ? Array.from(IB.uvs) : IB.uvs,
          oB = IB.normals && !Array.isArray(IB.normals) && Array.from ? Array.from(IB.normals) : IB.normals;
        if (ZB && TB) {
          IB.indices = ZB, IB.positions = TB, JB && (IB.uvs = JB), oB && (IB.normals = oB);
          const GB = BB + 1,
            vB = [];
          for (let BB = 0; BB < GB + 1; BB++) vB[BB] = [];
          let kB, cB;
          const nB = new wB.s(0, 0, 0),
            hB = new wB.s(0, 0, 0),
            zB = new wB.p(0, 0),
            FB = [],
            NB = [],
            gB = [];
          let qB, yB, UB, WB = TB.length;
          JB && (yB = JB.length), oB && (UB = oB.length);
          for (let BB = 0; BB < ZB.length; BB += 3) {
            NB[0] = ZB[BB], NB[1] = ZB[BB + 1], NB[2] = ZB[BB + 2];
            for (let BB = 0; BB < 3; BB++)
              if (kB = NB[BB], cB = NB[(BB + 1) % 3], void 0 === gB[kB] && void 0 === gB[cB] ? (gB[kB] = [], gB[cB] = []) : (void 0 === gB[kB] && (gB[kB] = []), void 0 === gB[cB] && (gB[cB] = [])), void 0 === gB[kB][cB] && void 0 === gB[cB][kB]) {
                gB[kB][cB] = [], nB.x = (TB[3 * cB] - TB[3 * kB]) / GB, nB.y = (TB[3 * cB + 1] - TB[3 * kB + 1]) / GB, nB.z = (TB[3 * cB + 2] - TB[3 * kB + 2]) / GB, oB && (hB.x = (oB[3 * cB] - oB[3 * kB]) / GB, hB.y = (oB[3 * cB + 1] - oB[3 * kB + 1]) / GB, hB.z = (oB[3 * cB + 2] - oB[3 * kB + 2]) / GB), JB && (zB.x = (JB[2 * cB] - JB[2 * kB]) / GB, zB.y = (JB[2 * cB + 1] - JB[2 * kB + 1]) / GB), gB[kB][cB].push(kB);
                for (let BB = 1; BB < GB; BB++) gB[kB][cB].push(TB.length / 3), TB[WB++] = TB[3 * kB] + BB * nB.x, TB[WB++] = TB[3 * kB + 1] + BB * nB.y, TB[WB++] = TB[3 * kB + 2] + BB * nB.z, oB && (oB[UB++] = oB[3 * kB] + BB * hB.x, oB[UB++] = oB[3 * kB + 1] + BB * hB.y, oB[UB++] = oB[3 * kB + 2] + BB * hB.z), JB && (JB[yB++] = JB[2 * kB] + BB * zB.x, JB[yB++] = JB[2 * kB + 1] + BB * zB.y);
                gB[kB][cB].push(cB), gB[cB][kB] = [], qB = gB[kB][cB].length;
                for (let BB = 0; BB < qB; BB++) gB[cB][kB][BB] = gB[kB][cB][qB - 1 - BB]
              } vB[0][0] = ZB[BB], vB[1][0] = gB[ZB[BB]][ZB[BB + 1]][1], vB[1][1] = gB[ZB[BB]][ZB[BB + 2]][1];
            for (let IB = 2; IB < GB; IB++) {
              vB[IB][0] = gB[ZB[BB]][ZB[BB + 1]][IB], vB[IB][IB] = gB[ZB[BB]][ZB[BB + 2]][IB], nB.x = (TB[3 * vB[IB][IB]] - TB[3 * vB[IB][0]]) / IB, nB.y = (TB[3 * vB[IB][IB] + 1] - TB[3 * vB[IB][0] + 1]) / IB, nB.z = (TB[3 * vB[IB][IB] + 2] - TB[3 * vB[IB][0] + 2]) / IB, oB && (hB.x = (oB[3 * vB[IB][IB]] - oB[3 * vB[IB][0]]) / IB, hB.y = (oB[3 * vB[IB][IB] + 1] - oB[3 * vB[IB][0] + 1]) / IB, hB.z = (oB[3 * vB[IB][IB] + 2] - oB[3 * vB[IB][0] + 2]) / IB), JB && (zB.x = (JB[2 * vB[IB][IB]] - JB[2 * vB[IB][0]]) / IB, zB.y = (JB[2 * vB[IB][IB] + 1] - JB[2 * vB[IB][0] + 1]) / IB);
              for (let BB = 1; BB < IB; BB++) vB[IB][BB] = TB.length / 3, TB[WB++] = TB[3 * vB[IB][0]] + BB * nB.x, TB[WB++] = TB[3 * vB[IB][0] + 1] + BB * nB.y, TB[WB++] = TB[3 * vB[IB][0] + 2] + BB * nB.z, oB && (oB[UB++] = oB[3 * vB[IB][0]] + BB * hB.x, oB[UB++] = oB[3 * vB[IB][0] + 1] + BB * hB.y, oB[UB++] = oB[3 * vB[IB][0] + 2] + BB * hB.z), JB && (JB[yB++] = JB[2 * vB[IB][0]] + BB * zB.x, JB[yB++] = JB[2 * vB[IB][0] + 1] + BB * zB.y)
            }
            vB[GB] = gB[ZB[BB + 1]][ZB[BB + 2]], FB.push(vB[0][0], vB[1][0], vB[1][1]);
            for (let BB = 1; BB < GB; BB++) {
              let IB;
              for (IB = 0; IB < BB; IB++) FB.push(vB[BB][IB], vB[BB + 1][IB], vB[BB + 1][IB + 1]), FB.push(vB[BB][IB], vB[BB + 1][IB + 1], vB[BB][IB + 1]);
              FB.push(vB[BB][IB], vB[BB + 1][IB], vB[BB + 1][IB + 1])
            }
          }
          IB.indices = FB, IB.applyToMesh(this, this.isVertexBufferUpdatable(iB.i.PositionKind))
        } else XB.d.Warn("Couldn't increase number of vertices : VertexData must contain at least indices and positions")
      }
      forceSharedVertices() {
        const BB = pB.c.ExtractFromMesh(this),
          IB = BB.uvs,
          ZB = BB.indices,
          TB = BB.positions,
          JB = BB.colors,
          oB = BB.matricesIndices,
          GB = BB.matricesWeights,
          vB = BB.matricesIndicesExtra,
          kB = BB.matricesWeightsExtra;
        if (void 0 === ZB || void 0 === TB || null === ZB || null === TB) XB.d.Warn("VertexData contains empty entries");
        else {
          const cB = [],
            nB = [],
            hB = [],
            zB = [],
            FB = [],
            NB = [],
            gB = [],
            qB = [];
          let yB, UB = 0;
          const WB = {};
          let dB, CB;
          for (let BB = 0; BB < ZB.length; BB += 3) {
            CB = [ZB[BB], ZB[BB + 1], ZB[BB + 2]], yB = [];
            for (let BB = 0; BB < 3; BB++) {
              yB[BB] = "";
              for (let IB = 0; IB < 3; IB++) Math.abs(TB[3 * CB[BB] + IB]) < 1e-8 && (TB[3 * CB[BB] + IB] = 0), yB[BB] += TB[3 * CB[BB] + IB] + "|"
            }
            if (yB[0] != yB[1] && yB[0] != yB[2] && yB[1] != yB[2])
              for (let BB = 0; BB < 3; BB++) {
                if (dB = WB[yB[BB]], void 0 === dB) {
                  WB[yB[BB]] = UB, dB = UB++;
                  for (let IB = 0; IB < 3; IB++) cB.push(TB[3 * CB[BB] + IB]);
                  if (null !== JB && void 0 !== JB)
                    for (let IB = 0; IB < 4; IB++) zB.push(JB[4 * CB[BB] + IB]);
                  if (null !== IB && void 0 !== IB)
                    for (let ZB = 0; ZB < 2; ZB++) hB.push(IB[2 * CB[BB] + ZB]);
                  if (null !== oB && void 0 !== oB)
                    for (let IB = 0; IB < 4; IB++) FB.push(oB[4 * CB[BB] + IB]);
                  if (null !== GB && void 0 !== GB)
                    for (let IB = 0; IB < 4; IB++) NB.push(GB[4 * CB[BB] + IB]);
                  if (null !== vB && void 0 !== vB)
                    for (let IB = 0; IB < 4; IB++) gB.push(vB[4 * CB[BB] + IB]);
                  if (null !== kB && void 0 !== kB)
                    for (let IB = 0; IB < 4; IB++) qB.push(kB[4 * CB[BB] + IB])
                }
                nB.push(dB)
              }
          }
          const QB = [];
          pB.c.ComputeNormals(cB, nB, QB), BB.positions = cB, BB.indices = nB, BB.normals = QB, null !== IB && void 0 !== IB && (BB.uvs = hB), null !== JB && void 0 !== JB && (BB.colors = zB), null !== oB && void 0 !== oB && (BB.matricesIndices = FB), null !== GB && void 0 !== GB && (BB.matricesWeights = NB), null !== vB && void 0 !== vB && (BB.matricesIndicesExtra = gB), null !== GB && void 0 !== GB && (BB.matricesWeightsExtra = qB), BB.applyToMesh(this, this.isVertexBufferUpdatable(iB.i.PositionKind))
        }
      }
      static _instancedMeshFactory(BB, IB) {
        throw (0, eB.m)("InstancedMesh")
      }
      static _PhysicsImpostorParser(BB, IB, ZB) {
        throw (0, eB.m)("PhysicsImpostor")
      }
      createInstance(BB) {
        const IB = KB._instancedMeshFactory(BB, this);
        return IB.parent = this.parent, IB
      }
      synchronizeInstances() {
        for (let BB = 0; BB < this.instances.length; BB++) {
          this.instances[BB]._syncSubMeshes()
        }
        return this
      }
      optimizeIndices(BB) {
        const IB = this.MTB(),
          ZB = this.getVerticesData(iB.i.PositionKind);
        if (!ZB || !IB) return this;
        const TB = [];
        for (let oB = 0; oB < ZB.length; oB += 3) TB.push(wB.s.FromArray(ZB, oB));
        const JB = [];
        return UB.d.SyncAsyncForLoop(TB.length, 40, (BB => {
          const IB = TB.length - 1 - BB,
            ZB = TB[IB];
          for (let oB = 0; oB < IB; ++oB) {
            const BB = TB[oB];
            if (ZB.equals(BB)) {
              JB[IB] = oB;
              break
            }
          }
        }), (() => {
          for (let BB = 0; BB < IB.length; ++BB) IB[BB] = JB[IB[BB]] || IB[BB];
          const ZB = this.EW.slice(0);
          this.setIndices(IB), this.EW = ZB, BB && BB(this)
        })), this
      }
      serialize() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        BB.name = this.name, BB.id = this.id, BB.uniqueId = this.uniqueId, BB.type = this.getClassName(), CB.b && CB.b.HasTags(this) && (BB.tags = CB.b.GetTags(this)), BB.position = this.position.HTB(), this.rotationQuaternion ? BB.rotationQuaternion = this.rotationQuaternion.HTB() : this.rotation && (BB.rotation = this.rotation.HTB()), BB.ek = this.ek.HTB(), this._postMultiplyPivotMatrix ? BB.pivotMatrix = this.getPivotMatrix().HTB() : BB.localMatrix = this.getPivotMatrix().HTB(), BB.isEnabled = this.isEnabled(!1), BB.isVisible = this.isVisible, BB.infiniteDistance = this.infiniteDistance, BB.pickable = this.tg, BB.receiveShadows = this.receiveShadows, BB.billboardMode = this.billboardMode, BB.visibility = this.visibility, BB.RN = this.RN, BB.checkCollisions = this.checkCollisions, BB.ellipsoid = this.ellipsoid.HTB(), BB.ellipsoidOffset = this.ellipsoidOffset.HTB(), BB.XN = this.XN, BB.isBlocker = this.isBlocker, BB.sideOrientation = this.sideOrientation, this._isWorldMatrixFrozen && (BB.yR = !0), this.parent && this.parent._serializeAsParent(BB), BB.isUnIndexed = this.isUnIndexed;
        const IB = this._geometry;
        if (IB && this.EW) {
          BB.geometryUniqueId = IB.uniqueId, BB.geometryId = IB.id, BB.EW = [];
          for (let IB = 0; IB < this.EW.length; IB++) {
            const ZB = this.EW[IB];
            BB.EW.push({
              materialIndex: ZB.materialIndex,
              verticesStart: ZB.verticesStart,
              verticesCount: ZB.verticesCount,
              indexStart: ZB.indexStart,
              indexCount: ZB.indexCount
            })
          }
        }
        if (this.material ? this.material.doNotSerialize || (BB.materialUniqueId = this.material.uniqueId, BB.materialId = this.material.id) : (this.material = null, BB.materialUniqueId = this._scene.defaultMaterial.uniqueId, BB.materialId = this._scene.defaultMaterial.id), this.morphTargetManager && (BB.morphTargetManagerId = this.morphTargetManager.uniqueId), this.skeleton && (BB.skeletonId = this.skeleton.id, BB.skeletonUniqueId = this.skeleton.uniqueId, BB.numBoneInfluencers = this.numBoneInfluencers), this.JR()._getComponent(uB.c.NAME_PHYSICSENGINE)) {
          const IB = this.getPhysicsImpostor?.();
          IB && (BB.physicsMass = IB.getParam("Wv"), BB.physicsFriction = IB.getParam("friction"), BB.physicsRestitution = IB.getParam("Wv"), BB.physicsImpostor = IB.type)
        }
        this.metadata && (BB.metadata = this.metadata), 0 !== this.meshBlendingTag && (BB.meshBlendingTag = this.meshBlendingTag), BB.instances = [];
        for (let ZB = 0; ZB < this.instances.length; ZB++) {
          const IB = this.instances[ZB];
          if (IB.doNotSerialize) continue;
          const TB = {
            name: IB.name,
            id: IB.id,
            isEnabled: IB.isEnabled(!1),
            isVisible: IB.isVisible,
            tg: IB.tg,
            checkCollisions: IB.checkCollisions,
            position: IB.position.HTB(),
            ek: IB.ek.HTB()
          };
          if (IB.parent && IB.parent._serializeAsParent(TB), IB.rotationQuaternion ? TB.rotationQuaternion = IB.rotationQuaternion.HTB() : IB.rotation && (TB.rotation = IB.rotation.HTB()), this.JR()._getComponent(uB.c.NAME_PHYSICSENGINE)) {
            const BB = IB.getPhysicsImpostor?.();
            BB && (TB.physicsMass = BB.getParam("Wv"), TB.physicsFriction = BB.getParam("friction"), TB.physicsRestitution = BB.getParam("Wv"), TB.physicsImpostor = BB.type)
          }
          IB.metadata && (TB.metadata = IB.metadata), IB.actionManager && (TB.actions = IB.actionManager.serialize(IB.name)), BB.instances.push(TB), mB.b.AppendSerializedAnimations(IB, TB), TB.vq = IB.serializeAnimationRanges()
        }
        if (this._thinInstanceDataStorage.instancesCount && this._thinInstanceDataStorage.matrixData && (BB.thinInstances = {
            instancesCount: this._thinInstanceDataStorage.instancesCount,
            matrixData: Array.from(this._thinInstanceDataStorage.matrixData),
            matrixBufferSize: this._thinInstanceDataStorage.matrixBufferSize,
            enablePicking: this.DIB
          }, this._userThinInstanceBuffersStorage)) {
          const IB = {
            data: {},
            sizes: {},
            strides: {}
          };
          for (const BB in this._userThinInstanceBuffersStorage.data) IB.data[BB] = Array.from(this._userThinInstanceBuffersStorage.data[BB]), IB.sizes[BB] = this._userThinInstanceBuffersStorage.sizes[BB], IB.strides[BB] = this._userThinInstanceBuffersStorage.strides[BB];
          BB.thinInstances.userThinInstance = IB
        }
        return mB.b.AppendSerializedAnimations(this, BB), BB.vq = this.serializeAnimationRanges(), BB.layerMask = this.layerMask, BB.alphaIndex = this.alphaIndex, BB.hasVertexAlpha = this.hasVertexAlpha, BB.overlayAlpha = this.overlayAlpha, BB.overlayColor = this.overlayColor.HTB(), BB.renderOverlay = this.renderOverlay, BB.applyFog = this.applyFog, this.actionManager && (BB.actions = this.actionManager.serialize(this.name)), BB
      }
      _syncGeometryWithMorphTargetManager() {
        if (!this.geometry) return;
        this._markSubMeshesAsAttributesDirty();
        const BB = this._internalAbstractMeshDataInfo._morphTargetManager;
        if (BB && BB.vertexCount) {
          if (BB.vertexCount !== this.getTotalVertices()) return XB.d.Error("Mesh is incompatible with morph targets. Targets and mesh must all have the same vertices count."), void(this.morphTargetManager = null);
          if (BB.isUsingTextureForTargets) return;
          for (let IB = 0; IB < BB.numInfluencers; IB++) {
            const ZB = BB.getActiveTarget(IB),
              TB = ZB.getPositions();
            if (!TB) return void XB.d.Error("Invalid morph target. Target must have positions.");
            this.geometry.setVerticesData(iB.i.PositionKind + IB, TB, !1, 3);
            const JB = ZB.getNormals();
            JB && this.geometry.setVerticesData(iB.i.NormalKind + IB, JB, !1, 3);
            const oB = ZB.getTangents();
            oB && this.geometry.setVerticesData(iB.i.TangentKind + IB, oB, !1, 3);
            const GB = ZB.getUVs();
            GB && this.geometry.setVerticesData(iB.i.UVKind + "_" + IB, GB, !1, 2);
            const vB = ZB.getUV2s();
            vB && this.geometry.setVerticesData(iB.i.UV2Kind + "_" + IB, vB, !1, 2);
            const kB = ZB.getColors();
            kB && this.geometry.setVerticesData(iB.i.ColorKind + IB, kB, !1, 4)
          }
        } else {
          let BB = 0;
          for (; this.geometry.isVerticesDataPresent(iB.i.PositionKind + BB);) this.geometry.removeVerticesData(iB.i.PositionKind + BB), this.geometry.isVerticesDataPresent(iB.i.NormalKind + BB) && this.geometry.removeVerticesData(iB.i.NormalKind + BB), this.geometry.isVerticesDataPresent(iB.i.TangentKind + BB) && this.geometry.removeVerticesData(iB.i.TangentKind + BB), this.geometry.isVerticesDataPresent(iB.i.UVKind + "_" + BB) && this.geometry.removeVerticesData(iB.i.UVKind + "_" + BB), this.geometry.isVerticesDataPresent(iB.i.UV2Kind + "_" + BB) && this.geometry.removeVerticesData(iB.i.UV2Kind + "_" + BB), this.geometry.isVerticesDataPresent(iB.i.ColorKind + BB) && this.geometry.removeVerticesData(iB.i.ColorKind + BB), BB++
        }
      }
      static Parse(BB, IB, ZB) {
        let TB, JB = !1;
        if (BB.type && "LinesMesh" === BB.type ? TB = KB._LinesMeshParser(BB, IB) : BB.type && "GroundMesh" === BB.type ? TB = KB._GroundMeshParser(BB, IB) : BB.type && "GoldbergMesh" === BB.type ? TB = KB._GoldbergMeshParser(BB, IB) : BB.type && "GreasedLineMesh" === BB.type ? TB = KB._GreasedLineMeshParser(BB, IB) : BB.type && "TrailMesh" === BB.type ? TB = KB._TrailMeshParser(BB, IB) : BB.type && "GaussianSplattingMesh" === BB.type ? (TB = BB._isCompound ? KB._GaussianSplattingCompoundMeshParser(BB, IB) : KB._GaussianSplattingMeshParser(BB, IB), JB = !0) : BB.type && "GaussianSplattingPartProxyMesh" === BB.type ? (TB = KB._GaussianSplattingPartProxyMeshParser(BB, IB), JB = !0) : TB = new KB(BB.name, IB), TB.id = BB.id, TB._waitingParsedUniqueId = BB.uniqueId, CB.b && CB.b.AddTagsTo(TB, BB.tags), TB.position = wB.s.FromArray(BB.position), void 0 !== BB.metadata && (TB.metadata = BB.metadata), void 0 !== BB.meshBlendingTag && (TB.meshBlendingTag = BB.meshBlendingTag), BB.rotationQuaternion ? TB.rotationQuaternion = wB.f.FromArray(BB.rotationQuaternion) : BB.rotation && (TB.rotation = wB.s.FromArray(BB.rotation)), TB.ek = wB.s.FromArray(BB.ek), BB.localMatrix ? TB.setPreTransformMatrix(wB.b.FromArray(BB.localMatrix)) : BB.pivotMatrix && TB.setPivotMatrix(wB.b.FromArray(BB.pivotMatrix)), TB.qY(BB.isEnabled), TB.isVisible = BB.isVisible, TB.infiniteDistance = BB.infiniteDistance, TB.RN = !!BB.RN, TB.showBoundingBox = BB.showBoundingBox, TB.showSubMeshesBoundingBox = BB.showSubMeshesBoundingBox, void 0 !== BB.applyFog && (TB.applyFog = BB.applyFog), void 0 !== BB.pickable && (TB.tg = BB.pickable), void 0 !== BB.alphaIndex && (TB.alphaIndex = BB.alphaIndex), TB.receiveShadows = BB.receiveShadows, void 0 !== BB.billboardMode && (TB.billboardMode = BB.billboardMode), void 0 !== BB.visibility && (TB.visibility = BB.visibility), TB.checkCollisions = BB.checkCollisions, TB.XN = !!BB.XN, BB.ellipsoid && (TB.ellipsoid = wB.s.FromArray(BB.ellipsoid)), BB.ellipsoidOffset && (TB.ellipsoidOffset = wB.s.FromArray(BB.ellipsoidOffset)), null != BB.overrideMaterialSideOrientation && (TB.sideOrientation = BB.overrideMaterialSideOrientation), void 0 !== BB.sideOrientation && (TB.sideOrientation = BB.sideOrientation), void 0 !== BB.isBlocker && (TB.isBlocker = BB.isBlocker), TB._shouldGenerateFlatShading = BB.useFlatShading, BB.yR && (TB._waitingData.yR = BB.yR), void 0 !== BB.parentId && (TB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (TB._waitingParentInstanceIndex = BB.parentInstanceIndex), void 0 !== BB.actions && (TB._waitingData.actions = BB.actions), void 0 !== BB.overlayAlpha && (TB.overlayAlpha = BB.overlayAlpha), void 0 !== BB.overlayColor && (TB.overlayColor = OB.c.FromArray(BB.overlayColor)), void 0 !== BB.renderOverlay && (TB.renderOverlay = BB.renderOverlay), TB.isUnIndexed = !!BB.isUnIndexed, TB.hasVertexAlpha = BB.hasVertexAlpha, BB.delayLoadingFile ? (TB.delayLoadState = 4, TB.delayLoadingFile = ZB + BB.delayLoadingFile, TB.buildBoundingInfo(wB.s.FromArray(BB.boundingBoxMinimum), wB.s.FromArray(BB.boundingBoxMaximum)), BB._binaryInfo && (TB._binaryInfo = BB._binaryInfo), TB._delayInfo = [], BB.hasUVs && TB._delayInfo.push(iB.i.UVKind), BB.hasUVs2 && TB._delayInfo.push(iB.i.UV2Kind), BB.hasUVs3 && TB._delayInfo.push(iB.i.UV3Kind), BB.hasUVs4 && TB._delayInfo.push(iB.i.UV4Kind), BB.hasUVs5 && TB._delayInfo.push(iB.i.UV5Kind), BB.hasUVs6 && TB._delayInfo.push(iB.i.UV6Kind), BB.hasColors && TB._delayInfo.push(iB.i.ColorKind), BB.hasMatricesIndices && TB._delayInfo.push(iB.i.MatricesIndicesKind), BB.hasMatricesWeights && TB._delayInfo.push(iB.i.MatricesWeightsKind), TB._delayLoadingFunction = aB.e._ImportGeometry, rB.b.ForceFullSceneLoadingForIncremental && TB._checkDelayState()) : JB || aB.e._ImportGeometry(BB, TB), BB.materialUniqueId ? TB._waitingMaterialId = BB.materialUniqueId : BB.materialId && (TB._waitingMaterialId = BB.materialId), BB.morphTargetManagerId > -1 && (TB._waitingMorphTargetManagerId = BB.morphTargetManagerId), void 0 !== BB.skeletonId && null !== BB.skeletonId && (TB.skeleton = IB.getLastSkeletonById(BB.skeletonId), TB._waitingSkeletonId = BB.skeletonId, BB.numBoneInfluencers && (TB.numBoneInfluencers = BB.numBoneInfluencers)), void 0 !== BB.skeletonUniqueId && null !== BB.skeletonUniqueId && (TB._waitingSkeletonUniqueId = BB.skeletonUniqueId), BB.animations) {
          for (let IB = 0; IB < BB.animations.length; IB++) {
            const ZB = BB.animations[IB],
              JB = (0, LB.e)("BABYLON.Animation");
            JB && TB.animations.push(JB.Parse(ZB))
          }
          YB.e.ParseAnimationRanges(TB, BB, IB)
        }
        if (BB.autoAnimate && IB.beginAnimation(TB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), BB.layerMask && !isNaN(BB.layerMask) ? TB.layerMask = Math.abs(parseInt(BB.layerMask)) : TB.layerMask = 268435455, BB.physicsImpostor && (TB.physicsImpostor = KB._PhysicsImpostorParser(IB, TB, BB)), BB.lodMeshIds && (TB._waitingData.lods = {
            ids: BB.lodMeshIds,
            distances: BB.lodDistances ? BB.lodDistances : null,
            coverages: BB.lodCoverages ? BB.lodCoverages : null
          }), BB.instances)
          for (let oB = 0; oB < BB.instances.length; oB++) {
            const ZB = BB.instances[oB],
              JB = TB.createInstance(ZB.name);
            if (ZB.id && (JB.id = ZB.id), CB.b && (ZB.tags ? CB.b.AddTagsTo(JB, ZB.tags) : CB.b.AddTagsTo(JB, BB.tags)), JB.position = wB.s.FromArray(ZB.position), void 0 !== ZB.metadata && (JB.metadata = ZB.metadata), void 0 !== ZB.parentId && (JB._waitingParentId = ZB.parentId), void 0 !== ZB.parentInstanceIndex && (JB._waitingParentInstanceIndex = ZB.parentInstanceIndex), void 0 !== ZB.isEnabled && null !== ZB.isEnabled && JB.qY(ZB.isEnabled), void 0 !== ZB.isVisible && null !== ZB.isVisible && (JB.isVisible = ZB.isVisible), void 0 !== ZB.tg && null !== ZB.tg && (JB.tg = ZB.tg), ZB.rotationQuaternion ? JB.rotationQuaternion = wB.f.FromArray(ZB.rotationQuaternion) : ZB.rotation && (JB.rotation = wB.s.FromArray(ZB.rotation)), JB.ek = wB.s.FromArray(ZB.ek), void 0 != ZB.checkCollisions && null != ZB.checkCollisions && (JB.checkCollisions = ZB.checkCollisions), void 0 != ZB.pickable && null != ZB.pickable && (JB.tg = ZB.pickable), void 0 != ZB.showBoundingBox && null != ZB.showBoundingBox && (JB.showBoundingBox = ZB.showBoundingBox), void 0 != ZB.showSubMeshesBoundingBox && null != ZB.showSubMeshesBoundingBox && (JB.showSubMeshesBoundingBox = ZB.showSubMeshesBoundingBox), void 0 != ZB.alphaIndex && null != ZB.showSubMeshesBoundingBox && (JB.alphaIndex = ZB.alphaIndex), ZB.physicsImpostor && (JB.physicsImpostor = KB._PhysicsImpostorParser(IB, JB, ZB)), void 0 !== ZB.actions && (JB._waitingData.actions = ZB.actions), ZB.animations) {
              for (let BB = 0; BB < ZB.animations.length; BB++) {
                const IB = ZB.animations[BB],
                  TB = (0, LB.e)("BABYLON.Animation");
                TB && JB.animations.push(TB.Parse(IB))
              }
              YB.e.ParseAnimationRanges(JB, ZB, IB), ZB.autoAnimate && IB.beginAnimation(JB, ZB.autoAnimateFrom, ZB.autoAnimateTo, ZB.autoAnimateLoop, ZB.autoAnimateSpeed || 1)
            }
          }
        if (BB.thinInstances) {
          const IB = BB.thinInstances;
          if (TB.DIB = !!IB.enablePicking, IB.matrixData ? (TB.ZBB("matrix", new Float32Array(IB.matrixData), 16, !1), TB._thinInstanceDataStorage.matrixBufferSize = IB.matrixBufferSize, TB._thinInstanceDataStorage.instancesCount = IB.instancesCount) : TB._thinInstanceDataStorage.matrixBufferSize = IB.matrixBufferSize, BB.thinInstances.userThinInstance) {
            const IB = BB.thinInstances.userThinInstance;
            for (const BB in IB.data) TB.ZBB(BB, new Float32Array(IB.data[BB]), IB.strides[BB], !1), TB._userThinInstanceBuffersStorage.sizes[BB] = IB.sizes[BB]
          }
        }
        return TB
      }
      setPositionsForCPUSkinning() {
        const BB = this._internalMeshDataInfo;
        if (!BB._sourcePositions) {
          const IB = this.getVerticesData(iB.i.PositionKind);
          if (!IB) return BB._sourcePositions;
          BB._sourcePositions = new Float32Array(IB), this.isVertexBufferUpdatable(iB.i.PositionKind) || this.setVerticesData(iB.i.PositionKind, IB, !0)
        }
        return BB._sourcePositions
      }
      setNormalsForCPUSkinning() {
        const BB = this._internalMeshDataInfo;
        if (!BB._sourceNormals) {
          const IB = this.getVerticesData(iB.i.NormalKind);
          if (!IB) return BB._sourceNormals;
          BB._sourceNormals = new Float32Array(IB), this.isVertexBufferUpdatable(iB.i.NormalKind) || this.setVerticesData(iB.i.NormalKind, IB, !0)
        }
        return BB._sourceNormals
      }
      applySkeleton(BB) {
        if (!this.geometry) return this;
        if (this.geometry._softwareSkinningFrameId == this.JR().getFrameId()) return this;
        if (this.geometry._softwareSkinningFrameId = this.JR().getFrameId(), !this.isVerticesDataPresent(iB.i.PositionKind)) return this;
        if (!this.isVerticesDataPresent(iB.i.MatricesIndicesKind)) return this;
        if (!this.isVerticesDataPresent(iB.i.MatricesWeightsKind)) return this;
        const IB = this.isVerticesDataPresent(iB.i.NormalKind),
          ZB = this._internalMeshDataInfo;
        if (!ZB._sourcePositions) {
          const BB = this.EW.slice();
          this.setPositionsForCPUSkinning(), this.EW = BB
        }
        IB && !ZB._sourceNormals && this.setNormalsForCPUSkinning();
        let TB = this.getVerticesData(iB.i.PositionKind);
        if (!TB) return this;
        TB instanceof Float32Array || (TB = new Float32Array(TB));
        let JB = this.getVerticesData(iB.i.NormalKind);
        if (IB) {
          if (!JB) return this;
          JB instanceof Float32Array || (JB = new Float32Array(JB))
        }
        const oB = this.getVerticesData(iB.i.MatricesIndicesKind),
          GB = this.getVerticesData(iB.i.MatricesWeightsKind);
        if (!GB || !oB) return this;
        const vB = this.numBoneInfluencers > 4,
          kB = vB ? this.getVerticesData(iB.i.MatricesIndicesExtraKind) : null,
          cB = vB ? this.getVerticesData(iB.i.MatricesWeightsExtraKind) : null,
          nB = BB.getTransformMatrices(this),
          hB = wB.s.Zero(),
          zB = new wB.b,
          FB = new wB.b;
        let NB, gB = 0;
        for (let qB = 0; qB < TB.length; qB += 3, gB += 4) {
          let BB;
          for (NB = 0; NB < 4; NB++) BB = GB[gB + NB], BB > 0 && (wB.b.FromFloat32ArrayToRefScaled(nB, Math.floor(16 * oB[gB + NB]), BB, FB), zB.addToSelf(FB));
          if (vB)
            for (NB = 0; NB < 4; NB++) BB = cB[gB + NB], BB > 0 && (wB.b.FromFloat32ArrayToRefScaled(nB, Math.floor(16 * kB[gB + NB]), BB, FB), zB.addToSelf(FB));
          wB.s.TransformCoordinatesFromFloatsToRef(ZB._sourcePositions[qB], ZB._sourcePositions[qB + 1], ZB._sourcePositions[qB + 2], zB, hB), hB.toArray(TB, qB), IB && (wB.s.TransformNormalFromFloatsToRef(ZB._sourceNormals[qB], ZB._sourceNormals[qB + 1], ZB._sourceNormals[qB + 2], zB, hB), hB.toArray(JB, qB)), zB.reset()
        }
        return this.updateVerticesData(iB.i.PositionKind, TB), IB && this.updateVerticesData(iB.i.NormalKind, JB), this
      }
      static MinMax(BB) {
        let IB = null,
          ZB = null;
        for (const TB of BB) {
          const BB = TB.qm().boundingBox;
          IB && ZB ? (IB.minimizeInPlace(BB.minimumWorld), ZB.maximizeInPlace(BB.maximumWorld)) : (IB = BB.minimumWorld.clone(), ZB = BB.maximumWorld.clone())
        }
        return IB && ZB ? {
          min: IB,
          max: ZB
        } : {
          min: wB.s.Zero(),
          max: wB.s.Zero()
        }
      }
      static Center(BB) {
        const IB = BB instanceof Array ? KB.MinMax(BB) : BB;
        return wB.s.Center(IB.min, IB.max)
      }
      static MergeMeshes(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0;
        return (0, QB.i)(KB._MergeMeshesCoroutine(BB, IB, ZB, TB, JB, oB, !1))
      }
      static async MergeMeshesAsync(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 ? arguments[4] : void 0,
          oB = arguments.length > 5 ? arguments[5] : void 0;
        return await (0, QB.h)(KB._MergeMeshesCoroutine(BB, IB, ZB, TB, JB, oB, !0), (0, QB.e)())
      }
      static * _MergeMeshesCoroutine(BB) {
        let IB, ZB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          TB = arguments.length > 2 ? arguments[2] : void 0,
          JB = arguments.length > 3 ? arguments[3] : void 0,
          oB = arguments.length > 4 ? arguments[4] : void 0,
          GB = arguments.length > 5 ? arguments[5] : void 0,
          vB = arguments.length > 6 ? arguments[6] : void 0;
        if (0 === (BB = BB.filter(Boolean)).length) return null;
        if (!TB) {
          let ZB = 0;
          for (IB = 0; IB < BB.length; IB++)
            if (ZB += BB[IB].getTotalVertices(), ZB >= 65536) return XB.d.Warn("Cannot merge meshes because resulting mesh will have more than 65536 vertices. Please use allow32BitsIndices = true to use 32 bits indices"), null
        }
        const kB = BB[0];
        GB && (oB = !1, BB.sort(((BB, IB) => (BB.material?.uniqueId ?? -1) - (IB.material?.uniqueId ?? -1))));
        const cB = new Array,
          nB = new Array,
          hB = new Array,
          zB = BB[0].sideOrientation;
        for (IB = 0; IB < BB.length; IB++) {
          const ZB = BB[IB];
          if (ZB.vR) return XB.d.Warn("Cannot merge instance meshes."), null;
          if (zB !== ZB.sideOrientation) return XB.d.Warn("Cannot merge meshes with different sideOrientation values."), null;
          if (oB || GB) {
            const BB = hB.reduce(((BB, IB) => Math.max(BB, IB.start + IB.count)), 0);
            if (GB)
              if (ZB.material) {
                const IB = ZB.material;
                if (IB instanceof RB.c) {
                  for (let BB = 0; BB < IB.JBB.length; BB++) cB.indexOf(IB.JBB[BB]) < 0 && cB.push(IB.JBB[BB]);
                  for (let TB = 0; TB < ZB.EW.length; TB++) nB.push(cB.indexOf(IB.JBB[ZB.EW[TB].materialIndex])), hB.push({
                    start: BB + ZB.EW[TB].indexStart,
                    count: ZB.EW[TB].indexCount
                  })
                } else {
                  cB.indexOf(IB) < 0 && cB.push(IB);
                  for (let TB = 0; TB < ZB.EW.length; TB++) nB.push(cB.indexOf(IB)), hB.push({
                    start: BB + ZB.EW[TB].indexStart,
                    count: ZB.EW[TB].indexCount
                  })
                }
              } else
                for (let IB = 0; IB < ZB.EW.length; IB++) nB.push(0), hB.push({
                  start: BB + ZB.EW[IB].indexStart,
                  count: ZB.EW[IB].indexCount
                });
            else hB.push({
              start: BB,
              count: ZB.getTotalIndices()
            })
          }
        }
        if (GB && hB.length > 1) {
          let BB = 0;
          for (let IB = 1; IB < hB.length; IB++) {
            const ZB = hB[BB],
              TB = hB[IB];
            nB[IB] === nB[BB] && ZB.start + ZB.count === TB.start ? ZB.count += TB.count : (BB++, hB[BB] = TB, nB[BB] = nB[IB])
          }
          hB.length = BB + 1, nB.length = BB + 1
        }
        const FB = BB => {
            const IB = BB.computeWorldMatrix(!0);
            return {
              vertexData: pB.c.ExtractFromMesh(BB, !1, !1),
              transform: IB
            }
          },
          {
            vertexData: NB,
            transform: gB
          } = FB(BB[0]);
        vB && (yield);
        const qB = new Array(BB.length - 1);
        for (let QB = 1; QB < BB.length; QB++) qB[QB - 1] = FB(BB[QB]), vB && (yield);
        const yB = NB._mergeCoroutine(gB, qB, TB, vB, !ZB);
        let UB = yB.next();
        for (; !UB.done;) vB && (yield), UB = yB.next();
        const WB = UB.value;
        JB || (JB = new KB(kB.name + "_merged", kB.JR()));
        const dB = WB._applyToCoroutine(JB, void 0, vB);
        let CB = dB.next();
        for (; !CB.done;) vB && (yield), CB = dB.next();
        if (JB.checkCollisions = kB.checkCollisions, JB.sideOrientation = kB.sideOrientation, ZB)
          for (IB = 0; IB < BB.length; IB++) BB[IB].dispose();
        if (oB || GB) {
          for (JB.releaseSubMeshes(), IB = 0; IB < hB.length;) MB.e.CreateFromIndices(0, hB[IB].start, hB[IB].count, JB, void 0, !1), IB++;
          for (const BB of JB.EW) BB.refreshBoundingInfo();
          JB.computeWorldMatrix(!0)
        }
        if (GB) {
          const BB = new RB.c(kB.name + "_merged", kB.JR());
          BB.JBB = cB;
          for (let IB = 0; IB < JB.EW.length; IB++) JB.EW[IB].materialIndex = nB[IB];
          JB.material = BB
        } else JB.material = kB.material;
        return JB
      }
      K3(BB) {
        BB._indexInSourceMeshInstanceArray = this.instances.length, this.instances.push(BB)
      }
      Z6(BB) {
        const IB = BB._indexInSourceMeshInstanceArray;
        if (-1 != IB) {
          if (IB !== this.instances.length - 1) {
            const BB = this.instances[this.instances.length - 1];
            this.instances[IB] = BB, BB._indexInSourceMeshInstanceArray = IB
          }
          BB._indexInSourceMeshInstanceArray = -1, this.instances.pop()
        }
      }
      _shouldConvertRHS() {
        return this._scene.useRightHandedSystem && this.sideOrientation === jB.e.CounterClockWiseSideOrientation
      }
      _getRenderingFillMode(BB) {
        const IB = this.JR();
        return IB.forcePointsCloud ? jB.e.PointFillMode : IB.forceWireframe ? jB.e.WireFrameFillMode : this.overrideRenderingFillMode ?? BB
      }
      setMaterialByID(BB) {
        return this.setMaterialById(BB)
      }
      static CreateRibbon(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDisc(BB, IB, ZB, TB, JB, oB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateBox(BB, IB, ZB, TB, JB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateSphere(BB, IB, ZB, TB, JB, oB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateHemisphere(BB, IB, ZB, TB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCylinder(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorus(BB, IB, ZB, TB, JB, oB, GB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTorusKnot(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLines(BB, IB, ZB, TB, JB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDashedLines(BB, IB, ZB, TB, JB, oB, GB, vB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolygon(BB, IB, ZB, TB, JB, oB, GB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudePolygon(BB, IB, ZB, TB, JB, oB, GB, vB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShape(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtrudeShapeCustom(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateLathe(BB, IB, ZB, TB, JB, oB, GB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePlane(BB, IB, ZB, TB, JB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGround(BB, IB, ZB, TB, JB, oB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTiledGround(BB, IB, ZB, TB, JB, oB, GB, vB, kB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateGroundFromHeightMap(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateTube(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreatePolyhedron(BB, IB, ZB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateIcoSphere(BB, IB, ZB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateDecal(BB, IB, ZB, TB, JB, oB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static CreateCapsule(BB, IB, ZB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
      static ExtendToGoldberg(BB) {
        throw new Error("Import MeshBuilder to populate this function")
      }
    }
    KB.FRONTSIDE = pB.c.FRONTSIDE, KB.BACKSIDE = pB.c.BACKSIDE, KB.DOUBLESIDE = pB.c.DOUBLESIDE, KB.DEFAULTSIDE = pB.c.DEFAULTSIDE, KB.NO_CAP = 0, KB.CAP_START = 1, KB.CAP_END = 2, KB.CAP_ALL = 3, KB.NO_FLIP = 0, KB.FLIP_TILE = 1, KB.ROTATE_TILE = 2, KB.FLIP_ROW = 3, KB.ROTATE_ROW = 4, KB.FLIP_N_ROTATE_TILE = 5, KB.FLIP_N_ROTATE_ROW = 6, KB.CENTER = 0, KB.LEFT = 1, KB.RIGHT = 2, KB.TOP = 3, KB.BOTTOM = 4, KB.INSTANCEDMESH_SORT_TRANSPARENT = !1, KB._GroundMeshParser = (BB, IB) => {
      throw (0, eB.m)("GroundMesh")
    }, KB._GoldbergMeshParser = (BB, IB) => {
      throw (0, eB.m)("GoldbergMesh")
    }, KB._LinesMeshParser = (BB, IB) => {
      throw (0, eB.m)("LinesMesh")
    }, KB._GreasedLineMeshParser = (BB, IB) => {
      throw (0, eB.m)("GreasedLineMesh")
    }, KB._GreasedLineRibbonMeshParser = (BB, IB) => {
      throw (0, eB.m)("GreasedLineRibbonMesh")
    }, KB._TrailMeshParser = (BB, IB) => {
      throw (0, eB.m)("TrailMesh")
    }, KB._GaussianSplattingMeshParser = (BB, IB) => {
      throw (0, eB.m)("GaussianSplattingMesh")
    }, KB._GaussianSplattingPartProxyMeshParser = (BB, IB) => {
      throw (0, eB.m)("GaussianSplattingPartProxyMesh")
    }, KB._GaussianSplattingCompoundMeshParser = (BB, IB) => {
      throw (0, eB.m)("GaussianSplattingCompoundMesh")
    };
    let VB = !1;

    function SB() {
      VB || (VB = !0, (0, LB.i)("BABYLON.Mesh", KB))
    }(TB = KB.prototype).Im ?? (TB.Im = (0, eB.j)("Mesh", "Im")), (JB = KB.prototype).simplify ?? (JB.simplify = (0, eB.j)("Mesh", "simplify")), (oB = KB.prototype).thinInstanceAdd ?? (oB.thinInstanceAdd = (0, eB.j)("Mesh", "thinInstanceAdd")), (GB = KB.prototype).thinInstanceAddSelf ?? (GB.thinInstanceAddSelf = (0, eB.j)("Mesh", "thinInstanceAddSelf")), (vB = KB.prototype).thinInstanceRegisterAttribute ?? (vB.thinInstanceRegisterAttribute = (0, eB.j)("Mesh", "thinInstanceRegisterAttribute")), (kB = KB.prototype).thinInstanceSetMatrixAt ?? (kB.thinInstanceSetMatrixAt = (0, eB.j)("Mesh", "thinInstanceSetMatrixAt")), (cB = KB.prototype).thinInstanceSetAttributeAt ?? (cB.thinInstanceSetAttributeAt = (0, eB.j)("Mesh", "thinInstanceSetAttributeAt")), (nB = KB.prototype).ZBB ?? (nB.ZBB = (0, eB.j)("Mesh", "ZBB")), (hB = KB.prototype).thinInstanceGetWorldMatrices ?? (hB.thinInstanceGetWorldMatrices = (0, eB.j)("Mesh", "thinInstanceGetWorldMatrices")), (zB = KB.prototype).M6 ?? (zB.M6 = (0, eB.j)("Mesh", "M6")), (FB = KB.prototype).thinInstancePartialBufferUpdate ?? (FB.thinInstancePartialBufferUpdate = (0, eB.j)("Mesh", "thinInstancePartialBufferUpdate")), (NB = KB.prototype).thinInstanceRefreshBoundingInfo ?? (NB.thinInstanceRefreshBoundingInfo = (0, eB.j)("Mesh", "thinInstanceRefreshBoundingInfo")), (gB = KB.prototype).getEmittedParticleSystems ?? (gB.getEmittedParticleSystems = (0, eB.j)("Mesh", "getEmittedParticleSystems")), (qB = KB.prototype).getHierarchyEmittedParticleSystems ?? (qB.getHierarchyEmittedParticleSystems = (0, eB.j)("Mesh", "getHierarchyEmittedParticleSystems")), Object.getOwnPropertyDescriptor(KB.prototype, "edgesShareWithInstances") || Object.defineProperty(KB.prototype, "edgesShareWithInstances", (0, eB.g)("Mesh", "edgesShareWithInstances")), Object.getOwnPropertyDescriptor(KB.prototype, "DIB") || Object.defineProperty(KB.prototype, "DIB", (0, eB.g)("Mesh", "DIB")), Object.getOwnPropertyDescriptor(KB.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation") || Object.defineProperty(KB.prototype, "thinInstanceAllowAutomaticStaticBufferRecreation", (0, eB.g)("Mesh", "thinInstanceAllowAutomaticStaticBufferRecreation")), Object.getOwnPropertyDescriptor(KB.prototype, "B3") || Object.defineProperty(KB.prototype, "B3", (0, eB.g)("Mesh", "B3"))
  },
  40463: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => NB
    });
    var TB = ZB(40061),
      JB = ZB(37120),
      oB = ZB(40188),
      GB = ZB(39931),
      vB = ZB(37311),
      kB = ZB(38718),
      cB = ZB(40065),
      nB = ZB(40454),
      hB = ZB(40122),
      zB = ZB(40341);
    class FB {}
    let NB = (() => {
      var BB;
      let IB, ZB, NB, gB, qB = [];
      return BB = class {
        constructor() {
          this.uniqueId = 0, this.metadata = {}, this._applyTo = (0, nB.g)(this._applyToCoroutine.bind(this)), this.uniqueId = BB._UniqueIdGenerator, BB._UniqueIdGenerator++
        }
        set(BB, IB) {
          switch (BB.length || kB.d.Warn(`Setting vertex data kind '${IB}' with an empty array`), IB) {
            case oB.i.PositionKind:
              this.positions = BB;
              break;
            case oB.i.NormalKind:
              this.normals = BB;
              break;
            case oB.i.TangentKind:
              this.tangents = BB;
              break;
            case oB.i.UVKind:
              this.uvs = BB;
              break;
            case oB.i.UV2Kind:
              this.uvs2 = BB;
              break;
            case oB.i.UV3Kind:
              this.uvs3 = BB;
              break;
            case oB.i.UV4Kind:
              this.uvs4 = BB;
              break;
            case oB.i.UV5Kind:
              this.uvs5 = BB;
              break;
            case oB.i.UV6Kind:
              this.uvs6 = BB;
              break;
            case oB.i.ColorKind:
              this.colors = BB;
              break;
            case oB.i.MatricesIndicesKind:
              this.matricesIndices = BB;
              break;
            case oB.i.MatricesWeightsKind:
              this.matricesWeights = BB;
              break;
            case oB.i.MatricesIndicesExtraKind:
              this.matricesIndicesExtra = BB;
              break;
            case oB.i.MatricesWeightsExtraKind:
              this.matricesWeightsExtra = BB
          }
        }
        applyToMesh(BB, IB) {
          return this._applyTo(BB, IB, !1), this
        }
        applyToGeometry(BB, IB) {
          return this._applyTo(BB, IB, !1), this
        }
        updateMesh(BB) {
          return this._update(BB), this
        }
        updateGeometry(BB) {
          return this._update(BB), this
        }* _applyToCoroutine(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZB = arguments.length > 2 ? arguments[2] : void 0;
          if (this.positions && (BB.setVerticesData(oB.i.PositionKind, this.positions, IB), ZB && (yield)), this.normals && (BB.setVerticesData(oB.i.NormalKind, this.normals, IB), ZB && (yield)), this.tangents && (BB.setVerticesData(oB.i.TangentKind, this.tangents, IB), ZB && (yield)), this.uvs && (BB.setVerticesData(oB.i.UVKind, this.uvs, IB), ZB && (yield)), this.uvs2 && (BB.setVerticesData(oB.i.UV2Kind, this.uvs2, IB), ZB && (yield)), this.uvs3 && (BB.setVerticesData(oB.i.UV3Kind, this.uvs3, IB), ZB && (yield)), this.uvs4 && (BB.setVerticesData(oB.i.UV4Kind, this.uvs4, IB), ZB && (yield)), this.uvs5 && (BB.setVerticesData(oB.i.UV5Kind, this.uvs5, IB), ZB && (yield)), this.uvs6 && (BB.setVerticesData(oB.i.UV6Kind, this.uvs6, IB), ZB && (yield)), this.colors) {
            const TB = this.positions && this.colors.length === this.positions.length ? 3 : 4;
            BB.setVerticesData(oB.i.ColorKind, this.colors, IB, TB), this.hasVertexAlpha && void 0 !== BB.hasVertexAlpha && (BB.hasVertexAlpha = !0), ZB && (yield)
          }
          if (this.matricesIndices && (BB.setVerticesData(oB.i.MatricesIndicesKind, this.matricesIndices, IB), ZB && (yield)), this.matricesWeights && (BB.setVerticesData(oB.i.MatricesWeightsKind, this.matricesWeights, IB), ZB && (yield)), this.matricesIndicesExtra && (BB.setVerticesData(oB.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, IB), ZB && (yield)), this.matricesWeightsExtra && (BB.setVerticesData(oB.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, IB), ZB && (yield)), this.indices ? (BB.setIndices(this.indices, null, IB), ZB && (yield)) : BB.setIndices([], null), BB.EW && this.materialInfos && this.materialInfos.length > 1) {
            const IB = BB;
            IB.EW = [];
            for (const BB of this.materialInfos) new zB.e(BB.materialIndex, BB.verticesStart, BB.verticesCount, BB.indexStart, BB.indexCount, IB)
          }
          return this
        }
        _update(BB, IB, ZB) {
          return this.positions && BB.updateVerticesData(oB.i.PositionKind, this.positions, IB, ZB), this.normals && BB.updateVerticesData(oB.i.NormalKind, this.normals, IB, ZB), this.tangents && BB.updateVerticesData(oB.i.TangentKind, this.tangents, IB, ZB), this.uvs && BB.updateVerticesData(oB.i.UVKind, this.uvs, IB, ZB), this.uvs2 && BB.updateVerticesData(oB.i.UV2Kind, this.uvs2, IB, ZB), this.uvs3 && BB.updateVerticesData(oB.i.UV3Kind, this.uvs3, IB, ZB), this.uvs4 && BB.updateVerticesData(oB.i.UV4Kind, this.uvs4, IB, ZB), this.uvs5 && BB.updateVerticesData(oB.i.UV5Kind, this.uvs5, IB, ZB), this.uvs6 && BB.updateVerticesData(oB.i.UV6Kind, this.uvs6, IB, ZB), this.colors && BB.updateVerticesData(oB.i.ColorKind, this.colors, IB, ZB), this.matricesIndices && BB.updateVerticesData(oB.i.MatricesIndicesKind, this.matricesIndices, IB, ZB), this.matricesWeights && BB.updateVerticesData(oB.i.MatricesWeightsKind, this.matricesWeights, IB, ZB), this.matricesIndicesExtra && BB.updateVerticesData(oB.i.MatricesIndicesExtraKind, this.matricesIndicesExtra, IB, ZB), this.matricesWeightsExtra && BB.updateVerticesData(oB.i.MatricesWeightsExtraKind, this.matricesWeightsExtra, IB, ZB), this.indices && BB.setIndices(this.indices, null), this
        }
        static _TransformVector3Coordinates(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const oB = JB.m.rN[0],
            GB = JB.m.rN[1];
          for (let vB = ZB; vB < ZB + TB; vB += 3) JB.s.FromArrayToRef(BB, vB, oB), JB.s.TransformCoordinatesToRef(oB, IB, GB), BB[vB] = GB.x, BB[vB + 1] = GB.y, BB[vB + 2] = GB.z
        }
        static _TransformVector3Normals(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const oB = JB.m.rN[0],
            GB = JB.m.rN[1];
          for (let vB = ZB; vB < ZB + TB; vB += 3) JB.s.FromArrayToRef(BB, vB, oB), JB.s.TransformNormalToRef(oB, IB, GB), BB[vB] = GB.x, BB[vB + 1] = GB.y, BB[vB + 2] = GB.z
        }
        static _TransformVector4Normals(BB, IB) {
          let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BB.length;
          const oB = JB.m.Vector4[0],
            GB = JB.m.Vector4[1];
          for (let vB = ZB; vB < ZB + TB; vB += 4) JB.t.FromArrayToRef(BB, vB, oB), JB.t.TransformNormalToRef(oB, IB, GB), BB[vB] = GB.x, BB[vB + 1] = GB.y, BB[vB + 2] = GB.z, BB[vB + 3] = GB.w
        }
        static _FlipFaces(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : BB.length;
          for (let TB = IB; TB < IB + ZB; TB += 3) {
            const IB = BB[TB + 1];
            BB[TB + 1] = BB[TB + 2], BB[TB + 2] = IB
          }
        }
        transform(IB) {
          const ZB = IB.determinant() < 0;
          return this.positions && BB._TransformVector3Coordinates(this.positions, IB), this.normals && BB._TransformVector3Normals(this.normals, IB), this.tangents && BB._TransformVector4Normals(this.tangents, IB), ZB && this.indices && BB._FlipFaces(this.indices), this
        }
        splitBasedOnMaterialID() {
          if (!this.materialInfos || this.materialInfos.length < 2) return [this];
          const IB = [];
          for (const ZB of this.materialInfos) {
            const TB = new BB;
            if (this.positions && (TB.positions = this.positions.slice(3 * ZB.verticesStart, 3 * (ZB.verticesCount + ZB.verticesStart))), this.normals && (TB.normals = this.normals.slice(3 * ZB.verticesStart, 3 * (ZB.verticesCount + ZB.verticesStart))), this.tangents && (TB.tangents = this.tangents.slice(4 * ZB.verticesStart, 4 * (ZB.verticesCount + ZB.verticesStart))), this.colors && (TB.colors = this.colors.slice(4 * ZB.verticesStart, 4 * (ZB.verticesCount + ZB.verticesStart))), this.uvs && (TB.uvs = this.uvs.slice(2 * ZB.verticesStart, 2 * (ZB.verticesCount + ZB.verticesStart))), this.uvs2 && (TB.uvs2 = this.uvs2.slice(2 * ZB.verticesStart, 2 * (ZB.verticesCount + ZB.verticesStart))), this.uvs3 && (TB.uvs3 = this.uvs3.slice(2 * ZB.verticesStart, 2 * (ZB.verticesCount + ZB.verticesStart))), this.uvs4 && (TB.uvs4 = this.uvs4.slice(2 * ZB.verticesStart, 2 * (ZB.verticesCount + ZB.verticesStart))), this.uvs5 && (TB.uvs5 = this.uvs5.slice(2 * ZB.verticesStart, 2 * (ZB.verticesCount + ZB.verticesStart))), this.uvs6 && (TB.uvs6 = this.uvs6.slice(2 * ZB.verticesStart, 2 * (ZB.verticesCount + ZB.verticesStart))), this.matricesIndices && (TB.matricesIndices = this.matricesIndices.slice(4 * ZB.verticesStart, 4 * (ZB.verticesCount + ZB.verticesStart))), this.matricesIndicesExtra && (TB.matricesIndicesExtra = this.matricesIndicesExtra.slice(4 * ZB.verticesStart, 4 * (ZB.verticesCount + ZB.verticesStart))), this.matricesWeights && (TB.matricesWeights = this.matricesWeights.slice(4 * ZB.verticesStart, 4 * (ZB.verticesCount + ZB.verticesStart))), this.matricesWeightsExtra && (TB.matricesWeightsExtra = this.matricesWeightsExtra.slice(4 * ZB.verticesStart, 4 * (ZB.verticesCount + ZB.verticesStart))), this.indices) {
              TB.indices = [];
              for (let BB = ZB.indexStart; BB < ZB.indexStart + ZB.indexCount; BB++) TB.indices.push(this.indices[BB] - ZB.verticesStart)
            }
            const JB = new FB;
            JB.indexStart = 0, JB.indexCount = TB.indices ? TB.indices.length : 0, JB.materialIndex = ZB.materialIndex, JB.verticesStart = 0, JB.verticesCount = (TB.positions ? TB.positions.length : 0) / 3, TB.materialInfos = [JB], IB.push(TB)
          }
          return IB
        }
        merge(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          const oB = Array.isArray(BB) ? BB.map((BB => ({
            vertexData: BB
          }))) : [{
            vertexData: BB
          }];
          return (0, nB.i)(this._mergeCoroutine(void 0, oB, IB, !1, ZB, TB, JB))
        }* _mergeCoroutine(IB, ZB) {
          let TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            JB = arguments.length > 3 ? arguments[3] : void 0,
            GB = arguments.length > 4 ? arguments[4] : void 0,
            vB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
            kB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          this._validate();
          let cB = ZB.map((BB => BB.vertexData)),
            nB = this;
          if (kB)
            for (const BB of cB) BB && (BB._validate(), !this.normals && BB.normals && (this.normals = new Float32Array(this.positions.length)), !this.tangents && BB.tangents && (this.tangents = new Float32Array(this.positions.length / 3 * 4)), !this.uvs && BB.uvs && (this.uvs = new Float32Array(this.positions.length / 3 * 2)), !this.uvs2 && BB.uvs2 && (this.uvs2 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs3 && BB.uvs3 && (this.uvs3 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs4 && BB.uvs4 && (this.uvs4 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs5 && BB.uvs5 && (this.uvs5 = new Float32Array(this.positions.length / 3 * 2)), !this.uvs6 && BB.uvs6 && (this.uvs6 = new Float32Array(this.positions.length / 3 * 2)), !this.colors && BB.colors && (this.colors = new Float32Array(this.positions.length / 3 * 4), this.colors.fill(1)), !this.matricesIndices && BB.matricesIndices && (this.matricesIndices = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeights && BB.matricesWeights && (this.matricesWeights = new Float32Array(this.positions.length / 3 * 4)), !this.matricesIndicesExtra && BB.matricesIndicesExtra && (this.matricesIndicesExtra = new Float32Array(this.positions.length / 3 * 4)), !this.matricesWeightsExtra && BB.matricesWeightsExtra && (this.matricesWeightsExtra = new Float32Array(this.positions.length / 3 * 4)));
          for (const BB of cB)
            if (BB)
              if (kB) this.normals && !BB.normals && (BB.normals = new Float32Array(BB.positions.length)), this.tangents && !BB.tangents && (BB.tangents = new Float32Array(BB.positions.length / 3 * 4)), this.uvs && !BB.uvs && (BB.uvs = new Float32Array(BB.positions.length / 3 * 2)), this.uvs2 && !BB.uvs2 && (BB.uvs2 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs3 && !BB.uvs3 && (BB.uvs3 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs4 && !BB.uvs4 && (BB.uvs4 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs5 && !BB.uvs5 && (BB.uvs5 = new Float32Array(BB.positions.length / 3 * 2)), this.uvs6 && !BB.uvs6 && (BB.uvs6 = new Float32Array(BB.positions.length / 3 * 2)), this.colors && !BB.colors && (BB.colors = new Float32Array(BB.positions.length / 3 * 4), BB.colors.fill(1)), this.matricesIndices && !BB.matricesIndices && (BB.matricesIndices = new Float32Array(BB.positions.length / 3 * 4)), this.matricesWeights && !BB.matricesWeights && (BB.matricesWeights = new Float32Array(BB.positions.length / 3 * 4)), this.matricesIndicesExtra && !BB.matricesIndicesExtra && (BB.matricesIndicesExtra = new Float32Array(BB.positions.length / 3 * 4)), this.matricesWeightsExtra && !BB.matricesWeightsExtra && (BB.matricesWeightsExtra = new Float32Array(BB.positions.length / 3 * 4));
              else if (BB._validate(), !this.normals !== !BB.normals || !this.tangents !== !BB.tangents || !this.uvs !== !BB.uvs || !this.uvs2 !== !BB.uvs2 || !this.uvs3 !== !BB.uvs3 || !this.uvs4 !== !BB.uvs4 || !this.uvs5 !== !BB.uvs5 || !this.uvs6 !== !BB.uvs6 || !this.colors !== !BB.colors || !this.matricesIndices !== !BB.matricesIndices || !this.matricesWeights !== !BB.matricesWeights || !this.matricesIndicesExtra !== !BB.matricesIndicesExtra || !this.matricesWeightsExtra !== !BB.matricesWeightsExtra) throw new Error("Cannot merge vertex data that do not have the same set of attributes");
          if (vB) {
            let BB, TB = 0,
              JB = 0;
            const oB = [];
            let GB = null;
            const vB = [];
            for (const ZB of this.splitBasedOnMaterialID()) vB.push({
              vertexData: ZB,
              transform: IB
            });
            for (const IB of ZB)
              if (IB.vertexData)
                for (const BB of IB.vertexData.splitBasedOnMaterialID()) vB.push({
                  vertexData: BB,
                  transform: IB.transform
                });
            vB.sort(((BB, IB) => {
              const ZB = BB.vertexData.materialInfos ? BB.vertexData.materialInfos[0].materialIndex : 0,
                TB = IB.vertexData.materialInfos ? IB.vertexData.materialInfos[0].materialIndex : 0;
              return ZB > TB ? 1 : ZB === TB ? 0 : -1
            }));
            for (const IB of vB) {
              const ZB = IB.vertexData;
              if (BB = ZB.materialInfos ? ZB.materialInfos[0].materialIndex : 0, GB && GB.materialIndex === BB) GB.indexCount += ZB.indices.length, GB.verticesCount += ZB.positions.length / 3;
              else {
                const IB = new FB;
                IB.materialIndex = BB, IB.indexStart = TB, IB.indexCount = ZB.indices.length, IB.verticesStart = JB, IB.verticesCount = ZB.positions.length / 3, oB.push(IB), GB = IB
              }
              TB += ZB.indices.length, JB += ZB.positions.length / 3
            }
            const kB = vB.splice(0, 1)[0];
            nB = kB.vertexData, IB = kB.transform, cB = vB.map((BB => BB.vertexData)), ZB = vB, this.materialInfos = oB
          }
          const hB = cB.reduce(((BB, IB) => BB + (IB.indices?.length ?? 0)), nB.indices?.length ?? 0);
          let zB = GB || cB.some((BB => BB.indices === nB.indices)) ? nB.indices?.slice() : nB.indices;
          if (hB > 0) {
            let oB = zB?.length ?? 0;
            if (zB || (zB = new Array(hB)), zB.length !== hB) {
              if (Array.isArray(zB)) zB.length = hB;
              else {
                const BB = TB || zB instanceof Uint32Array ? new Uint32Array(hB) : new Uint16Array(hB);
                BB.set(zB), zB = BB
              }
              IB && IB.determinant() < 0 && BB._FlipFaces(zB, 0, oB)
            }
            let GB = nB.positions ? nB.positions.length / 3 : 0;
            for (const {
                vertexData: IB,
                transform: TB
              }
              of ZB)
              if (IB.indices) {
                for (let BB = 0; BB < IB.indices.length; BB++) zB[oB + BB] = IB.indices[BB] + GB;
                TB && TB.determinant() < 0 && BB._FlipFaces(zB, oB, IB.indices.length), GB += IB.positions.length / 3, oB += IB.indices.length, JB && (yield)
              }
          }
          return this.indices = zB, this.positions = BB._MergeElement(oB.i.PositionKind, nB.positions, IB, ZB.map((BB => [BB.vertexData.positions, BB.transform]))), JB && (yield), nB.normals && (this.normals = BB._MergeElement(oB.i.NormalKind, nB.normals, IB, ZB.map((BB => [BB.vertexData.normals, BB.transform]))), JB && (yield)), nB.tangents && (this.tangents = BB._MergeElement(oB.i.TangentKind, nB.tangents, IB, ZB.map((BB => [BB.vertexData.tangents, BB.transform]))), JB && (yield)), nB.uvs && (this.uvs = BB._MergeElement(oB.i.UVKind, nB.uvs, IB, ZB.map((BB => [BB.vertexData.uvs, BB.transform]))), JB && (yield)), nB.uvs2 && (this.uvs2 = BB._MergeElement(oB.i.UV2Kind, nB.uvs2, IB, ZB.map((BB => [BB.vertexData.uvs2, BB.transform]))), JB && (yield)), nB.uvs3 && (this.uvs3 = BB._MergeElement(oB.i.UV3Kind, nB.uvs3, IB, ZB.map((BB => [BB.vertexData.uvs3, BB.transform]))), JB && (yield)), nB.uvs4 && (this.uvs4 = BB._MergeElement(oB.i.UV4Kind, nB.uvs4, IB, ZB.map((BB => [BB.vertexData.uvs4, BB.transform]))), JB && (yield)), nB.uvs5 && (this.uvs5 = BB._MergeElement(oB.i.UV5Kind, nB.uvs5, IB, ZB.map((BB => [BB.vertexData.uvs5, BB.transform]))), JB && (yield)), nB.uvs6 && (this.uvs6 = BB._MergeElement(oB.i.UV6Kind, nB.uvs6, IB, ZB.map((BB => [BB.vertexData.uvs6, BB.transform]))), JB && (yield)), nB.colors && (this.colors = BB._MergeElement(oB.i.ColorKind, nB.colors, IB, ZB.map((BB => [BB.vertexData.colors, BB.transform]))), (void 0 !== nB.hasVertexAlpha || ZB.some((BB => void 0 !== BB.vertexData.hasVertexAlpha))) && (this.hasVertexAlpha = nB.hasVertexAlpha || ZB.some((BB => BB.vertexData.hasVertexAlpha))), JB && (yield)), nB.matricesIndices && (this.matricesIndices = BB._MergeElement(oB.i.MatricesIndicesKind, nB.matricesIndices, IB, ZB.map((BB => [BB.vertexData.matricesIndices, BB.transform]))), JB && (yield)), nB.matricesWeights && (this.matricesWeights = BB._MergeElement(oB.i.MatricesWeightsKind, nB.matricesWeights, IB, ZB.map((BB => [BB.vertexData.matricesWeights, BB.transform]))), JB && (yield)), nB.matricesIndicesExtra && (this.matricesIndicesExtra = BB._MergeElement(oB.i.MatricesIndicesExtraKind, nB.matricesIndicesExtra, IB, ZB.map((BB => [BB.vertexData.matricesIndicesExtra, BB.transform]))), JB && (yield)), nB.matricesWeightsExtra && (this.matricesWeightsExtra = BB._MergeElement(oB.i.MatricesWeightsExtraKind, nB.matricesWeightsExtra, IB, ZB.map((BB => [BB.vertexData.matricesWeightsExtra, BB.transform])))), this
        }
        static _MergeElement(IB, ZB, TB, JB) {
          const GB = JB.filter((BB => null !== BB[0] && void 0 !== BB[0]));
          if (!ZB && 0 == GB.length) return ZB;
          if (!ZB) return this._MergeElement(IB, GB[0][0], GB[0][1], GB.slice(1));
          const vB = GB.reduce(((BB, IB) => BB + IB[0].length), ZB.length),
            kB = IB === oB.i.PositionKind ? BB._TransformVector3Coordinates : IB === oB.i.NormalKind ? BB._TransformVector3Normals : IB === oB.i.TangentKind ? BB._TransformVector4Normals : () => {};
          if (ZB instanceof Float32Array) {
            const BB = new Float32Array(vB);
            BB.set(ZB), TB && kB(BB, TB, 0, ZB.length);
            let IB = ZB.length;
            for (const [ZB, TB] of GB) BB.set(ZB, IB), TB && kB(BB, TB, IB, ZB.length), IB += ZB.length;
            return BB
          } {
            const BB = new Array(vB);
            for (let TB = 0; TB < ZB.length; TB++) BB[TB] = ZB[TB];
            TB && kB(BB, TB, 0, ZB.length);
            let IB = ZB.length;
            for (const [ZB, TB] of GB) {
              for (let TB = 0; TB < ZB.length; TB++) BB[IB + TB] = ZB[TB];
              TB && kB(BB, TB, IB, ZB.length), IB += ZB.length
            }
            return BB
          }
        }
        _validate() {
          if (!this.positions) throw new hB.g("Positions are required", hB.f.MeshInvalidPositionsError);
          const BB = (BB, IB) => {
              const ZB = (0, oB.h)(BB);
              if (IB.length % ZB !== 0) throw new Error("The " + BB + "s array count must be a multiple of " + ZB);
              return IB.length / ZB
            },
            IB = BB(oB.i.PositionKind, this.positions),
            ZB = (ZB, TB) => {
              const JB = BB(ZB, TB);
              if (JB !== IB) throw new Error("The " + ZB + "s element count (" + JB + ") does not match the positions count (" + IB + ")")
            };
          this.normals && ZB(oB.i.NormalKind, this.normals), this.tangents && ZB(oB.i.TangentKind, this.tangents), this.uvs && ZB(oB.i.UVKind, this.uvs), this.uvs2 && ZB(oB.i.UV2Kind, this.uvs2), this.uvs3 && ZB(oB.i.UV3Kind, this.uvs3), this.uvs4 && ZB(oB.i.UV4Kind, this.uvs4), this.uvs5 && ZB(oB.i.UV5Kind, this.uvs5), this.uvs6 && ZB(oB.i.UV6Kind, this.uvs6), this.colors && ZB(oB.i.ColorKind, this.colors), this.matricesIndices && ZB(oB.i.MatricesIndicesKind, this.matricesIndices), this.matricesWeights && ZB(oB.i.MatricesWeightsKind, this.matricesWeights), this.matricesIndicesExtra && ZB(oB.i.MatricesIndicesExtraKind, this.matricesIndicesExtra), this.matricesWeightsExtra && ZB(oB.i.MatricesWeightsExtraKind, this.matricesWeightsExtra)
        }
        clone() {
          const IB = this.serialize();
          return BB.Parse(IB)
        }
        serialize() {
          const BB = {};
          if (this.positions && (BB.positions = Array.from(this.positions)), this.normals && (BB.normals = Array.from(this.normals)), this.tangents && (BB.tangents = Array.from(this.tangents)), this.uvs && (BB.uvs = Array.from(this.uvs)), this.uvs2 && (BB.uvs2 = Array.from(this.uvs2)), this.uvs3 && (BB.uvs3 = Array.from(this.uvs3)), this.uvs4 && (BB.uvs4 = Array.from(this.uvs4)), this.uvs5 && (BB.uvs5 = Array.from(this.uvs5)), this.uvs6 && (BB.uvs6 = Array.from(this.uvs6)), this.colors && (BB.colors = Array.from(this.colors), BB.hasVertexAlpha = this.hasVertexAlpha), this.matricesIndices && (BB.matricesIndices = Array.from(this.matricesIndices), BB.matricesIndicesExpanded = !0), this.matricesWeights && (BB.matricesWeights = Array.from(this.matricesWeights)), this.matricesIndicesExtra && (BB.matricesIndicesExtra = Array.from(this.matricesIndicesExtra), BB.matricesIndicesExtraExpanded = !0), this.matricesWeightsExtra && (BB.matricesWeightsExtra = Array.from(this.matricesWeightsExtra)), BB.indices = this.indices ? Array.from(this.indices) : [], this.materialInfos) {
            BB.materialInfos = [];
            for (const IB of this.materialInfos) {
              const ZB = {
                indexStart: IB.indexStart,
                indexCount: IB.indexCount,
                materialIndex: IB.materialIndex,
                verticesStart: IB.verticesStart,
                verticesCount: IB.verticesCount
              };
              BB.materialInfos.push(ZB)
            }
          }
          return BB
        }
        static ExtractFromMesh(IB, ZB, TB) {
          return BB._ExtractFrom(IB, ZB, TB)
        }
        static ExtractFromGeometry(IB, ZB, TB) {
          return BB._ExtractFrom(IB, ZB, TB)
        }
        static _ExtractFrom(IB, ZB, TB) {
          const JB = new BB;
          if (IB.isVerticesDataPresent(oB.i.PositionKind) && (JB.positions = IB.getVerticesData(oB.i.PositionKind, ZB, TB)), IB.isVerticesDataPresent(oB.i.NormalKind) && (JB.normals = IB.getVerticesData(oB.i.NormalKind, ZB, TB)), IB.isVerticesDataPresent(oB.i.TangentKind) && (JB.tangents = IB.getVerticesData(oB.i.TangentKind, ZB, TB)), IB.isVerticesDataPresent(oB.i.UVKind) && (JB.uvs = IB.getVerticesData(oB.i.UVKind, ZB, TB)), IB.isVerticesDataPresent(oB.i.UV2Kind) && (JB.uvs2 = IB.getVerticesData(oB.i.UV2Kind, ZB, TB)), IB.isVerticesDataPresent(oB.i.UV3Kind) && (JB.uvs3 = IB.getVerticesData(oB.i.UV3Kind, ZB, TB)), IB.isVerticesDataPresent(oB.i.UV4Kind) && (JB.uvs4 = IB.getVerticesData(oB.i.UV4Kind, ZB, TB)), IB.isVerticesDataPresent(oB.i.UV5Kind) && (JB.uvs5 = IB.getVerticesData(oB.i.UV5Kind, ZB, TB)), IB.isVerticesDataPresent(oB.i.UV6Kind) && (JB.uvs6 = IB.getVerticesData(oB.i.UV6Kind, ZB, TB)), IB.isVerticesDataPresent(oB.i.ColorKind)) {
            const BB = IB.geometry || IB,
              GB = BB.getVertexBuffer(oB.i.ColorKind),
              vB = BB.getVerticesData(oB.i.ColorKind, ZB, TB);
            if (3 === GB.getSize()) {
              const BB = new Float32Array(4 * vB.length / 3);
              for (let IB = 0, ZB = 0; IB < vB.length; IB += 3, ZB += 4) BB[ZB] = vB[IB], BB[ZB + 1] = vB[IB + 1], BB[ZB + 2] = vB[IB + 2], BB[ZB + 3] = 1;
              JB.colors = BB
            } else {
              if (4 !== GB.getSize()) throw new Error(`Unexpected number of color components: ${GB.getSize()}`);
              JB.colors = vB
            }
          }
          return IB.isVerticesDataPresent(oB.i.MatricesIndicesKind) && (JB.matricesIndices = IB.getVerticesData(oB.i.MatricesIndicesKind, ZB, TB)), IB.isVerticesDataPresent(oB.i.MatricesWeightsKind) && (JB.matricesWeights = IB.getVerticesData(oB.i.MatricesWeightsKind, ZB, TB)), IB.isVerticesDataPresent(oB.i.MatricesIndicesExtraKind) && (JB.matricesIndicesExtra = IB.getVerticesData(oB.i.MatricesIndicesExtraKind, ZB, TB)), IB.isVerticesDataPresent(oB.i.MatricesWeightsExtraKind) && (JB.matricesWeightsExtra = IB.getVerticesData(oB.i.MatricesWeightsExtraKind, ZB, TB)), JB.indices = IB.MTB(ZB, TB), JB
        }
        static CreateRibbon(BB) {
          throw (0, GB.m)("ribbonBuilder")
        }
        static CreateBox(BB) {
          throw (0, GB.m)("boxBuilder")
        }
        static CreateTiledBox(BB) {
          throw (0, GB.m)("tiledBoxBuilder")
        }
        static CreateTiledPlane(BB) {
          throw (0, GB.m)("tiledPlaneBuilder")
        }
        static CreateSphere(BB) {
          throw (0, GB.m)("sphereBuilder")
        }
        static CreateCylinder(BB) {
          throw (0, GB.m)("cylinderBuilder")
        }
        static CreateTorus(BB) {
          throw (0, GB.m)("torusBuilder")
        }
        static CreateLineSystem(BB) {
          throw (0, GB.m)("linesBuilder")
        }
        static CreateDashedLines(BB) {
          throw (0, GB.m)("linesBuilder")
        }
        static CreateGround(BB) {
          throw (0, GB.m)("groundBuilder")
        }
        static CreateTiledGround(BB) {
          throw (0, GB.m)("groundBuilder")
        }
        static CreateGroundFromHeightMap(BB) {
          throw (0, GB.m)("groundBuilder")
        }
        static CreatePlane(BB) {
          throw (0, GB.m)("planeBuilder")
        }
        static CreateDisc(BB) {
          throw (0, GB.m)("discBuilder")
        }
        static CreatePolygon(BB, IB, ZB, TB, JB, oB, vB) {
          throw (0, GB.m)("polygonBuilder")
        }
        static CreateIcoSphere(BB) {
          throw (0, GB.m)("icoSphereBuilder")
        }
        static CreatePolyhedron(BB) {
          throw (0, GB.m)("polyhedronBuilder")
        }
        static CreateCapsule() {
          arguments.length > 0 && void 0 !== arguments[0] || JB.s.Up();
          throw (0, GB.m)("capsuleBuilder")
        }
        static CreateTorusKnot(BB) {
          throw (0, GB.m)("torusKnotBuilder")
        }
        static ComputeNormals(BB, IB, ZB, TB) {
          let oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, OB = !1,
            YB = !1,
            iB = !1,
            pB = !1,
            aB = 1,
            HB = 0,
            MB = null;
          TB && (OB = !!TB.facetNormals, YB = !!TB.facetPositions, iB = !!TB.facetPartitioning, aB = !0 === TB.useRightHandedSystem ? -1 : 1, HB = TB.ratio || 0, pB = !!TB.depthSort, MB = TB.distanceTo, pB && void 0 === MB && (MB = JB.s.Zero()));
          let jB = 0,
            PB = 0,
            RB = 0,
            rB = 0;
          for (iB && TB && TB.bbSize && (jB = TB.subDiv.X * HB / TB.bbSize.x, PB = TB.subDiv.Y * HB / TB.bbSize.y, RB = TB.subDiv.Z * HB / TB.bbSize.z, rB = TB.subDiv.max * TB.subDiv.max, TB.facetPartitioning.length = 0), oB = 0; oB < BB.length; oB++) ZB[oB] = 0;
          const mB = IB.length / 3 | 0;
          for (oB = 0; oB < mB; oB++) {
            if (qB = 3 * IB[3 * oB], yB = qB + 1, UB = qB + 2, WB = 3 * IB[3 * oB + 1], dB = WB + 1, CB = WB + 2, QB = 3 * IB[3 * oB + 2], sB = QB + 1, wB = QB + 2, GB = BB[qB] - BB[WB], vB = BB[yB] - BB[dB], kB = BB[UB] - BB[CB], cB = BB[QB] - BB[WB], nB = BB[sB] - BB[dB], hB = BB[wB] - BB[CB], zB = aB * (vB * hB - kB * nB), FB = aB * (kB * cB - GB * hB), NB = aB * (GB * nB - vB * cB), gB = Math.sqrt(zB * zB + FB * FB + NB * NB), gB = 0 === gB ? 1 : gB, zB /= gB, FB /= gB, NB /= gB, OB && TB && (TB.facetNormals[oB].x = zB, TB.facetNormals[oB].y = FB, TB.facetNormals[oB].z = NB), YB && TB && (TB.facetPositions[oB].x = (BB[qB] + BB[WB] + BB[QB]) / 3, TB.facetPositions[oB].y = (BB[yB] + BB[dB] + BB[sB]) / 3, TB.facetPositions[oB].z = (BB[UB] + BB[CB] + BB[wB]) / 3), iB && TB) {
              const IB = Math.floor((TB.facetPositions[oB].x - TB.bInfo.minimum.x * HB) * jB),
                ZB = Math.floor((TB.facetPositions[oB].y - TB.bInfo.minimum.y * HB) * PB),
                JB = Math.floor((TB.facetPositions[oB].z - TB.bInfo.minimum.z * HB) * RB),
                GB = Math.floor((BB[qB] - TB.bInfo.minimum.x * HB) * jB),
                vB = Math.floor((BB[yB] - TB.bInfo.minimum.y * HB) * PB),
                kB = Math.floor((BB[UB] - TB.bInfo.minimum.z * HB) * RB),
                cB = Math.floor((BB[WB] - TB.bInfo.minimum.x * HB) * jB),
                nB = Math.floor((BB[dB] - TB.bInfo.minimum.y * HB) * PB),
                hB = Math.floor((BB[CB] - TB.bInfo.minimum.z * HB) * RB),
                zB = Math.floor((BB[QB] - TB.bInfo.minimum.x * HB) * jB),
                FB = Math.floor((BB[sB] - TB.bInfo.minimum.y * HB) * PB),
                NB = Math.floor((BB[wB] - TB.bInfo.minimum.z * HB) * RB),
                gB = GB + TB.subDiv.max * vB + rB * kB,
                OB = cB + TB.subDiv.max * nB + rB * hB,
                YB = zB + TB.subDiv.max * FB + rB * NB,
                iB = IB + TB.subDiv.max * ZB + rB * JB;
              TB.facetPartitioning[iB] = TB.facetPartitioning[iB] ? TB.facetPartitioning[iB] : [], TB.facetPartitioning[gB] = TB.facetPartitioning[gB] ? TB.facetPartitioning[gB] : [], TB.facetPartitioning[OB] = TB.facetPartitioning[OB] ? TB.facetPartitioning[OB] : [], TB.facetPartitioning[YB] = TB.facetPartitioning[YB] ? TB.facetPartitioning[YB] : [], TB.facetPartitioning[gB].push(oB), OB != gB && TB.facetPartitioning[OB].push(oB), YB != OB && YB != gB && TB.facetPartitioning[YB].push(oB), iB != gB && iB != OB && iB != YB && TB.facetPartitioning[iB].push(oB)
            }
            if (pB && TB && TB.facetPositions) {
              const BB = TB.depthSortedFacets[oB];
              BB.ind = 3 * oB, BB.sqDistance = JB.s.DistanceSquared(TB.facetPositions[oB], MB)
            }
            ZB[qB] += zB, ZB[yB] += FB, ZB[UB] += NB, ZB[WB] += zB, ZB[dB] += FB, ZB[CB] += NB, ZB[QB] += zB, ZB[sB] += FB, ZB[wB] += NB
          }
          for (oB = 0; oB < ZB.length / 3; oB++) zB = ZB[3 * oB], FB = ZB[3 * oB + 1], NB = ZB[3 * oB + 2], gB = Math.sqrt(zB * zB + FB * FB + NB * NB), gB = 0 === gB ? 1 : gB, zB /= gB, FB /= gB, NB /= gB, ZB[3 * oB] = zB, ZB[3 * oB + 1] = FB, ZB[3 * oB + 2] = NB
        }
        static _ComputeSides(IB, ZB, TB, oB, GB, vB, kB) {
          const cB = TB.length,
            nB = oB.length;
          let hB, zB;
          switch (IB = IB || BB.DEFAULTSIDE) {
            case BB.FRONTSIDE:
              break;
            case BB.BACKSIDE:
              for (hB = 0; hB < cB; hB += 3) {
                const BB = TB[hB];
                TB[hB] = TB[hB + 2], TB[hB + 2] = BB
              }
              for (zB = 0; zB < nB; zB++) oB[zB] = -oB[zB];
              break;
            case BB.DOUBLESIDE: {
              const BB = ZB.length,
                IB = BB / 3;
              for (let TB = 0; TB < BB; TB++) ZB[BB + TB] = ZB[TB];
              for (hB = 0; hB < cB; hB += 3) TB[hB + cB] = TB[hB + 2] + IB, TB[hB + 1 + cB] = TB[hB + 1] + IB, TB[hB + 2 + cB] = TB[hB] + IB;
              for (zB = 0; zB < nB; zB++) oB[nB + zB] = -oB[zB];
              const FB = GB.length;
              let NB;
              for (NB = 0; NB < FB; NB++) GB[NB + FB] = GB[NB];
              for (vB = vB || new JB.t(0, 0, 1, 1), kB = kB || new JB.t(0, 0, 1, 1), NB = 0, hB = 0; hB < FB / 2; hB++) GB[NB] = vB.x + (vB.z - vB.x) * GB[NB], GB[NB + 1] = vB.y + (vB.w - vB.y) * GB[NB + 1], GB[NB + FB] = kB.x + (kB.z - kB.x) * GB[NB + FB], GB[NB + FB + 1] = kB.y + (kB.w - kB.y) * GB[NB + FB + 1], NB += 2;
              break
            }
          }
        }
        static Parse(IB) {
          const ZB = new BB,
            TB = IB.positions;
          TB && ZB.set(TB, oB.i.PositionKind);
          const JB = IB.normals;
          JB && ZB.set(JB, oB.i.NormalKind);
          const GB = IB.tangents;
          GB && ZB.set(GB, oB.i.TangentKind);
          const kB = IB.uvs;
          kB && ZB.set(kB, oB.i.UVKind);
          const cB = IB.uvs2;
          cB && ZB.set(cB, oB.i.UV2Kind);
          const nB = IB.uvs3;
          nB && ZB.set(nB, oB.i.UV3Kind);
          const hB = IB.uvs4;
          hB && ZB.set(hB, oB.i.UV4Kind);
          const zB = IB.uvs5;
          zB && ZB.set(zB, oB.i.UV5Kind);
          const NB = IB.uvs6;
          NB && ZB.set(NB, oB.i.UV6Kind);
          const gB = IB.colors;
          gB && (ZB.set(vB.g.CheckColors4(gB, TB.length / 3), oB.i.ColorKind), void 0 !== IB.hasVertexAlpha && (ZB.hasVertexAlpha = IB.hasVertexAlpha));
          const qB = IB.matricesIndices;
          qB && ZB.set(qB, oB.i.MatricesIndicesKind);
          const yB = IB.matricesWeights;
          yB && ZB.set(yB, oB.i.MatricesWeightsKind);
          const UB = IB.indices;
          UB && (ZB.indices = UB);
          const WB = IB.materialInfos;
          if (WB) {
            ZB.materialInfos = [];
            for (const BB of WB) {
              const IB = new FB;
              IB.indexCount = BB.indexCount, IB.indexStart = BB.indexStart, IB.verticesCount = BB.verticesCount, IB.verticesStart = BB.verticesStart, IB.materialIndex = BB.materialIndex, ZB.materialInfos.push(IB)
            }
          }
          return ZB
        }
        static ImportVertexData(IB, ZB) {
          const TB = BB.Parse(IB);
          ZB.setAllVerticesData(TB, IB.updatable)
        }
      }, (() => {
        const JB = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        IB = [cB.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], ZB = [cB.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], NB = [cB.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], gB = [cB.h.filter((function() {
          return !Array.isArray(arguments.length <= 0 ? void 0 : arguments[0])
        }))], (0, TB.j)(BB, null, IB, {
          kind: "method",
          name: "_TransformVector3Coordinates",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector3Coordinates" in BB,
            get: BB => BB._TransformVector3Coordinates
          },
          metadata: JB
        }, null, qB), (0, TB.j)(BB, null, ZB, {
          kind: "method",
          name: "_TransformVector3Normals",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector3Normals" in BB,
            get: BB => BB._TransformVector3Normals
          },
          metadata: JB
        }, null, qB), (0, TB.j)(BB, null, NB, {
          kind: "method",
          name: "_TransformVector4Normals",
          static: !0,
          private: !1,
          access: {
            has: BB => "_TransformVector4Normals" in BB,
            get: BB => BB._TransformVector4Normals
          },
          metadata: JB
        }, null, qB), (0, TB.j)(BB, null, gB, {
          kind: "method",
          name: "_FlipFaces",
          static: !0,
          private: !1,
          access: {
            has: BB => "_FlipFaces" in BB,
            get: BB => BB._FlipFaces
          },
          metadata: JB
        }, null, qB), JB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: JB
        })
      })(), BB.FRONTSIDE = ((0, TB.l)(BB, qB), 0), BB.BACKSIDE = 1, BB.DOUBLESIDE = 2, BB.DEFAULTSIDE = 0, BB._UniqueIdGenerator = 0, BB
    })()
  },
  40528: (BB, IB, ZB) => {
    var TB = ZB(37120),
      JB = ZB(38718),
      oB = ZB(40351),
      GB = ZB(40448),
      vB = ZB(40188);
    const kB = "bakedVertexAnimationSettingsInstanced";

    function cB(BB) {
      const IB = BB.bakedVertexAnimationManager?.texture?.getInternalTexture()?._bufferView;
      return IB instanceof Float32Array || IB instanceof Uint16Array
    }

    function nB(BB, IB, ZB, TB) {
      ZB.K9(Number.POSITIVE_INFINITY), TB.K9(Number.NEGATIVE_INFINITY);
      for (let JB = 0; JB < 3 * IB; JB += 3) {
        const IB = BB[JB],
          oB = BB[JB + 1],
          GB = BB[JB + 2];
        IB < ZB.x && (ZB.x = IB), oB < ZB.y && (ZB.y = oB), GB < ZB.z && (ZB.z = GB), IB > TB.x && (TB.x = IB), oB > TB.y && (TB.y = oB), GB > TB.z && (TB.z = GB)
      }
    }

    function hB(BB, IB, ZB) {
      ZB && (BB.x -= BB.x * ZB.x + ZB.y, BB.y -= BB.y * ZB.x + ZB.y, BB.z -= BB.z * ZB.x + ZB.y, IB.x += IB.x * ZB.x + ZB.y, IB.y += IB.y * ZB.x + ZB.y, IB.z += IB.z * ZB.x + ZB.y)
    }

    function zB(BB, IB, ZB, JB, oB) {
      const GB = TB.m.rN[7],
        vB = TB.m.rN[8];
      for (let kB = 0; kB < 2; ++kB)
        for (let cB = 0; cB < 2; ++cB)
          for (let nB = 0; nB < 2; ++nB) GB.set(kB ? IB.x : BB.x, cB ? IB.y : BB.y, nB ? IB.z : BB.z), TB.s.TransformCoordinatesToRef(GB, ZB, vB), JB.minimizeInPlace(vB), oB.maximizeInPlace(vB)
    }

    function FB(BB, IB, ZB, JB, oB) {
      const GB = TB.m.rN[7];
      for (let vB = 0; vB < 3 * IB; vB += 3) TB.s.TransformCoordinatesFromFloatsToRef(BB[vB], BB[vB + 1], BB[vB + 2], ZB, GB), JB.minimizeInPlace(GB), oB.maximizeInPlace(GB)
    }
    let NB = !1;
    NB || (NB = !0, GB.c.prototype.thinInstanceAdd = function(BB) {
      let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      if (!this.JR().PN().getCaps().instancedArrays) return JB.d.Error("Thin Instances are not supported on this device as Instanced Array extension not supported"), -1;
      this._thinInstanceUpdateBufferSize("matrix", Array.isArray(BB) ? BB.length : 1);
      const ZB = this._thinInstanceDataStorage.instancesCount;
      if (Array.isArray(BB))
        for (let TB = 0; TB < BB.length; ++TB) this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB[TB], TB === BB.length - 1 && IB);
      else this.thinInstanceSetMatrixAt(this._thinInstanceDataStorage.instancesCount++, BB, IB);
      return ZB
    }, GB.c.prototype.thinInstanceAddSelf = function() {
      let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
      return this.thinInstanceAdd(TB.b.IdentityReadOnly, BB)
    }, GB.c.prototype.thinInstanceRegisterAttribute = function(BB, IB) {
      BB === vB.i.ColorKind && (BB = vB.i.ColorInstanceKind), this.removeVerticesData(BB), this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.strides[BB] = IB, this._userThinInstanceBuffersStorage.sizes[BB] = IB * Math.max(32, this._thinInstanceDataStorage.instancesCount), this._userThinInstanceBuffersStorage.data[BB] = new Float32Array(this._userThinInstanceBuffersStorage.sizes[BB]), this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new vB.i(this.PN(), this._userThinInstanceBuffersStorage.data[BB], BB, !0, !1, IB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB])
    }, GB.c.prototype.thinInstanceSetMatrixAt = function(BB, IB) {
      let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      if (!this._thinInstanceDataStorage.matrixData || BB >= this._thinInstanceDataStorage.instancesCount) return !1;
      const TB = this._thinInstanceDataStorage.matrixData;
      return IB.copyToArray(TB, 16 * BB), this._thinInstanceDataStorage.worldMatrices && (this._thinInstanceDataStorage.worldMatrices[BB] = IB), ZB && (this.M6("matrix"), this.XN || this.thinInstanceRefreshBoundingInfo(!1)), !0
    }, GB.c.prototype.thinInstanceSetAttributeAt = function(BB, IB, ZB) {
      let TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      return BB === vB.i.ColorKind && (BB = vB.i.ColorInstanceKind), !(!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.data[BB] || IB >= this._thinInstanceDataStorage.instancesCount) && (this._thinInstanceUpdateBufferSize(BB, 0), this._userThinInstanceBuffersStorage.data[BB].set(ZB, IB * this._userThinInstanceBuffersStorage.strides[BB]), TB && this.M6(BB), !0)
    }, Object.defineProperty(GB.c.prototype, "B3", {
      get: function() {
        return this._thinInstanceDataStorage.instancesCount
      },
      set: function(BB) {
        const IB = this._thinInstanceDataStorage.matrixData ?? this.source?._thinInstanceDataStorage.matrixData;
        BB <= (IB ? IB.length / 16 : 0) && (this._thinInstanceDataStorage.instancesCount = BB)
      },
      enumerable: !0,
      configurable: !0
    }), GB.c.prototype._thinInstanceCreateMatrixBuffer = function(BB, IB) {
      let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      const TB = new vB.e(this.PN(), IB, !ZB, 16, !1, !0);
      for (let JB = 0; JB < 4; JB++) this.setVerticesBuffer(TB.createVertexBuffer(BB + JB, 4 * JB, 4));
      return TB
    }, GB.c.prototype.ZBB = function(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
      if (ZB = ZB || 16, "matrix" === BB) this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = null, this._thinInstanceDataStorage.matrixBufferSize = IB ? IB.length : 32 * ZB, this._thinInstanceDataStorage.matrixData = IB, this._thinInstanceDataStorage.worldMatrices = null, null !== IB ? (this._thinInstanceDataStorage.instancesCount = IB.length / ZB, this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", IB, TB), this.XN || this.thinInstanceRefreshBoundingInfo(!1)) : (this._thinInstanceDataStorage.instancesCount = 0, this.XN || this.refreshBoundingInfo());
      else if ("previousMatrix" === BB) this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null, this._thinInstanceDataStorage.previousMatrixData = IB, null !== IB && (this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", IB, TB));
      else if ("splatIndex" === BB && IB) {
        this._thinInstanceInitializeUserStorage(), this._thinInstanceDataStorage.instancesCount = IB.length / ZB, this._userThinInstanceBuffersStorage.data[BB] = IB, this._userThinInstanceBuffersStorage.strides[BB] = ZB, this._userThinInstanceBuffersStorage.sizes[BB] = IB.length;
        const TB = new vB.e(this.PN(), IB, !0, 16, !1, !0);
        this._thinInstanceDataStorage.matrixBuffer = TB;
        for (let IB = 0; IB < 4; IB++) this.setVerticesBuffer(TB.createVertexBuffer(BB + IB, 4 * IB, 4))
      } else BB === vB.i.ColorKind && (BB = vB.i.ColorInstanceKind), null === IB ? this._userThinInstanceBuffersStorage?.data[BB] && (this.removeVerticesData(BB), delete this._userThinInstanceBuffersStorage.data[BB], delete this._userThinInstanceBuffersStorage.strides[BB], delete this._userThinInstanceBuffersStorage.sizes[BB], delete this._userThinInstanceBuffersStorage.vertexBuffers[BB]) : (this._thinInstanceInitializeUserStorage(), this._userThinInstanceBuffersStorage.data[BB] = IB, this._userThinInstanceBuffersStorage.strides[BB] = ZB, this._userThinInstanceBuffersStorage.sizes[BB] = IB.length, this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new vB.i(this.PN(), IB, BB, !TB, !1, ZB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
    }, GB.c.prototype.M6 = function(BB) {
      "matrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.matrixBuffer && !this._thinInstanceDataStorage.matrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._thinInstanceDataStorage.matrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "previousMatrix" === BB ? (this.thinInstanceAllowAutomaticStaticBufferRecreation && this._thinInstanceDataStorage.previousMatrixBuffer && !this._thinInstanceDataStorage.previousMatrixBuffer.isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._thinInstanceDataStorage.previousMatrixBuffer?.updateDirectly(this._thinInstanceDataStorage.previousMatrixData, 0, this._thinInstanceDataStorage.instancesCount)) : "splatIndex" === BB ? this._thinInstanceDataStorage.matrixBuffer?.updateDirectly(this._userThinInstanceBuffersStorage.data[BB], 0, this._thinInstanceDataStorage.instancesCount) : (BB === vB.i.ColorKind && (BB = vB.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB] && (this.thinInstanceAllowAutomaticStaticBufferRecreation && !this._userThinInstanceBuffersStorage.vertexBuffers[BB].isUpdatable() && this._thinInstanceRecreateBuffer(BB), this._userThinInstanceBuffersStorage.vertexBuffers[BB].updateDirectly(this._userThinInstanceBuffersStorage.data[BB], 0)))
    }, GB.c.prototype.thinInstancePartialBufferUpdate = function(BB, IB, ZB) {
      if ("matrix" === BB) this._thinInstanceDataStorage.matrixBuffer && ("number" === typeof IB ? this._thinInstanceDataStorage.matrixBuffer.updateDirectly(new Float32Array(this._thinInstanceDataStorage.matrixData.buffer, this._thinInstanceDataStorage.matrixData.byteOffset + 16 * ZB * Float32Array.BYTES_PER_ELEMENT, 16 * IB), 16 * ZB) : this._thinInstanceDataStorage.matrixBuffer.updateDirectly(IB, ZB));
      else if (BB === vB.i.ColorKind && (BB = vB.i.ColorInstanceKind), this._userThinInstanceBuffersStorage?.vertexBuffers[BB]) {
        const TB = this._userThinInstanceBuffersStorage.vertexBuffers[BB];
        if ("number" === typeof IB) {
          const TB = new Float32Array(this._userThinInstanceBuffersStorage.data[BB].buffer, this._userThinInstanceBuffersStorage.data[BB].byteOffset + ZB * this._userThinInstanceBuffersStorage.strides[BB] * Float32Array.BYTES_PER_ELEMENT, IB * this._userThinInstanceBuffersStorage.strides[BB]);
          this._userThinInstanceBuffersStorage.vertexBuffers[BB].updateDirectly(TB, ZB * this._userThinInstanceBuffersStorage.strides[BB])
        } else TB.updateDirectly(IB, ZB)
      }
    }, GB.c.prototype.thinInstanceGetWorldMatrices = function() {
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return [];
      const BB = this._thinInstanceDataStorage.matrixData;
      if (!this._thinInstanceDataStorage.worldMatrices) {
        this._thinInstanceDataStorage.worldMatrices = [];
        for (let IB = 0; IB < this._thinInstanceDataStorage.instancesCount; ++IB) this._thinInstanceDataStorage.worldMatrices[IB] = TB.b.FromArray(BB, 16 * IB)
      }
      return this._thinInstanceDataStorage.worldMatrices
    }, GB.c.prototype.thinInstanceRefreshBoundingInfo = function() {
      let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (!this._thinInstanceDataStorage.matrixData || !this._thinInstanceDataStorage.matrixBuffer) return;
      const GB = this._thinInstanceDataStorage.boundingVectors;
      if (BB || !this.rawBoundingInfo) {
        if (GB.length = 0, JB && function(BB, IB, ZB) {
            const JB = BB._userThinInstanceBuffersStorage,
              GB = JB?.data[kB],
              NB = JB?.strides[kB];
            if (!GB || !NB || NB < 4 || !cB(BB)) return !1;
            const gB = BB._thinInstanceDataStorage.matrixData;
            if (!gB) return !1;
            const qB = {},
              yB = TB.m.Vector4[0],
              UB = TB.m.rN[1],
              WB = TB.m.rN[2],
              dB = TB.m.rN[3],
              CB = TB.m.rN[4],
              QB = TB.m.rN[5],
              sB = TB.m.rN[6],
              wB = TB.m.Matrix[2],
              OB = BB.geometry ? BB.geometry.boundingBias : null,
              YB = BB.getTotalVertices();
            UB.K9(Number.POSITIVE_INFINITY), WB.K9(Number.NEGATIVE_INFINITY), dB.K9(Number.POSITIVE_INFINITY), CB.K9(Number.NEGATIVE_INFINITY);
            for (let oB = 0; oB < BB._thinInstanceDataStorage.instancesCount; ++oB) {
              const IB = oB * NB;
              yB.set(GB[IB], GB[IB + 1], GB[IB + 2], GB[IB + 3]);
              const JB = BB._getData({
                applyMorph: ZB,
                applyBakedVertexAnimation: !0,
                bakedVertexAnimationSettings: yB,
                updatePositionsArray: !1,
                cache: qB
              }, null, vB.i.PositionKind);
              if (!JB) return !1;
              nB(JB, YB, QB, sB), hB(QB, sB, OB), UB.minimizeInPlace(QB), WB.maximizeInPlace(sB), TB.b.FromArrayToRef(gB, 16 * oB, wB), OB ? zB(QB, sB, wB, dB, CB) : FB(JB, YB, wB, dB, CB)
            }
            return !(!isFinite(UB.x) || !isFinite(dB.x)) && (BB.qm().reConstruct(dB, CB), BB.rawBoundingInfo = new oB.d(UB, WB), function(BB, IB) {
              BB.length = 0;
              for (let ZB = 0; ZB < IB.boundingBox.vectors.length; ++ZB) BB.push(IB.boundingBox.vectors[ZB].clone())
            }(IB, BB.rawBoundingInfo), BB._updateBoundingInfo(), !0)
          }(this, GB, ZB)) return;
        JB && this.bakedVertexAnimationManager?.isEnabled && cB(this) ? this.refreshBoundingInfo({
          applySkeleton: IB,
          applyMorph: ZB,
          applyBakedVertexAnimation: !0,
          updatePositionsArray: !1
        }) : this.refreshBoundingInfo(IB, ZB);
        const BB = this.qm();
        this.rawBoundingInfo = new oB.d(BB.minimum, BB.maximum)
      }
      const NB = this.qm(),
        gB = this._thinInstanceDataStorage.matrixData;
      if (0 === GB.length)
        for (let TB = 0; TB < NB.boundingBox.vectors.length; ++TB) GB.push(NB.boundingBox.vectors[TB].clone());
      TB.m.rN[0].K9(Number.POSITIVE_INFINITY), TB.m.rN[1].K9(Number.NEGATIVE_INFINITY);
      for (let oB = 0; oB < this._thinInstanceDataStorage.instancesCount; ++oB) {
        TB.b.FromArrayToRef(gB, 16 * oB, TB.m.Matrix[0]);
        for (let BB = 0; BB < GB.length; ++BB) TB.s.TransformCoordinatesToRef(GB[BB], TB.m.Matrix[0], TB.m.rN[2]), TB.m.rN[0].minimizeInPlace(TB.m.rN[2]), TB.m.rN[1].maximizeInPlace(TB.m.rN[2])
      }
      NB.reConstruct(TB.m.rN[0], TB.m.rN[1]), this._updateBoundingInfo()
    }, GB.c.prototype._thinInstanceRecreateBuffer = function(BB) {
      let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      "matrix" === BB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", this._thinInstanceDataStorage.matrixData, IB)) : "previousMatrix" === BB ? this._scene.needsPreviousWorldMatrices && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", this._thinInstanceDataStorage.previousMatrixData ?? this._thinInstanceDataStorage.matrixData, IB)) : (BB === vB.i.ColorKind && (BB = vB.i.ColorInstanceKind), this._userThinInstanceBuffersStorage.vertexBuffers[BB]?.dispose(), this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new vB.i(this.PN(), this._userThinInstanceBuffersStorage.data[BB], BB, !IB, !1, this._userThinInstanceBuffersStorage.strides[BB], !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
    }, GB.c.prototype._thinInstanceUpdateBufferSize = function(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
      BB === vB.i.ColorKind && (BB = vB.i.ColorInstanceKind);
      const ZB = "matrix" === BB;
      if (!ZB && (!this._userThinInstanceBuffersStorage || !this._userThinInstanceBuffersStorage.strides[BB])) return;
      const TB = ZB ? 16 : this._userThinInstanceBuffersStorage.strides[BB],
        JB = ZB ? this._thinInstanceDataStorage.matrixBufferSize : this._userThinInstanceBuffersStorage.sizes[BB];
      let oB = ZB ? this._thinInstanceDataStorage.matrixData : this._userThinInstanceBuffersStorage.data[BB];
      const GB = (this._thinInstanceDataStorage.instancesCount + IB) * TB;
      let kB = JB;
      for (; kB < GB;) kB *= 2;
      if (!oB || JB != kB) {
        if (oB) {
          const BB = new Float32Array(kB);
          BB.set(oB, 0), oB = BB
        } else oB = new Float32Array(kB);
        ZB ? (this._thinInstanceDataStorage.matrixBuffer?.dispose(), this._thinInstanceDataStorage.matrixBuffer = this._thinInstanceCreateMatrixBuffer("world", oB, !1), this._thinInstanceDataStorage.matrixData = oB, this._thinInstanceDataStorage.matrixBufferSize = kB, this._scene.needsPreviousWorldMatrices && !this._thinInstanceDataStorage.previousMatrixData && (this._thinInstanceDataStorage.previousMatrixBuffer?.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = this._thinInstanceCreateMatrixBuffer("previousWorld", oB, !1))) : (this._userThinInstanceBuffersStorage.vertexBuffers[BB]?.dispose(), this._userThinInstanceBuffersStorage.data[BB] = oB, this._userThinInstanceBuffersStorage.sizes[BB] = kB, this._userThinInstanceBuffersStorage.vertexBuffers[BB] = new vB.i(this.PN(), oB, BB, !0, !1, TB, !0), this.setVerticesBuffer(this._userThinInstanceBuffersStorage.vertexBuffers[BB]))
      }
    }, GB.c.prototype._thinInstanceInitializeUserStorage = function() {
      this._userThinInstanceBuffersStorage || (this._userThinInstanceBuffersStorage = {
        data: {},
        sizes: {},
        vertexBuffers: {},
        strides: {}
      })
    }, GB.c.prototype._disposeThinInstanceSpecificData = function() {
      this._thinInstanceDataStorage?.matrixBuffer && (this._thinInstanceDataStorage.matrixBuffer.dispose(), this._thinInstanceDataStorage.matrixBuffer = null), this._thinInstanceDataStorage?.previousMatrixBuffer && (this._thinInstanceDataStorage.previousMatrixBuffer.dispose(), this._thinInstanceDataStorage.previousMatrixBuffer = null)
    })
  },
  40492: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => UB,
      g: () => gB
    });
    var TB, JB, oB, GB, vB = ZB(40061),
      kB = ZB(40065),
      cB = ZB(40085),
      nB = ZB(37153),
      hB = ZB(37120),
      zB = ZB(40272),
      FB = ZB(37170),
      NB = ZB(39931);
    let gB = (() => {
      var BB;
      let IB, ZB, TB, JB, oB, GB, FB, NB, gB, qB = zB.e,
        yB = [],
        UB = [],
        WB = [],
        dB = [],
        CB = [],
        QB = [],
        sB = [],
        wB = [],
        OB = [],
        YB = [],
        iB = [],
        pB = [],
        aB = [],
        HB = [],
        MB = [],
        jB = [],
        PB = [],
        RB = [];
      return BB = class extends qB {
        get billboardMode() {
          return this._billboardMode
        }
        set billboardMode(IB) {
          this._billboardMode !== IB && (this._billboardMode = IB, this._cache.useBillboardPosition = 0 !== (this._billboardMode & BB.BILLBOARDMODE_USE_POSITION))
        }
        get infiniteDistance() {
          return this._infiniteDistance
        }
        set infiniteDistance(BB) {
          this._infiniteDistance !== BB && (this._infiniteDistance = BB)
        }
        constructor(IB) {
          let ZB = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(IB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, !1), this._forward = new hB.s(0, 0, 1), this._up = new hB.s(0, 1, 0), this._right = new hB.s(1, 0, 0), this._position = (0, vB.l)(this, yB, hB.s.Zero()), this._rotation = ((0, vB.l)(this, UB), (0, vB.l)(this, WB, hB.s.Zero())), this._rotationQuaternion = ((0, vB.l)(this, dB), (0, vB.l)(this, CB, null)), this._scaling = ((0, vB.l)(this, QB), (0, vB.l)(this, sB, hB.s.One())), this._transformToBoneReferal = ((0, vB.l)(this, wB), null), this._isAbsoluteSynced = !1, this._billboardMode = (0, vB.l)(this, OB, BB.BILLBOARDMODE_NONE), this.scalingDeterminant = ((0, vB.l)(this, YB), (0, vB.l)(this, iB, 1)), this._infiniteDistance = ((0, vB.l)(this, pB), (0, vB.l)(this, aB, !1)), this.ignoreNonUniformScaling = ((0, vB.l)(this, HB), (0, vB.l)(this, MB, !1)), this.reIntegrateRotationIntoRotationQuaternion = ((0, vB.l)(this, jB), (0, vB.l)(this, PB, !1)), this._poseMatrix = ((0, vB.l)(this, RB), null), this._localMatrix = hB.b.Zero(), this._usePivotMatrix = !1, this._absolutePosition = hB.s.Zero(), this._absoluteScaling = hB.s.Zero(), this._absoluteRotationQuaternion = hB.f.Identity(), this._pivotMatrix = hB.b.Identity(), this._postMultiplyPivotMatrix = !1, this._isWorldMatrixFrozen = !1, this._indexInSceneTransformNodesArray = -1, this.onAfterWorldMatrixUpdateObservable = new nB.b, this._nonUniformScaling = !1, ZB && this.JR().addTransformNode(this)
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
        get ek() {
          return this._scaling
        }
        set ek(BB) {
          this._scaling = BB, this._markAsDirtyInternal()
        }
        get rotationQuaternion() {
          return this._rotationQuaternion
        }
        set rotationQuaternion(BB) {
          this._rotationQuaternion = BB, BB && this._rotation.K9(0), this._markAsDirtyInternal()
        }
        _markAsDirtyInternal() {
          this._isDirty || (this._isDirty = !0, this.customMarkAsDirty && this.customMarkAsDirty())
        }
        get forward() {
          return hB.s.TransformNormalFromFloatsToRef(0, 0, this.JR().useRightHandedSystem ? -1 : 1, this.getWorldMatrix(), this._forward), this._forward.normalize()
        }
        get up() {
          return hB.s.TransformNormalFromFloatsToRef(0, 1, 0, this.getWorldMatrix(), this._up), this._up.normalize()
        }
        get right() {
          return hB.s.TransformNormalFromFloatsToRef(this.JR().useRightHandedSystem ? -1 : 1, 0, 0, this.getWorldMatrix(), this._right), this._right.normalize()
        }
        updatePoseMatrix(BB) {
          return this._poseMatrix ? (this._poseMatrix.TY(BB), this) : (this._poseMatrix = BB.clone(), this)
        }
        getPoseMatrix() {
          return this._poseMatrix || (this._poseMatrix = hB.b.Identity()), this._poseMatrix
        }
        _isSynchronized() {
          const IB = this._cache;
          return this._billboardMode === IB.billboardMode && this._billboardMode === BB.BILLBOARDMODE_NONE && (!IB.pivotMatrixUpdated && (!this._infiniteDistance && (!this._position._isDirty && (!this._scaling._isDirty && !(this._rotationQuaternion && this._rotationQuaternion._isDirty || this._rotation._isDirty)))))
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
          let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this._pivotMatrix.TY(BB), this._usePivotMatrix = !this._pivotMatrix.isIdentity(), this._cache.pivotMatrixUpdated = !0, this._postMultiplyPivotMatrix = IB, this._postMultiplyPivotMatrix && (this._pivotMatrixInverse ? this._pivotMatrix.invertToRef(this._pivotMatrixInverse) : this._pivotMatrixInverse = hB.b.Invert(this._pivotMatrix)), this
        }
        getPivotMatrix() {
          return this._pivotMatrix
        }
        instantiateHierarchy() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            IB = arguments.length > 1 ? arguments[1] : void 0,
            ZB = arguments.length > 2 ? arguments[2] : void 0;
          const TB = this.clone("Clone of " + (this.name || this.id), BB || this.parent, !0);
          TB && ZB && ZB(this, TB);
          for (const JB of this.getChildTransformNodes(!0)) JB.instantiateHierarchy(TB, IB, ZB);
          return TB
        }
        yR() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB ? arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (this._rotation.K9(0), this._rotationQuaternion = this._rotationQuaternion || hB.f.Identity(), BB.decompose(this._scaling, this._rotationQuaternion, this._position), this.computeWorldMatrix(!0)) : (this._worldMatrix = BB, this._absolutePosition.cBB(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._afterComputeWorldMatrix()) : (this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0)), this._isDirty = !1, this._isWorldMatrixFrozen = !0, this
        }
        unfreezeWorldMatrix() {
          return this._isWorldMatrixFrozen = !1, this.computeWorldMatrix(!0), this
        }
        get hvB() {
          return this._isWorldMatrixFrozen
        }
        getAbsolutePosition() {
          return this.computeWorldMatrix(), this._absolutePosition
        }
        setAbsolutePosition(BB) {
          if (!BB) return this;
          let IB, ZB, TB;
          if (void 0 === BB.x) {
            if (arguments.length < 3) return this;
            IB = arguments[0], ZB = arguments[1], TB = arguments[2]
          } else IB = BB.x, ZB = BB.y, TB = BB.z;
          if (this.parent) {
            const BB = hB.m.Matrix[0];
            this.parent.getWorldMatrix().invertToRef(BB), hB.s.TransformCoordinatesFromFloatsToRef(IB, ZB, TB, BB, this.position)
          } else this.position.x = IB, this.position.y = ZB, this.position.z = TB;
          return this._absolutePosition.TY(BB), this
        }
        setPositionWithLocalVector(BB) {
          return this.computeWorldMatrix(), this.position = hB.s.TransformNormal(BB, this._localMatrix), this
        }
        getPositionExpressedInLocalSpace() {
          this.computeWorldMatrix();
          const BB = hB.m.Matrix[0];
          return this._localMatrix.invertToRef(BB), hB.s.TransformNormal(this.position, BB)
        }
        locallyTranslate(BB) {
          return this.computeWorldMatrix(!0), this.position = hB.s.TransformCoordinates(BB, this._localMatrix), this
        }
        lookAt(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            TB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
          const GB = BB._LookAtVectorCache,
            vB = 0 === oB ? this.position : this.getAbsolutePosition();
          if (IB.subtractToRef(vB, GB), this.setDirection(GB, ZB, TB, JB), 1 === oB && this.parent)
            if (this.rotationQuaternion) {
              const BB = hB.m.Matrix[0];
              this.rotationQuaternion.toRotationMatrix(BB);
              const IB = hB.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(IB), IB.invert(), BB.multiplyToRef(IB, BB), this.rotationQuaternion.fromRotationMatrix(BB)
            } else {
              const BB = hB.m.Quaternion[0];
              hB.f.FromEulerVectorToRef(this.rotation, BB);
              const IB = hB.m.Matrix[0];
              BB.toRotationMatrix(IB);
              const ZB = hB.m.Matrix[1];
              this.parent.getWorldMatrix().getRotationMatrixToRef(ZB), ZB.invert(), IB.multiplyToRef(ZB, IB), BB.fromRotationMatrix(IB), BB.toEulerAnglesToRef(this.rotation)
            } return this
        }
        XV(BB) {
          const IB = hB.s.Zero();
          return this.getDirectionToRef(BB, IB), IB
        }
        getDirectionToRef(BB, IB) {
          return hB.s.TransformNormalToRef(BB, this.getWorldMatrix(), IB), this
        }
        setDirection(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
          const JB = -Math.atan2(BB.z, BB.x) + Math.PI / 2,
            oB = Math.sqrt(BB.x * BB.x + BB.z * BB.z),
            GB = -Math.atan2(BB.y, oB);
          return this.rotationQuaternion ? hB.f.RotationYawPitchRollToRef(JB + IB, GB + ZB, TB, this.rotationQuaternion) : (this.rotation.x = GB + ZB, this.rotation.y = JB + IB, this.rotation.z = TB), this
        }
        setPivotPoint(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          0 == this.JR().getRenderId() && this.computeWorldMatrix(!0);
          const ZB = this.getWorldMatrix();
          if (1 == IB) {
            const IB = hB.m.Matrix[0];
            ZB.invertToRef(IB), BB = hB.s.TransformCoordinates(BB, IB)
          }
          return this.setPivotMatrix(hB.b.Translation(-BB.x, -BB.y, -BB.z), !0)
        }
        getPivotPoint() {
          const BB = hB.s.Zero();
          return this.getPivotPointToRef(BB), BB
        }
        getPivotPointToRef(BB) {
          return BB.x = -this._pivotMatrix.m[12], BB.y = -this._pivotMatrix.m[13], BB.z = -this._pivotMatrix.m[14], this
        }
        getAbsolutePivotPoint() {
          const BB = hB.s.Zero();
          return this.getAbsolutePivotPointToRef(BB), BB
        }
        getAbsolutePivotPointToRef(BB) {
          return this.getPivotPointToRef(BB), hB.s.TransformCoordinatesToRef(BB, this.getWorldMatrix(), BB), this
        }
        GZB(BB) {
          if (this._isDirty) return this;
          if (this._children)
            for (const IB of this._children) IB.GZB(BB);
          return super.GZB(BB)
        }
        setParent(IB) {
          let ZB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (!IB && !this.parent) return this;
          const JB = hB.m.Quaternion[0],
            oB = hB.m.rN[0],
            GB = hB.m.rN[1],
            vB = hB.m.Matrix[1];
          hB.b.IdentityToRef(vB);
          const kB = hB.m.Matrix[0];
          this.computeWorldMatrix(!0);
          let cB = this.rotationQuaternion;
          return cB || (cB = BB._TmpRotation, hB.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, cB)), hB.b.ComposeToRef(this.ek, cB, this.position, kB), this.parent && kB.multiplyToRef(this.parent.computeWorldMatrix(!0), kB), IB && (IB.computeWorldMatrix(!0).invertToRef(vB), kB.multiplyToRef(vB, kB)), kB.decompose(GB, JB, oB, ZB ? this : void 0), this.rotationQuaternion ? this.rotationQuaternion.TY(JB) : JB.toEulerAnglesToRef(this.rotation), this.ek.TY(GB), this.position.TY(oB), this.parent = IB, TB && this.setPivotMatrix(hB.b.Identity()), this
        }
        addChild(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return BB.setParent(this, IB), this
        }
        removeChild(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return BB.parent !== this || BB.setParent(null, IB), this
        }
        get nonUniformScaling() {
          return this._nonUniformScaling
        }
        _updateNonUniformScalingState(BB) {
          return this._nonUniformScaling !== BB && (this._nonUniformScaling = BB, !0)
        }
        attachToBone(BB, IB) {
          return this._currentParentWhenAttachingToBone = this.parent, this._transformToBoneReferal = IB, this.parent = BB, BB.getSkeleton().prepare(!0), BB.getFinalMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this
        }
        detachFromBone() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          return this.parent ? (this.parent.getWorldMatrix().determinant() < 0 && (this.scalingDeterminant *= -1), this._transformToBoneReferal = null, this.parent = BB ? this._currentParentWhenAttachingToBone : null, this) : (BB && (this.parent = this._currentParentWhenAttachingToBone), this)
        }
        rotate(IB, ZB, TB) {
          let JB;
          if (IB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = this.rotation.toQuaternion(), this.rotation.K9(0)), TB && 0 !== TB) {
            if (this.parent) {
              const BB = this.parent.getWorldMatrix(),
                TB = hB.m.Matrix[0];
              BB.invertToRef(TB), IB = hB.s.TransformNormal(IB, TB), BB.determinant() < 0 && (ZB *= -1)
            }
            JB = hB.f.RotationAxisToRef(IB, ZB, BB._RotationAxisCache), JB.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion)
          } else JB = hB.f.RotationAxisToRef(IB, ZB, BB._RotationAxisCache), this.rotationQuaternion.multiplyToRef(JB, this.rotationQuaternion);
          return this
        }
        rotateAround(BB, IB, ZB) {
          IB.normalize(), this.rotationQuaternion || (this.rotationQuaternion = hB.f.RotationYawPitchRoll(this.rotation.y, this.rotation.x, this.rotation.z), this.rotation.K9(0));
          const TB = hB.m.rN[0],
            JB = hB.m.rN[1],
            oB = hB.m.rN[2],
            GB = hB.m.Quaternion[0],
            vB = hB.m.Matrix[0],
            kB = hB.m.Matrix[1],
            cB = hB.m.Matrix[2],
            nB = hB.m.Matrix[3];
          return BB.subtractToRef(this.position, TB), hB.b.TranslationToRef(TB.x, TB.y, TB.z, vB), hB.b.TranslationToRef(-TB.x, -TB.y, -TB.z, kB), hB.b.RotationAxisToRef(IB, ZB, cB), kB.multiplyToRef(cB, nB), nB.multiplyToRef(vB, nB), nB.decompose(JB, GB, oB), this.position.addInPlace(oB), GB.multiplyToRef(this.rotationQuaternion, this.rotationQuaternion), this
        }
        translate(BB, IB, ZB) {
          const TB = BB.scale(IB);
          if (ZB && 0 !== ZB) this.setAbsolutePosition(this.getAbsolutePosition().add(TB));
          else {
            const BB = this.getPositionExpressedInLocalSpace().add(TB);
            this.setPositionWithLocalVector(BB)
          }
          return this
        }
        addRotation(BB, IB, ZB) {
          let TB;
          this.rotationQuaternion ? TB = this.rotationQuaternion : (TB = hB.m.Quaternion[1], hB.f.RotationYawPitchRollToRef(this.rotation.y, this.rotation.x, this.rotation.z, TB));
          const JB = hB.m.Quaternion[0];
          return hB.f.RotationYawPitchRollToRef(IB, BB, ZB, JB), TB.multiplyInPlace(JB), this.rotationQuaternion || TB.toEulerAnglesToRef(this.rotation), this
        }
        _getEffectiveParent() {
          return this.parent
        }
        isWorldMatrixCameraDependent() {
          return this._infiniteDistance && !this.parent || this._billboardMode !== BB.BILLBOARDMODE_NONE
        }
        computeWorldMatrix() {
          let IB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          if (this._isWorldMatrixFrozen && !this._isDirty) return this._worldMatrix;
          const TB = this.JR().getRenderId();
          if (!this._isDirty && !IB && (this._currentRenderId === TB || this.isSynchronized())) return this._currentRenderId = TB, this._worldMatrix;
          ZB = ZB || this.JR().activeCamera, this._updateCache();
          const JB = this._cache;
          JB.pivotMatrixUpdated = !1, JB.billboardMode = this.billboardMode, JB.infiniteDistance = this.infiniteDistance, JB.parent = this._parentNode, this._currentRenderId = TB, this._childUpdateId += 1, this._isDirty = !1, this._position._isDirty = !1, this._rotation._isDirty = !1, this._scaling._isDirty = !1;
          const oB = this._getEffectiveParent(),
            GB = BB._TmpScaling;
          let vB, kB = this._position;
          if (this._infiniteDistance && !this.parent && ZB) {
            const IB = ZB.getWorldMatrix().m;
            kB = BB._TmpTranslation, kB.cBB(this._position.x + IB[12], this._position.y + IB[13], this._position.z + IB[14])
          }
          if (GB.cBB(this._scaling.x * this.scalingDeterminant, this._scaling.y * this.scalingDeterminant, this._scaling.z * this.scalingDeterminant), this._rotationQuaternion) {
            if (this._rotationQuaternion._isDirty = !1, vB = this._rotationQuaternion, this.reIntegrateRotationIntoRotationQuaternion) {
              this.rotation.lengthSquared() && (this._rotationQuaternion.multiplyInPlace(hB.f.RotationYawPitchRoll(this._rotation.y, this._rotation.x, this._rotation.z)), this._rotation.cBB(0, 0, 0))
            }
          } else vB = BB._TmpRotation, hB.f.RotationYawPitchRollToRef(this._rotation.y, this._rotation.x, this._rotation.z, vB);
          if (this._usePivotMatrix) {
            const BB = hB.m.Matrix[1];
            hB.b.ScalingToRef(GB.x, GB.y, GB.z, BB);
            const IB = hB.m.Matrix[0];
            vB.toRotationMatrix(IB), this._pivotMatrix.multiplyToRef(BB, hB.m.Matrix[4]), hB.m.Matrix[4].multiplyToRef(IB, this._localMatrix), this._postMultiplyPivotMatrix && this._localMatrix.multiplyToRef(this._pivotMatrixInverse, this._localMatrix), this._localMatrix.addTranslationFromFloats(kB.x, kB.y, kB.z)
          } else hB.b.ComposeToRef(GB, vB, kB, this._localMatrix);
          if (oB && oB.getWorldMatrix) {
            if (IB && oB.computeWorldMatrix(IB), this.billboardMode) {
              if (this._transformToBoneReferal) {
                const BB = this.parent;
                BB.getSkeleton().prepare(), BB.getFinalMatrix().multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), hB.m.Matrix[7])
              } else hB.m.Matrix[7].TY(oB.getWorldMatrix());
              const IB = hB.m.rN[5],
                ZB = hB.m.rN[6],
                TB = hB.m.Quaternion[0];
              hB.m.Matrix[7].decompose(ZB, TB, IB), hB.b.ScalingToRef(ZB.x, ZB.y, ZB.z, hB.m.Matrix[7]), hB.m.Matrix[7].setTranslation(IB), BB.BillboardUseParentOrientation && (this._position.applyRotationQuaternionToRef(TB, IB), this._localMatrix.setTranslation(IB)), this._localMatrix.multiplyToRef(hB.m.Matrix[7], this._worldMatrix)
            } else if (this._transformToBoneReferal) {
              const BB = this.parent;
              BB.getSkeleton().prepare(), this._localMatrix.multiplyToRef(BB.getFinalMatrix(), hB.m.Matrix[6]), hB.m.Matrix[6].multiplyToRef(this._transformToBoneReferal.getWorldMatrix(), this._worldMatrix)
            } else this._localMatrix.multiplyToRef(oB.getWorldMatrix(), this._worldMatrix);
            this._markSyncedWithParent()
          } else this._worldMatrix.TY(this._localMatrix);
          if (ZB && this.billboardMode)
            if (JB.useBillboardPosition) {
              const IB = hB.m.rN[0];
              this._worldMatrix.getTranslationToRef(IB);
              const TB = ZB.globalPosition;
              this._worldMatrix.invertToRef(hB.m.Matrix[1]);
              const JB = hB.m.rN[1];
              hB.s.TransformCoordinatesToRef(TB, hB.m.Matrix[1], JB), JB.normalize();
              const oB = -Math.atan2(JB.z, JB.x) + Math.PI / 2,
                GB = Math.sqrt(JB.x * JB.x + JB.z * JB.z),
                vB = -Math.atan2(JB.y, GB);
              if (hB.f.RotationYawPitchRollToRef(oB, vB, 0, hB.m.Quaternion[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
                const IB = hB.m.rN[1];
                hB.m.Quaternion[0].toEulerAnglesToRef(IB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (IB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (IB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMODE_Z && (IB.z = 0), hB.b.RotationYawPitchRollToRef(IB.y, IB.x, IB.z, hB.m.Matrix[0])
              } else hB.b.FromQuaternionToRef(hB.m.Quaternion[0], hB.m.Matrix[0]);
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(hB.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(hB.m.rN[0])
            } else {
              const IB = hB.m.rN[0];
              this._worldMatrix.getTranslationToRef(IB), hB.m.Matrix[1].TY(ZB.getViewMatrix());
              const TB = this.JR().useRightHandedSystem;
              if (TB && hB.m.Matrix[1].multiplyToRef(BB._TmpRHRestore, hB.m.Matrix[1]), hB.m.Matrix[1].setTranslationFromFloats(0, 0, 0), hB.m.Matrix[1].invertToRef(hB.m.Matrix[0]), (this.billboardMode & BB.BILLBOARDMODE_ALL) !== BB.BILLBOARDMODE_ALL) {
                hB.m.Matrix[0].decompose(void 0, hB.m.Quaternion[0], void 0);
                const IB = hB.m.rN[1];
                hB.m.Quaternion[0].toEulerAnglesToRef(IB), (this.billboardMode & BB.BILLBOARDMODE_X) !== BB.BILLBOARDMODE_X && (IB.x = 0), (this.billboardMode & BB.BILLBOARDMODE_Y) !== BB.BILLBOARDMODE_Y && (IB.y = 0), (this.billboardMode & BB.BILLBOARDMODE_Z) !== BB.BILLBOARDMODE_Z && (IB.z = 0), TB && (IB.y += Math.PI), hB.b.RotationYawPitchRollToRef(IB.y, IB.x, IB.z, hB.m.Matrix[0])
              }
              this._worldMatrix.setTranslationFromFloats(0, 0, 0), this._worldMatrix.multiplyToRef(hB.m.Matrix[0], this._worldMatrix), this._worldMatrix.setTranslation(hB.m.rN[0])
            } return this.ignoreNonUniformScaling ? this._updateNonUniformScalingState(!1) : this._scaling.isNonUniformWithinEpsilon(1e-6) ? this._updateNonUniformScalingState(!0) : oB && oB._nonUniformScaling ? this._updateNonUniformScalingState(oB._nonUniformScaling) : this._updateNonUniformScalingState(!1), this._afterComputeWorldMatrix(), this._absolutePosition.cBB(this._worldMatrix.m[12], this._worldMatrix.m[13], this._worldMatrix.m[14]), this._isAbsoluteSynced = !1, this.onAfterWorldMatrixUpdateObservable.notifyObservers(this), this._poseMatrix || (this._poseMatrix = hB.b.Invert(this._worldMatrix)), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix
        }
        resetLocalMatrix() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          if (this.computeWorldMatrix(), BB) {
            const BB = this.getChildren();
            for (let IB = 0; IB < BB.length; ++IB) {
              const ZB = BB[IB];
              if (ZB) {
                ZB.computeWorldMatrix();
                const BB = hB.m.Matrix[0];
                ZB._localMatrix.multiplyToRef(this._localMatrix, BB);
                const IB = hB.m.Quaternion[0];
                BB.decompose(ZB.ek, IB, ZB.position), ZB.rotationQuaternion ? ZB.rotationQuaternion.TY(IB) : IB.toEulerAnglesToRef(ZB.rotation)
              }
            }
          }
          this.ek.cBB(1, 1, 1), this.position.cBB(0, 0, 0), this.rotation.cBB(0, 0, 0), this.rotationQuaternion && (this.rotationQuaternion = hB.f.Identity()), this._worldMatrix = hB.b.Identity()
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
          return BB || (BB = this.JR().activeCamera), hB.s.TransformCoordinates(this.getAbsolutePosition(), BB.getViewMatrix())
        }
        getDistanceToCamera() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return BB || (BB = this.JR().activeCamera), this.getAbsolutePosition().subtract(BB.globalPosition).length()
        }
        clone(IB, ZB, TB) {
          const JB = cB.b.Clone((() => new BB(IB, this.JR())), this);
          if (JB.name = IB, JB.id = IB, ZB && (JB.parent = ZB), !TB) {
            const BB = this.getDescendants(!0);
            for (let ZB = 0; ZB < BB.length; ZB++) {
              const TB = BB[ZB];
              TB.clone && TB.clone(IB + "." + TB.name, JB)
            }
          }
          return JB
        }
        serialize(BB) {
          const IB = cB.b.Serialize(this, BB);
          return IB.type = this.getClassName(), IB.uniqueId = this.uniqueId, this.parent && this.parent._serializeAsParent(IB), IB.localMatrix = this.getPivotMatrix().HTB(), IB.isEnabled = this.isEnabled(), this._isWorldMatrixFrozen && (IB.yR = !0), cB.b.AppendSerializedAnimations(this, IB), IB.vq = this.serializeAnimationRanges(), IB
        }
        getChildTransformNodes(IB, ZB) {
          const TB = [];
          return this._getDescendants(TB, IB, (IB => (!ZB || ZB(IB)) && IB instanceof BB)), TB
        }
        dispose(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this.JR().stopAnimation(this), this.JR().removeTransformNode(this), this._parentContainer) {
            const BB = this._parentContainer.transformNodes.indexOf(this);
            BB > -1 && this._parentContainer.transformNodes.splice(BB, 1), this._parentContainer = null
          }
          if (this.onAfterWorldMatrixUpdateObservable.clear(), BB) {
            const BB = this.getChildTransformNodes(!0);
            for (const IB of BB) IB.parent = null, IB.computeWorldMatrix(!0)
          }
          super.dispose(BB, IB)
        }
        normalizeToUnitCube() {
          let BB = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            ZB = arguments.length > 2 ? arguments[2] : void 0,
            TB = null,
            JB = null;
          IB && (this.rotationQuaternion ? (JB = this.rotationQuaternion.clone(), this.rotationQuaternion.cBB(0, 0, 0, 1)) : this.rotation && (TB = this.rotation.clone(), this.rotation.cBB(0, 0, 0)));
          const oB = this.getHierarchyBoundingVectors(BB, ZB),
            GB = oB.max.subtract(oB.min),
            vB = Math.max(GB.x, GB.y, GB.z);
          if (0 === vB) return this;
          const kB = 1 / vB;
          return this.ek.scaleInPlace(kB), IB && (this.rotationQuaternion && JB ? this.rotationQuaternion.TY(JB) : this.rotation && TB && this.rotation.TY(TB)), this
        }
        _syncAbsoluteScalingAndRotation() {
          this._isAbsoluteSynced || (this._worldMatrix.decompose(this._absoluteScaling, this._absoluteRotationQuaternion), this._isAbsoluteSynced = !0)
        }
      }, (() => {
        const cB = "function" === typeof Symbol && Symbol.metadata ? Object.create(qB[Symbol.metadata] ?? null) : void 0;
        IB = [(0, kB.A)("position")], ZB = [(0, kB.A)("rotation")], TB = [(0, kB.s)("rotationQuaternion")], JB = [(0, kB.A)("ek")], oB = [(0, kB.C)("billboardMode")], GB = [(0, kB.C)()], FB = [(0, kB.C)("infiniteDistance")], NB = [(0, kB.C)()], gB = [(0, kB.C)()], (0, vB.j)(null, null, IB, {
          kind: "field",
          name: "_position",
          static: !1,
          private: !1,
          access: {
            has: BB => "_position" in BB,
            get: BB => BB._position,
            set: (BB, IB) => {
              BB._position = IB
            }
          },
          metadata: cB
        }, yB, UB), (0, vB.j)(null, null, ZB, {
          kind: "field",
          name: "_rotation",
          static: !1,
          private: !1,
          access: {
            has: BB => "_rotation" in BB,
            get: BB => BB._rotation,
            set: (BB, IB) => {
              BB._rotation = IB
            }
          },
          metadata: cB
        }, WB, dB), (0, vB.j)(null, null, TB, {
          kind: "field",
          name: "_rotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: BB => "_rotationQuaternion" in BB,
            get: BB => BB._rotationQuaternion,
            set: (BB, IB) => {
              BB._rotationQuaternion = IB
            }
          },
          metadata: cB
        }, CB, QB), (0, vB.j)(null, null, JB, {
          kind: "field",
          name: "_scaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "_scaling" in BB,
            get: BB => BB._scaling,
            set: (BB, IB) => {
              BB._scaling = IB
            }
          },
          metadata: cB
        }, sB, wB), (0, vB.j)(null, null, oB, {
          kind: "field",
          name: "_billboardMode",
          static: !1,
          private: !1,
          access: {
            has: BB => "_billboardMode" in BB,
            get: BB => BB._billboardMode,
            set: (BB, IB) => {
              BB._billboardMode = IB
            }
          },
          metadata: cB
        }, OB, YB), (0, vB.j)(null, null, GB, {
          kind: "field",
          name: "scalingDeterminant",
          static: !1,
          private: !1,
          access: {
            has: BB => "scalingDeterminant" in BB,
            get: BB => BB.scalingDeterminant,
            set: (BB, IB) => {
              BB.scalingDeterminant = IB
            }
          },
          metadata: cB
        }, iB, pB), (0, vB.j)(null, null, FB, {
          kind: "field",
          name: "_infiniteDistance",
          static: !1,
          private: !1,
          access: {
            has: BB => "_infiniteDistance" in BB,
            get: BB => BB._infiniteDistance,
            set: (BB, IB) => {
              BB._infiniteDistance = IB
            }
          },
          metadata: cB
        }, aB, HB), (0, vB.j)(null, null, NB, {
          kind: "field",
          name: "ignoreNonUniformScaling",
          static: !1,
          private: !1,
          access: {
            has: BB => "ignoreNonUniformScaling" in BB,
            get: BB => BB.ignoreNonUniformScaling,
            set: (BB, IB) => {
              BB.ignoreNonUniformScaling = IB
            }
          },
          metadata: cB
        }, MB, jB), (0, vB.j)(null, null, gB, {
          kind: "field",
          name: "reIntegrateRotationIntoRotationQuaternion",
          static: !1,
          private: !1,
          access: {
            has: BB => "reIntegrateRotationIntoRotationQuaternion" in BB,
            get: BB => BB.reIntegrateRotationIntoRotationQuaternion,
            set: (BB, IB) => {
              BB.reIntegrateRotationIntoRotationQuaternion = IB
            }
          },
          metadata: cB
        }, PB, RB), cB && Object.defineProperty(BB, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: cB
        })
      })(), BB.BILLBOARDMODE_NONE = 0, BB.BILLBOARDMODE_X = 1, BB.BILLBOARDMODE_Y = 2, BB.BILLBOARDMODE_Z = 4, BB.BILLBOARDMODE_ALL = 7, BB.BILLBOARDMODE_USE_POSITION = 128, BB.BillboardUseParentOrientation = !1, BB._TmpRotation = hB.f.Zero(), BB._TmpScaling = hB.s.Zero(), BB._TmpTranslation = hB.s.Zero(), BB._TmpRHRestore = hB.b.Scaling(1, 1, -1), BB._LookAtVectorCache = new hB.s(0, 0, 0), BB._RotationAxisCache = new hB.f, BB
    })();

    function qB(BB, IB, ZB) {
      const TB = cB.b.Parse((() => new gB(BB.name, IB)), BB, IB, ZB);
      if (BB.localMatrix ? TB.setPreTransformMatrix(hB.b.FromArray(BB.localMatrix)) : BB.pivotMatrix && TB.setPivotMatrix(hB.b.FromArray(BB.pivotMatrix)), TB.qY(BB.isEnabled), TB._waitingParsedUniqueId = BB.uniqueId, void 0 !== BB.parentId && (TB._waitingParentId = BB.parentId), void 0 !== BB.parentInstanceIndex && (TB._waitingParentInstanceIndex = BB.parentInstanceIndex), BB.yR && (TB._waitingFreezeWorldMatrix = BB.yR), BB.animations) {
        for (let IB = 0; IB < BB.animations.length; IB++) {
          const ZB = BB.animations[IB],
            JB = (0, FB.e)("BABYLON.Animation");
          JB && TB.animations.push(JB.Parse(ZB))
        }
        zB.e.ParseAnimationRanges(TB, BB, IB)
      }
      return BB.autoAnimate && IB.beginAnimation(TB, BB.autoAnimateFrom, BB.autoAnimateTo, BB.autoAnimateLoop, BB.autoAnimateSpeed || 1), TB
    }
    let yB = !1;

    function UB() {
      yB || (yB = !0, gB.Parse = qB)
    }(TB = gB.prototype).vx ?? (TB.vx = (0, NB.j)("TransformNode", "vx")), (JB = gB.prototype).applyImpulse ?? (JB.applyImpulse = (0, NB.j)("TransformNode", "applyImpulse")), (oB = gB.prototype).applyAngularImpulse ?? (oB.applyAngularImpulse = (0, NB.j)("TransformNode", "applyAngularImpulse")), (GB = gB.prototype).applyTorque ?? (GB.applyTorque = (0, NB.j)("TransformNode", "applyTorque")), Object.getOwnPropertyDescriptor(gB.prototype, "physicsBody") || Object.defineProperty(gB.prototype, "physicsBody", (0, NB.g)("TransformNode", "physicsBody"))
  },
  40454: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      try {
        const TB = BB.next();
        TB.done ? IB(TB) : TB.value ? TB.value.then((() => {
          TB.value = void 0, IB(TB)
        }), ZB) : IB(TB)
      } catch (TB) {
        ZB(TB)
      }
    }

    function JB() {
      let BB, IB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
      return (ZB, JB, oB) => {
        const GB = performance.now();
        void 0 === BB || GB - BB > IB ? (BB = GB, setTimeout((() => {
          TB(ZB, JB, oB)
        }), 0)) : TB(ZB, JB, oB)
      }
    }

    function oB(BB, IB, ZB, TB, JB) {
      const oB = () => {
        let GB;
        const vB = BB => {
          BB.done ? ZB(BB.value) : void 0 === GB ? GB = !0 : oB()
        };
        do {
          GB = void 0, JB && JB.aborted ? TB(new Error("Aborted")) : IB(BB, vB, TB), void 0 === GB && (GB = !1)
        } while (GB)
      };
      oB()
    }

    function GB(BB, IB) {
      let ZB;
      return oB(BB, TB, (BB => ZB = BB), (BB => {
        throw BB
      }), IB), ZB
    }
    async function vB(BB, IB, ZB) {
      return await new Promise(((TB, JB) => {
        oB(BB, IB, TB, JB, ZB)
      }))
    }

    function kB(BB, IB) {
      return function() {
        return GB(BB(...arguments), IB)
      }
    }
    ZB.d(IB, {
      e: () => JB,
      g: () => kB,
      h: () => vB,
      i: () => GB
    })
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);